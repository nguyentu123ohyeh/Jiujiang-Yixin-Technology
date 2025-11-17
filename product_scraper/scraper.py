import requests
from bs4 import BeautifulSoup
import os
import json
import re


# ---------------------------
# CONFIG
# ---------------------------
IMAGE_FOLDER = "images/house"  # nơi lưu ảnh tải về
OUTPUT_JS = "products.js"       # file sinh ra

# googletrans removed()  # removed googletrans()

# ---------------------------
# Dịch tiếng Trung giản thể
# ---------------------------
def translate_cn(text):
    for i in range(3):  # thử tối đa 3 lần
        try:
            resp = requests.post("https://api.deeplx.org/v1/translate", json={
                "text": text,
                "source_lang": "EN",
                "target_lang": "ZH"
            }, timeout=5)

            data = resp.json()
            if "data" in data and data["data"].strip():
                return data["data"]

        except:
            pass
    
    # Nếu vẫn lỗi → dùng fallback Google Web API
    try:
        req = requests.get(
            "https://translate.googleapis.com/translate_a/single",
            params={"client": "gtx", "sl": "en", "tl": "zh-CN", "dt": "t", "q": text},
            timeout=5
        )
        result = req.json()[0][0][0]
        return result
    except:
        return text

# ---------------------------
# Tải ảnh về thư mục
# ---------------------------
def download_image(url, filename):
    if not os.path.exists(IMAGE_FOLDER):
        os.makedirs(IMAGE_FOLDER)

    path = os.path.join(IMAGE_FOLDER, filename)
    try:
        img = requests.get(url)
        with open(path, "wb") as f:
            f.write(img.content)
        return path
    except:
        return None

# ---------------------------
# Lấy ảnh Amazon chất lượng cao
# ---------------------------
def extract_amazon_images(soup):
    """
    Lấy ảnh từ Amazon gallery (hi-res), không trùng, đúng thứ tự.
    """
    images = []

    # --- 1. Tìm JSON ImageBlockATF ---
    for script in soup.find_all("script"):
        if "ImageBlockATF" in script.text:
            json_text = re.search(r'var data = ({.*?});', script.text, re.S)
            if json_text:
                try:
                    data = json.loads(json_text.group(1))
                    items = data.get("colorImages", {}).get("initial", [])

                    for item in items:
                        if item.get("hiRes"):
                            images.append(item["hiRes"])
                        elif item.get("large"):
                            images.append(item["large"])
                        elif item.get("mainUrl"):
                            images.append(item["mainUrl"])

                except:
                    pass

    # --- 2. Fallback: lấy từ data-a-dynamic-image ---
    if not images:
        for img in soup.select("img"):
            dyn = img.get("data-a-dynamic-image")
            if dyn:
                found = re.findall(r'"(https:[^"]+)"', dyn)
                for link in found:
                    if link.startswith("https") and (".jpg" in link or ".png" in link):
                        images.append(link)

    # --- 3. Loại ảnh mờ hoặc icon ---
    images = [
        img for img in images
        if "SS" not in img and "US" not in img and "sprite" not in img
    ]

    # --- 4. Xóa ảnh trùng nhưng vẫn giữ thứ tự ---
    seen = set()
    uniq = []
    for img in images:
        if img not in seen:
            uniq.append(img)
            seen.add(img)

    # Giới hạn tối đa 8 ảnh
    return uniq[:8]
# ---------------------------   


def extract_amazon_description(soup):
    # 1. Feature bullets
    f_bullets = soup.select_one('#feature-bullets')
    if f_bullets:
        text = f_bullets.get_text("\n", strip=True)
        return text
    
    # 2. Dữ liệu mô tả dạng script (nhiều sản phẩm mới dùng cái này)
    script_desc = soup.find("script", string=re.compile("productDescription"))
    if script_desc:
        match = re.search(r"\"productDescription\":\"(.*?)\"", script_desc.text)
        if match:
            text = match.group(1).replace("\\n", "\n")
            return text

    # 3. Mô tả trong div lớn (nhiều sản phẩm dùng cái này)
    dp = soup.select_one("#productDescription")
    if dp:
        return dp.get_text("\n", strip=True)

    # 4. Không tìm thấy
    return "N/A"

# ---------------------------
# Scrape Amazon
# ---------------------------
def scrape_amazon(url, product_id):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
    }
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")

    title = soup.select_one('#productTitle')
    title = title.get_text(strip=True) if title else "N/A"

    # lấy toàn bộ ảnh chất lượng cao
    desc = extract_amazon_description(soup)
    images = extract_amazon_images(soup)
    local_imgs = []

    # Tải ảnh vào thư mục images/house
    for i, link in enumerate(images):
        ext = ".jpg"
        filename = f"{product_id}{'' if i == 0 else '.' + str(i)}{ext}"
        download_image(link, filename)
        local_imgs.append(f"images/house/{filename}")

    return {
        "id": product_id,
        "category": "Home Appliances",
        "name": title,
        "name_cn": translate_cn(title),
        "img": local_imgs[0] if local_imgs else "",
        "imgs": local_imgs,
        "desc": desc,
        "desc_cn": translate_cn(desc)
    }

# ---------------------------
# Xuất ra file products.js
# ---------------------------
def export_js(products):
    js_content = "const PRODUCTS = " + json.dumps(products, indent=2, ensure_ascii=False) + ";"
    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Đã tạo file {OUTPUT_JS} thành công!")

# ---------------------------
# MAIN
# ---------------------------
if __name__ == "__main__":
    links = []
    print("Nhập link Amazon (mỗi dòng 1 link). Nhập 'done' để kết thúc:")

    while True:
        u = input()
        if u.lower() == "done":
            break

        # Auto prepend https:// nếu thiếu
        if not u.startswith("http"):
            u = "https://" + u

        links.append(u)

    products = []
    next_id = 1

    for url in links:
        print(f"Đang xử lý: {url}")
        p = scrape_amazon(url, next_id)
        products.append(p)
        next_id += 1

    export_js(products)
    print("Hoàn tất!")
