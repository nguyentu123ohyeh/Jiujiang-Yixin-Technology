// ===================== CONFIG (GIỮ NGUYÊN) =====================
const PAGE_SIZE = 9;
let currentPage = 1;
let currentCategory = 'all';

// ===================== SUPPORT FUNCTIONS (GIỮ NGUYÊN) =====================
function limitText(str, maxLength) {
  if (!str) return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

// ===================== MAIN SET LANGUAGE =====================
// !!!!! XÓA TOÀN BỘ HÀM setLanguage() KHỎI ĐÂY !!!!!
// !!!!! XÓA TOÀN BỘ HÀM updateProductsLanguage() VÀ updateProductDetailLanguage() KHỎI ĐÂY !!!!!
// !!!!! XÓA BIẾN currentLang KHỎI ĐÂY (vì nó đã ở file global) !!!!!


// ===================== PRODUCT LIST (SỬA ĐỔI) =====================
function renderProducts(page) {
  // Lấy ngôn ngữ từ file lang-global.js
  const text = currentLang === "cn" ? LANG_CN : LANG_EN;

  let filteredProducts =
    currentCategory === 'all' ? PRODUCTS
    : PRODUCTS.filter(p => p.category.en.toLowerCase() === currentCategory);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const products = filteredProducts.slice(start, end);
  const productList = document.getElementById("product-list");
  if (!productList) return;

  if (products.length === 0) {
    productList.innerHTML = `<div class="col-12 text-center py-5"><h4>${text.no_products_found || 'No products found.'}</h4></div>`; // Nên thêm vào file lang
    return;
  }

  productList.innerHTML = products.map(p => {
    const name = p.name[currentLang];
    const desc = p.desc[currentLang];
    return `
      <div class="col-md-4 mb-4 d-flex">
        <div class="card h-100 shadow-sm w-100 bg-faded">
          <img src="${p.img}" class="product-img-fixed" alt="${escapeHtml(name)}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${limitText(name, 40)}</h5>
            <p class="card-text flex-grow-1">${limitText(desc, 90)}</p>
            <div class="card-buttons mt-auto d-flex gap-2">
               <a href="products-detail.html?id=${p.id}" class="main-btn w-100">${text.btn_detail || 'Detail'}</a>
            </div>
          </div>
        </div>
      </div>`; // Lấy chữ "Detail" từ file lang
  }).join('');
}

// ===================== PAGINATION (GIỮ NGUYÊN) =====================
function renderPagination() {
    const text = currentLang === "cn" ? LANG_CN : LANG_EN;
  let filteredProducts = currentCategory === 'all' ? PRODUCTS
    : PRODUCTS.filter(p => p.category.en.toLowerCase() === currentCategory);
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  
  if (totalPages <= 1) {
      pagination.innerHTML = ''; // Ẩn nếu chỉ có 1 trang
      return;
  }

  let html = `<li class="page-item${currentPage === 1 ? ' disabled' : ''}">
      <a class="main-btn-pagination" href="#" onclick="goToPage(${currentPage - 1});return false;">&laquo;</a>
    </li>`;

  let pages = [];
  if (totalPages <= 5) pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  else if (currentPage <= 3) pages = [1, 2, 3, 4, '...', totalPages];
  else if (currentPage >= totalPages - 2) pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  else pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];

  pages.forEach(p => {
    if (p === '...') html += `<li class="page-item disabled"><span class="main-btn-pagination">...</span></li>`;
    else html += `<li class="page-item${p === currentPage ? ' active' : ''}"><a class="main-btn-pagination" href="#" onclick="goToPage(${p});return false;">${p}</a></li>`;
  });

  html += `<li class="page-item${currentPage === totalPages ? ' disabled' : ''}">
      <a class="main-btn-pagination" href="#" onclick="goToPage(${currentPage + 1});return false;">&raquo;</a>
    </li>`;

  pagination.innerHTML = html;
}

function goToPage(page) {
  let filteredProducts = currentCategory === 'all' ? PRODUCTS
    : PRODUCTS.filter(p => p.category.en.toLowerCase() === currentCategory);
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts(currentPage);
  renderPagination();
  window.scrollTo(0, 0);
}

// ===================== PRODUCT DETAIL (SỬA ĐỔI) =====================
function renderProductDetail() {
  const id = getProductIdFromUrl();
  const detailDiv = document.getElementById('product-detail');
  if (!detailDiv) return;
  
  // Lấy ngôn ngữ từ file lang-global.js
  const text = currentLang === "cn" ? LANG_CN : LANG_EN;

  const product = PRODUCTS.find(p => p.id === id);
  if (!product) {
    detailDiv.innerHTML = `<a href="products.html" class="main-btn-outline mb-3">&larr; ${text.btn_back_to_products || 'Back to Products'}</a>
      <h2>${text.product_not_found || 'Product not found'}</h2>`; // Lấy từ file lang
    return;
  }
  
  // Đặt ID sản phẩm vào dataset để hàm update của global có thể dùng
  detailDiv.dataset.id = id; 

  const imgs = product.imgs?.length ? product.imgs : [product.img];
  detailDiv.innerHTML = `
    <a href="products.html" class="btn btn-outline-secondary mb-3">← ${text.btn_back_to_products || 'Back to Products'}</a>
    <div class="product-container">
      <div class="product-gallery">
        <img id="main-product-img" src="${imgs[0]}" class="product-main-img">
        <div class="product-thumb-list">
          ${imgs.map((src, i) => `<img src="${src}" class="product-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">`).join('')}
        </div>
      </div>
      <div class="product-info">
        <div class="badge-cat">${escapeHtml(product.category[currentLang])}</div>
        <h1 class="product-title">${escapeHtml(product.name[currentLang])}</h1>
        <div class="product-desc">${escapeHtml(product.desc[currentLang])}</div>
        <div class="product-actions mt-3">
          <a href="contact.html" class="main-btn">${text.nav_contact || 'Contact Us'}</a>
        </div>
      </div>
    </div>`;

  const mainImg = document.getElementById('main-product-img');
  const thumbs = detailDiv.querySelectorAll('.product-thumb');
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', function () {
      mainImg.src = imgs[idx];
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ===================== INIT (SỬA ĐỔI) =====================
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. CHẠY RENDER LẦN ĐẦU
  // Hàm setLanguage() global sẽ chạy trước (từ file lang-global.js)
  // và thiết lập currentLang. Giờ ta chỉ việc render.
  if (document.getElementById('product-list')) {
      renderProducts(currentPage);
      renderPagination();
  }
  
  if (document.getElementById('product-detail')) {
      renderProductDetail();
  }

  // 2. THIẾT LẬP TABS
  const tabs = document.querySelectorAll('#product-tabs .nav-link');
  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      currentPage = 1;
      renderProducts(currentPage);
      renderPagination();
    });
  });
});