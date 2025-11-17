// wrapper-lang.js
function switchLanguage(lang) {
    // đổi toàn bộ text static
    if (typeof setLanguage === "function") setLanguage(lang);

    // đổi text product
    if (typeof setProductLang === "function") setProductLang(lang);
}
