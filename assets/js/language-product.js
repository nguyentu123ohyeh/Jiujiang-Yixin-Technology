// language-product.js

// Default language
let currentLang = 'en'; // 'en' or 'cn'

// ==================== SET LANGUAGE ====================
function setProductLang(lang) {
    currentLang = lang;

    // ---------------- Product List ----------------
    if (document.getElementById('product-list')) {
        renderProducts(currentPage); // Render lại danh sách sản phẩm
        renderPagination(); // Cập nhật pagination nếu cần

        // Update "Detail" buttons
        const detailButtons = document.querySelectorAll('.card-buttons a');
        detailButtons.forEach(btn => {
            btn.innerText = currentLang === 'cn' ? '详情' : 'Detail';
        });

        // Update category badges
        const badges = document.querySelectorAll('.badge-cat');
        badges.forEach(badge => {
            const productCard = badge.closest('.card');
            const productId = parseInt(productCard?.querySelector('a')?.href?.split('=')[1]);
            if (productId) {
                const product = PRODUCTS.find(p => p.id === productId);
                if (product) badge.innerText = product.category[currentLang];
            }
        });
    }

    // ---------------- Product Detail ----------------
    if (document.getElementById('product-detail')) {
        renderProductDetail(); // Render lại chi tiết sản phẩm với ngôn ngữ mới
    }

    // ---------------- Shop Now Buttons ----------------
    const shopNowBtns = document.querySelectorAll('[data-lang="btn_shop_now"]');
    shopNowBtns.forEach(btn => btn.innerText = currentLang === 'cn' ? '立即购买' : 'Shop Now');

    // ---------------- Tabs ----------------
    const tabs = document.querySelectorAll('#product-tabs .nav-link');
    tabs.forEach(tab => {
        const cat = tab.getAttribute('data-category');
        if (cat === 'all') tab.innerText = currentLang === 'cn' ? '全部' : 'All';
        else {
            // map categories to Chinese if needed
            const product = PRODUCTS.find(p => p.category.en.toLowerCase() === cat);
            if (product) tab.innerText = product.category[currentLang];
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    // Check current page and render
    if (document.getElementById('product-list')) {
        renderProducts(currentPage);
        renderPagination();
    }
    if (document.getElementById('product-detail')) {
        renderProductDetail();
    }
});
