// ===================== DEFAULT LANGUAGE =====================
// Biến này phải được định nghĩa DUY NHẤT ở đây
let currentLang = localStorage.getItem("site_lang") || "cn";

// ===================== MAIN SET LANGUAGE =====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("site_lang", lang);

  // Lấy đối tượng văn bản dựa trên ngôn ngữ
  // Đảm bảo LANG_CN và LANG_EN đã được tải trước file này
  const text = lang === "en" ? LANG_EN : LANG_CN;

  // ===================== CẬP NHẬT TẤT CẢ VĂN BẢN TĨNH =====================
  
  // ===== NAV =====
  const navMap = [
    ['#navmenu a[href="index.html"]', 'nav_home'],
    ['a[href="#why-choose-us"]', 'nav_why'],
    ['a[href="index.html#why-choose-us"]', 'nav_why'],
    ['a[href="about.html"]', 'nav_about'],
    ['a[href="#products"]', 'nav_products'],
    ['a[href="index.html#products"]', 'nav_products'],
    ['a[href="#how-we-work"]', 'nav_work'],
    ['a[href="index.html#how-we-work"]', 'nav_work'],
    ['a[href="contact.html"]', 'nav_contact'],
  ];
  navMap.forEach(([selector, key]) => {
    document.querySelectorAll(selector).forEach(el => el.innerText = text[key]);
  });

  document.querySelectorAll('[data-lang="nav_more"]').forEach(el => el.innerText = text.nav_more);
  document.querySelectorAll('[data-lang="nav_shop"]').forEach(el => el.innerText = text.nav_shop);
  document.querySelectorAll('[data-lang="nav_terms"]').forEach(el => el.innerText = text.nav_terms);
  document.querySelectorAll('[data-lang="nav_privacy"]').forEach(el => el.innerText = text.nav_privacy);
  document.querySelectorAll('#current-lang-label').forEach(el => el.innerText = text.dropdown_language);
  document.querySelectorAll('title[data-lang="title_products"]').forEach(el => el.innerText = text.title_products || 'Products');
  
  // ===== HERO (TỪ FILE 1) =====
  document.querySelectorAll('.hero-title').forEach(el => el.innerText = text.hero_title);
  document.querySelectorAll('.hero-subtitle').forEach(el => el.innerText = text.hero_subtitle);
  document.querySelectorAll('.hero-description').forEach(el => el.innerText = text.hero_description);
  document.querySelectorAll('.hero-actions .btn-primary').forEach(el => el.innerText = text.hero_btn_view_products);
  document.querySelectorAll('.hero-actions .btn-outline-primary').forEach(el => el.innerText = text.hero_btn_contact_us);
  
  // ===== HERO BADGES (MỚI THÊM) =====
  const badges = document.querySelectorAll('.floating-badges .badge-item span');
  if (badges.length >= 3) {
    badges[0].innerText = text.badge_quality;
    badges[1].innerText = text.badge_advanced;
    badges[2].innerText = text.badge_oem;
  }

  // ===== WHY US (TỪ FILE 1) =====
  document.querySelectorAll('#why-choose-us h2').forEach(el => el.innerText = text.why_title);
  const whyParagraphs = document.querySelectorAll('#why-choose-us p');
  if (whyParagraphs.length >= 2) {
    whyParagraphs[0].innerText = text.why_desc1;
    whyParagraphs[1].innerText = text.why_desc2;
  }
  const statsLabels = document.querySelectorAll('.stats-grid .stat-label');
  if (statsLabels.length >= 4) {
    statsLabels[0].innerText = text.why_stat1;
    statsLabels[1].innerText = text.why_stat2;
    statsLabels[2].innerText = text.why_stat3;
    statsLabels[3].innerText = text.why_stat4;
  }
  
  // ===== WHY US - TRUSTED CARD (MỚI THÊM) =====
  const trustedCard = document.querySelector('.floating-card .card-content');
  if (trustedCard) {
    const h4 = trustedCard.querySelector('h4');
    const p = trustedCard.querySelector('p');
    if (h4) h4.innerText = text.trusted_clients;
    if (p) p.innerText = text.trusted_clients_desc;
  }
  
  // ===== WHY US - COUNTDOWN (MỚI THÊM) =====
  document.querySelectorAll('.countdown-title').forEach(el => el.innerText = text.years_exp);
  const countdownItems = document.querySelectorAll('.countdown div h4');
  if (countdownItems.length >= 4) {
    countdownItems[0].innerText = text.count_years;
    countdownItems[1].innerText = text.count_products;
    countdownItems[2].innerText = text.count_clients;
    countdownItems[3].innerText = text.count_reach;
  }
  
  // ===== FEATURES (TỪ FILE 1) =====
  document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
    if (card.querySelector('h4')) card.querySelector('h4').innerText = text[`feature${index + 1}_title`] || '';
    if (card.querySelector('p')) card.querySelector('p').innerText = text[`feature${index + 1}_desc`] || '';
  });
  
  // ===== CTA SECTION (MỚI THÊM) =====
  const cta = document.querySelector('.cta-section .text-center');
  if (cta) {
    const ctaH3 = cta.querySelector('h3');
    if (ctaH3) ctaH3.innerText = text.cta_title;

    const ctaP = cta.querySelector('p');
    if (ctaP) ctaP.innerText = text.cta_desc;

    const ctaBtns = cta.querySelectorAll('a');
    if (ctaBtns.length >= 2) {
      ctaBtns[0].innerText = text.cta_btn_contact;
      ctaBtns[1].innerText = text.cta_btn_learn;
    }
  }

  // ===== PRODUCTS SECTION (HOME PAGE) (TỪ FILE 1) =====
  document.querySelectorAll('#products .section-title h2').forEach(el => el.innerText = text.products_title);
  document.querySelectorAll('#products .section-title p').forEach(el => el.innerText = text.products_desc);

  // Cập nhật cả các showcase card trên trang chủ (Logic đã chuyển vào đây)
  const productCards = document.querySelectorAll('#products .showcase-card');
  productCards.forEach((card, index) => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    
    if (h3 && h3.dataset.lang) {
        h3.innerText = text[h3.dataset.lang] || '';
    } else if (h3) {
        h3.innerText = text[`product${index + 1}_title`] || '';
    }
    
    if (p && p.dataset.lang) {
        p.innerText = text[p.dataset.lang] || '';
    } else if (p) {
        p.innerText = text[`product${index + 1}_desc`] || '';
    }
  });

  // ===== HOW WE WORK (TỪ FILE 1) =====
  document.querySelectorAll('#how-we-work h2').forEach(el => el.innerText = text.how_title);
  document.querySelectorAll('#how-we-work p').forEach(el => el.innerText = text.how_desc);
  document.querySelectorAll('#how-we-work .card').forEach((step, index) => {
    if (step.querySelector('h5')) step.querySelector('h5').innerText = text[`step${index + 1}_title`] || '';
    if (step.querySelector('p')) step.querySelector('p').innerText = text[`step${index + 1}_desc`] || '';
  });
  
  // ===== SUBSCRIBE (MỚI THÊM) =====
  const subscribe = document.querySelector('#subscribe');
  if (subscribe) {
    const subH2 = subscribe.querySelector('h2');
    const subP = subscribe.querySelector('p');
    if (subH2) subH2.innerText = text.subscribe_title;
    if (subP) subP.innerText = text.subscribe_desc;

    const subInput = subscribe.querySelector('#subscribe-email');
    if (subInput) subInput.placeholder = text.subscribe_placeholder;

    const subBtn = subscribe.querySelector('button');
    if (subBtn) subBtn.innerText = text.subscribe_btn;
    
    const subMsg = subscribe.querySelector('#subscribe-message');
    if (subMsg) subMsg.innerText = text.subscribe_success;
  }
  
  // ===== CALL TO ACTION (BOTTOM) (MỚI THÊM) =====
  const call = document.querySelector('#call-to-action');
  if (call) {
    const callH2 = call.querySelector('h2');
    const callP = call.querySelector('p');
    const callA = call.querySelector('a');

    if (callH2) callH2.innerText = text.call_title;
    if (callP) callP.innerText = text.call_desc;
    if (callA) callA.innerText = text.call_btn;
  }

  // ===================================================================
  // ===================== FOOTER (ĐÃ SỬA LẠI CHO CHÍNH XÁC) ===========
  // ===================================================================

  // 1. Dịch nút Shop Now (Bao gồm cả nút trên Header và các nút trong card)
  document.querySelectorAll('[data-lang="btn_shop_now"]').forEach(btn => {
    btn.innerText = text.btn_shop_now;
  });
  // Code dự phòng riêng cho nút Header (nếu selector trên trượt)
  const headerBtn = document.querySelector('.btn-getstarted');
  if (headerBtn) headerBtn.innerText = text.btn_shop_now;


  // 2. Dịch tiêu đề Footer
  const footerH4 = document.querySelectorAll('.footer-links h4');
  if (footerH4.length >= 2) {
    footerH4[0].innerText = text.footer_quick;
    footerH4[1].innerText = text.footer_legal;
  }
  
  // 3. Dịch Links
  document.querySelectorAll('.footer-links ul li a').forEach(link => {
    const href = link.getAttribute('href');
    const textContent = link.innerText.toLowerCase();

    if (href === 'index.html') link.innerText = text.footer_home;
    else if (href === '#products') link.innerText = text.footer_products;
    else if (href === '#services') link.innerText = text.footer_services;
    else if (href === '#team') link.innerText = text.footer_team;
    else if (href === '#contact') link.innerText = text.footer_contact;
    else if (textContent.includes('privacy')) link.innerText = text.footer_privacy;
    else if (textContent.includes('terms')) link.innerText = text.footer_terms;
  });
  
  // 4. Dịch Contact Info (Phone, Email, Address...)
  const footerContacts = document.querySelectorAll('.footer-contact p');
  
  footerContacts.forEach(p => {
    const content = p.innerHTML;
    
    // Địa chỉ công ty
    if (!p.querySelector('strong') && (p.innerText.includes('Yixin Technology') || p.innerText.includes('意信科技'))) {
       p.innerText = text.footer_address;
    }
    
    // Phone
    if (content.includes('Phone') || content.includes('电话')) {
       p.innerHTML = `<strong>${text.footer_phone_label}</strong> <span>${text.footer_phone}</span>`;
    }
    
    // Email
    if (content.includes('Email') || content.includes('邮箱')) {
       p.innerHTML = `<strong>${text.footer_email_label}</strong> <span>${text.footer_email}</span>`;
    }
    
    // Holder (Người đại diện)
    if ((content.includes('Holder') || content.includes('代表人') || content.includes('持有人')) && !content.includes('Address') && !content.includes('地址')) {
       p.innerHTML = `<strong>${text.footer_holder_label}</strong> <span>${text.footer_holder}</span>`;
    }
    
    // Holder Address
    if (content.includes('Holder Address') || content.includes('地址')) {
       p.innerHTML = `<strong>${text.footer_holder_address_label}</strong> <span>${text.footer_holder_address}</span>`;
    }
  });
  
  document.querySelectorAll('.footer-about .sitename').forEach(el => el.innerText = text.site_name);
  
  // ===== COPYRIGHT =====
  const copyrightSpans = document.querySelectorAll('.container.copyright p span');
  if (copyrightSpans.length >= 3) { // 3 spans an toàn hơn
      copyrightSpans[0].innerText = text.copyright_prefix; 
      copyrightSpans[2].innerText = text.copyright_suffix; 
  } else if (copyrightSpans.length >= 2) { // Dự phòng
      copyrightSpans[0].innerText = text.copyright_prefix; 
      copyrightSpans[1].innerText = text.copyright_suffix;
  }

  // ===================================================================
  // ===================== KẾT THÚC SỬA ĐỔI FOOTER =====================
  // ===================================================================

  // ===================================================================
  // ===================== CONTACT PAGE (MỚI THÊM) =====================
  // ===================================================================

  document.querySelectorAll('title[data-lang="title_contact"]').forEach(el => el.innerText = text.title_contact);
  document.querySelectorAll('[data-lang="contact_page_title"]').forEach(el => el.innerText = text.contact_page_title);
  
  // Dùng innerHTML để giữ lại thẻ <strong>
  document.querySelectorAll('[data-lang="contact_desc"]').forEach(el => el.innerHTML = text.contact_desc); 
  
  document.querySelectorAll('[data-lang="contact_info_title"]').forEach(el => el.innerText = text.contact_info_title);
  document.querySelectorAll('[data-lang="contact_info_desc"]').forEach(el => el.innerText = text.contact_info_desc);
  document.querySelectorAll('[data-lang="contact_card1_title"]').forEach(el => el.innerText = text.contact_card1_title);
  document.querySelectorAll('[data-lang="contact_card2_title"]').forEach(el => el.innerText = text.contact_card2_title);
  document.querySelectorAll('[data-lang="contact_card3_title"]').forEach(el => el.innerText = text.contact_card3_title);
  document.querySelectorAll('[data-lang="contact_card4_title"]').forEach(el => el.innerText = text.contact_card4_title);
  document.querySelectorAll('[data-lang="contact_social_title"]').forEach(el => el.innerText = text.contact_social_title);
  document.querySelectorAll('[data-lang="contact_form_title"]').forEach(el => el.innerText = text.contact_form_title);
  document.querySelectorAll('[data-lang="contact_form_desc"]').forEach(el => el.innerText = text.contact_form_desc);
  
  // Dịch các label của Form
  document.querySelectorAll('[data-lang="form_name"]').forEach(el => el.innerText = text.form_name);
  document.querySelectorAll('[data-lang="form_email"]').forEach(el => el.innerText = text.form_email);
  document.querySelectorAll('[data-lang="form_subject"]').forEach(el => el.innerText = text.form_subject);
  document.querySelectorAll('[data-lang="form_message"]').forEach(el => el.innerText = text.form_message);
  document.querySelectorAll('[data-lang="form_loading"]').forEach(el => el.innerText = text.form_loading);
  document.querySelectorAll('[data-lang="form_sent"]').forEach(el => el.innerText = text.form_sent);

  // Xử lý riêng cho nút Form (để giữ lại icon)
  document.querySelectorAll('[data-lang="form_button"]').forEach(el => {
    el.innerHTML = `${text.form_button} <i class="bi bi-send-fill ms-2"></i>`;
  });
  
  // Xử lý riêng cho placeholder của Form
  const nameInput = document.querySelector('#nameInput');
  if (nameInput) nameInput.placeholder = text.form_name;
  const emailInput = document.querySelector('#emailInput');
  if (emailInput) emailInput.placeholder = text.form_email;
  const subjectInput = document.querySelector('#subjectInput');
  if (subjectInput) subjectInput.placeholder = text.form_subject;
  const messageInput = document.querySelector('#messageInput');
  if (messageInput) messageInput.placeholder = text.form_message;

  // Xử lý riêng cho các thẻ p dùng chung key (trong info-card)
  document.querySelectorAll('.info-card [data-lang="footer_address"]').forEach(el => el.innerText = text.footer_address);
  document.querySelectorAll('.info-card [data-lang="footer_email"]').forEach(el => el.innerText = text.footer_email);
  document.querySelectorAll('.info-card [data-lang="footer_phone"]').forEach(el => el.innerText = text.footer_phone);
  document.querySelectorAll('.info-card [data-lang="footer_holder"]').forEach(el => el.innerText = text.footer_holder);
  document.querySelectorAll('.info-card [data-lang="footer_holder_address"]').forEach(el => el.innerText = text.footer_holder_address);

  // Xử lý riêng cho Breadcrumb trang hiện tại
  document.querySelectorAll('.breadcrumbs li.current').forEach(el => {
      // Chỉ dịch nếu text là 'Contact' (tránh ghi đè trang 'All Products')
      if (el.getAttribute('data-lang') === 'nav_contact') {
          el.innerText = text.nav_contact;
      }
  });

  // ===================== KẾT THÚC CONTACT PAGE =======================
  // ===================================================================
  // ===================== ABOUT PAGE (MỚI THÊM) =====================
  // ===================================================================

  document.querySelectorAll('title[data-lang="title_about"]').forEach(el => el.innerText = text.title_about);
  document.querySelectorAll('[data-lang="about_title"]').forEach(el => el.innerText = text.about_title);
  document.querySelectorAll('[data-lang="about_desc"]').forEach(el => el.innerText = text.about_desc);
  
  // Breadcrumbs (Dịch mục 'Home' và 'About' hiện tại)
  document.querySelectorAll('.breadcrumbs li a[data-lang="nav_home"]').forEach(el => el.innerText = text.nav_home);
  document.querySelectorAll('.breadcrumbs li.current[data-lang="nav_about"]').forEach(el => el.innerText = text.nav_about);

  // Mission Section
  document.querySelectorAll('[data-lang="mission_title"]').forEach(el => el.innerText = text.mission_title);
  document.querySelectorAll('[data-lang="mission_p1"]').forEach(el => el.innerText = text.mission_p1);
  document.querySelectorAll('[data-lang="mission_p2"]').forEach(el => el.innerText = text.mission_p2);

  // Quick Facts Card
  document.querySelectorAll('[data-lang="quick_facts_title"]').forEach(el => el.innerText = text.quick_facts_title);
  document.querySelectorAll('[data-lang="label_company"]').forEach(el => el.innerText = text.label_company);
  document.querySelectorAll('[data-lang="label_location"]').forEach(el => el.innerText = text.label_location);
  document.querySelectorAll('[data-lang="label_phone"]').forEach(el => el.innerText = text.label_phone);
  document.querySelectorAll('[data-lang="label_email"]').forEach(el => el.innerText = text.label_email);
  document.querySelectorAll('[data-lang="label_holder"]').forEach(el => el.innerText = text.label_holder);
  
  // (Các giá trị trong Quick Facts Card và Office Info dùng chung key từ footer và site_name,
  //  chúng đã được dịch ở các đoạn code khác nên không cần gọi lại ở đây)

  // Values Section
  document.querySelectorAll('[data-lang="values_title"]').forEach(el => el.innerText = text.values_title);
  document.querySelectorAll('[data-lang="values_subtitle"]').forEach(el => el.innerText = text.values_subtitle);
  document.querySelectorAll('[data-lang="values_1_title"]').forEach(el => el.innerText = text.values_1_title);
  document.querySelectorAll('[data-lang="values_1_desc"]').forEach(el => el.innerText = text.values_1_desc);
  document.querySelectorAll('[data-lang="values_2_title"]').forEach(el => el.innerText = text.values_2_title);
  document.querySelectorAll('[data-lang="values_2_desc"]').forEach(el => el.innerText = text.values_2_desc);
  document.querySelectorAll('[data-lang="values_3_title"]').forEach(el => el.innerText = text.values_3_title);
  document.querySelectorAll('[data-lang="values_3_desc"]').forEach(el => el.innerText = text.values_3_desc);
  
  // Office Info Section
  document.querySelectorAll('[data-lang="office_title"]').forEach(el => el.innerText = text.office_title);
  document.querySelectorAll('[data-lang="office_desc"]').forEach(el => el.innerText = text.office_desc);
  document.querySelectorAll('[data-lang="label_address"]').forEach(el => el.innerText = text.label_address);
  document.querySelectorAll('[data-lang="label_holder_address"]').forEach(el => el.innerText = text.label_holder_address);

  // ===================== KẾT THÚC ABOUT PAGE =======================
  // ===================================================================
  // ===================== TERMS PAGE (MỚI THÊM) =====================
  // ===================================================================

  document.querySelectorAll('title[data-lang="title_terms"]').forEach(el => el.innerText = text.title_terms);
  document.querySelectorAll('[data-lang="terms_page_title"]').forEach(el => el.innerText = text.terms_page_title);
  document.querySelectorAll('[data-lang="terms_desc"]').forEach(el => el.innerHTML = text.terms_desc); // innerHTML an toàn
  
  // Breadcrumbs (Dịch 'Home' và 'Terms' hiện tại)
  document.querySelectorAll('.breadcrumbs li a[data-lang="nav_home"]').forEach(el => el.innerText = text.nav_home);
  document.querySelectorAll('.breadcrumbs li.current[data-lang="nav_terms"]').forEach(el => el.innerText = text.nav_terms);
  
  // Header
  document.querySelectorAll('[data-lang="terms_last_updated"]').forEach(el => el.innerText = text.terms_last_updated);
  document.querySelectorAll('[data-lang="terms_header_subtitle"]').forEach(el => el.innerText = text.terms_header_subtitle);
  
  // Dịch tất cả các mục
  document.querySelectorAll('[data-lang="terms_s1_h"]').forEach(el => el.innerText = text.terms_s1_h);
  document.querySelectorAll('[data-lang="terms_s1_p1"]').forEach(el => el.innerText = text.terms_s1_p1);
  document.querySelectorAll('[data-lang="terms_s1_box"]').forEach(el => el.innerText = text.terms_s1_box);
  
  document.querySelectorAll('[data-lang="terms_s2_h"]').forEach(el => el.innerText = text.terms_s2_h);
  document.querySelectorAll('[data-lang="terms_s2_p1"]').forEach(el => el.innerText = text.terms_s2_p1);
  document.querySelectorAll('[data-lang="terms_s2_li1"]').forEach(el => el.innerText = text.terms_s2_li1);
  document.querySelectorAll('[data-lang="terms_s2_li2"]').forEach(el => el.innerText = text.terms_s2_li2);
  document.querySelectorAll('[data-lang="terms_s2_li3"]').forEach(el => el.innerText = text.terms_s2_li3);
  document.querySelectorAll('[data-lang="terms_s2_li4"]').forEach(el => el.innerText = text.terms_s2_li4);
  
  document.querySelectorAll('[data-lang="terms_s3_h"]').forEach(el => el.innerText = text.terms_s3_h);
  document.querySelectorAll('[data-lang="terms_s3_p1"]').forEach(el => el.innerText = text.terms_s3_p1);
  document.querySelectorAll('[data-lang="terms_s3_box_h"]').forEach(el => el.innerText = text.terms_s3_box_h);
  document.querySelectorAll('[data-lang="terms_s3_box_p"]').forEach(el => el.innerText = text.terms_s3_box_p);
  
  document.querySelectorAll('[data-lang="terms_s4_h"]').forEach(el => el.innerText = text.terms_s4_h);
  document.querySelectorAll('[data-lang="terms_s4_p1"]').forEach(el => el.innerText = text.terms_s4_p1);
  document.querySelectorAll('[data-lang="terms_s4_li1"]').forEach(el => el.innerText = text.terms_s4_li1);
  document.querySelectorAll('[data-lang="terms_s4_li2"]').forEach(el => el.innerText = text.terms_s4_li2);
  document.querySelectorAll('[data-lang="terms_s4_li3"]').forEach(el => el.innerText = text.terms_s4_li3);
  document.querySelectorAll('[data-lang="terms_s4_li4"]').forEach(el => el.innerText = text.terms_s4_li4);
  
  document.querySelectorAll('[data-lang="terms_s5_h"]').forEach(el => el.innerText = text.terms_s5_h);
  document.querySelectorAll('[data-lang="terms_s5_p1"]').forEach(el => el.innerText = text.terms_s5_p1);
  document.querySelectorAll('[data-lang="terms_s5_box_h"]').forEach(el => el.innerText = text.terms_s5_box_h);
  document.querySelectorAll('[data-lang="terms_s5_li1"]').forEach(el => el.innerText = text.terms_s5_li1);
  document.querySelectorAll('[data-lang="terms_s5_li2"]').forEach(el => el.innerText = text.terms_s5_li2);
  document.querySelectorAll('[data-lang="terms_s5_li3"]').forEach(el => el.innerText = text.terms_s5_li3);
  document.querySelectorAll('[data-lang="terms_s5_li4"]').forEach(el => el.innerText = text.terms_s5_li4);
  
  document.querySelectorAll('[data-lang="terms_s6_h"]').forEach(el => el.innerText = text.terms_s6_h);
  document.querySelectorAll('[data-lang="terms_s6_p1"]').forEach(el => el.innerText = text.terms_s6_p1);
  
  document.querySelectorAll('[data-lang="terms_s7_h"]').forEach(el => el.innerText = text.terms_s7_h);
  document.querySelectorAll('[data-lang="terms_s7_p1"]').forEach(el => el.innerText = text.terms_s7_p1);
  
  document.querySelectorAll('[data-lang="terms_s8_h"]').forEach(el => el.innerText = text.terms_s8_h);
  document.querySelectorAll('[data-lang="terms_s8_p1"]').forEach(el => el.innerText = text.terms_s8_p1);
  
  document.querySelectorAll('[data-lang="terms_s9_h"]').forEach(el => el.innerText = text.terms_s9_h);
  document.querySelectorAll('[data-lang="terms_s9_p1"]').forEach(el => el.innerText = text.terms_s9_p1);
  
  document.querySelectorAll('[data-lang="terms_s10_h"]').forEach(el => el.innerText = text.terms_s10_h);
  document.querySelectorAll('[data-lang="terms_s10_p1"]').forEach(el => el.innerText = text.terms_s10_p1);
  document.querySelectorAll('[data-lang="terms_s10_box"]').forEach(el => el.innerText = text.terms_s10_box);
  
  // Contact Box
  document.querySelectorAll('[data-lang="terms_contact_h"]').forEach(el => el.innerText = text.terms_contact_h);
  document.querySelectorAll('[data-lang="terms_contact_p"]').forEach(el => el.innerText = text.terms_contact_p);
  document.querySelectorAll('[data-lang="terms_contact_link"]').forEach(el => el.innerText = text.terms_contact_link);

  // ===================== KẾT THÚC TERMS PAGE =======================
  // ===================================================================
  // ===================== PRIVACY PAGE (MỚI THÊM) =====================
  // ===================================================================

  document.querySelectorAll('title[data-lang="title_privacy"]').forEach(el => el.innerText = text.title_privacy);
  document.querySelectorAll('[data-lang="privacy_page_title"]').forEach(el => el.innerText = text.privacy_page_title);
  document.querySelectorAll('[data-lang="privacy_desc"]').forEach(el => el.innerHTML = text.privacy_desc); // innerHTML
  
  // Breadcrumbs (Dịch 'Home' và 'Privacy' hiện tại)
  document.querySelectorAll('.breadcrumbs li a[data-lang="nav_home"]').forEach(el => el.innerText = text.nav_home);
  document.querySelectorAll('.breadcrumbs li.current[data-lang="nav_privacy"]').forEach(el => el.innerText = text.nav_privacy);
  
  // Header
  document.querySelectorAll('[data-lang="privacy_last_updated"]').forEach(el => el.innerText = text.privacy_last_updated);
  document.querySelectorAll('[data-lang="privacy_intro_p1"]').forEach(el => el.innerText = text.privacy_intro_p1);
  
  // Dịch tất cả các mục
  document.querySelectorAll('[data-lang="privacy_s1_h"]').forEach(el => el.innerText = text.privacy_s1_h);
  document.querySelectorAll('[data-lang="privacy_s1_p1"]').forEach(el => el.innerText = text.privacy_s1_p1);
  
  document.querySelectorAll('[data-lang="privacy_s2_h"]').forEach(el => el.innerText = text.privacy_s2_h);
  document.querySelectorAll('[data-lang="privacy_s2_p1"]').forEach(el => el.innerText = text.privacy_s2_p1);
  document.querySelectorAll('[data-lang="privacy_s2_1_h"]').forEach(el => el.innerText = text.privacy_s2_1_h);
  document.querySelectorAll('[data-lang="privacy_s2_1_p1"]').forEach(el => el.innerText = text.privacy_s2_1_p1);
  document.querySelectorAll('[data-lang="privacy_s2_1_li1"]').forEach(el => el.innerText = text.privacy_s2_1_li1);
  document.querySelectorAll('[data-lang="privacy_s2_1_li2"]').forEach(el => el.innerText = text.privacy_s2_1_li2);
  document.querySelectorAll('[data-lang="privacy_s2_1_li3"]').forEach(el => el.innerText = text.privacy_s2_1_li3);
  document.querySelectorAll('[data-lang="privacy_s2_1_li4"]').forEach(el => el.innerText = text.privacy_s2_1_li4);
  document.querySelectorAll('[data-lang="privacy_s2_2_h"]').forEach(el => el.innerText = text.privacy_s2_2_h);
  document.querySelectorAll('[data-lang="privacy_s2_2_p1"]').forEach(el => el.innerText = text.privacy_s2_2_p1);
  document.querySelectorAll('[data-lang="privacy_s2_2_li1"]').forEach(el => el.innerText = text.privacy_s2_2_li1);
  document.querySelectorAll('[data-lang="privacy_s2_2_li2"]').forEach(el => el.innerText = text.privacy_s2_2_li2);
  document.querySelectorAll('[data-lang="privacy_s2_2_li3"]').forEach(el => el.innerText = text.privacy_s2_2_li3);
  document.querySelectorAll('[data-lang="privacy_s2_2_li4"]').forEach(el => el.innerText = text.privacy_s2_2_li4);
  
  document.querySelectorAll('[data-lang="privacy_s3_h"]').forEach(el => el.innerText = text.privacy_s3_h);
  document.querySelectorAll('[data-lang="privacy_s3_p1"]').forEach(el => el.innerText = text.privacy_s3_p1);
  document.querySelectorAll('[data-lang="privacy_s3_li1"]').forEach(el => el.innerText = text.privacy_s3_li1);
  document.querySelectorAll('[data-lang="privacy_s3_li2"]').forEach(el => el.innerText = text.privacy_s3_li2);
  document.querySelectorAll('[data-lang="privacy_s3_li3"]').forEach(el => el.innerText = text.privacy_s3_li3);
  document.querySelectorAll('[data-lang="privacy_s3_li4"]').forEach(el => el.innerText = text.privacy_s3_li4);
  document.querySelectorAll('[data-lang="privacy_s3_li5"]').forEach(el => el.innerText = text.privacy_s3_li5);
  
  document.querySelectorAll('[data-lang="privacy_s4_h"]').forEach(el => el.innerText = text.privacy_s4_h);
  document.querySelectorAll('[data-lang="privacy_s4_p1"]').forEach(el => el.innerText = text.privacy_s4_p1);
  document.querySelectorAll('[data-lang="privacy_s4_1_h"]').forEach(el => el.innerText = text.privacy_s4_1_h);
  document.querySelectorAll('[data-lang="privacy_s4_1_p1"]').forEach(el => el.innerText = text.privacy_s4_1_p1);
  document.querySelectorAll('[data-lang="privacy_s4_2_h"]').forEach(el => el.innerText = text.privacy_s4_2_h);
  document.querySelectorAll('[data-lang="privacy_s4_2_p1"]').forEach(el => el.innerText = text.privacy_s4_2_p1);
  document.querySelectorAll('[data-lang="privacy_s4_2_li1"]').forEach(el => el.innerText = text.privacy_s4_2_li1);
  document.querySelectorAll('[data-lang="privacy_s4_2_li2"]').forEach(el => el.innerText = text.privacy_s4_2_li2);
  document.querySelectorAll('[data-lang="privacy_s4_2_li3"]').forEach(el => el.innerText = text.privacy_s4_2_li3);

  document.querySelectorAll('[data-lang="privacy_s5_h"]').forEach(el => el.innerText = text.privacy_s5_h);
  document.querySelectorAll('[data-lang="privacy_s5_p1"]').forEach(el => el.innerText = text.privacy_s5_p1);
  document.querySelectorAll('[data-lang="privacy_s5_li1"]').forEach(el => el.innerText = text.privacy_s5_li1);
  document.querySelectorAll('[data-lang="privacy_s5_li2"]').forEach(el => el.innerText = text.privacy_s5_li2);
  document.querySelectorAll('[data-lang="privacy_s5_li3"]').forEach(el => el.innerText = text.privacy_s5_li3);

  document.querySelectorAll('[data-lang="privacy_s6_h"]').forEach(el => el.innerText = text.privacy_s6_h);
  document.querySelectorAll('[data-lang="privacy_s6_p1"]').forEach(el => el.innerText = text.privacy_s6_p1);
  document.querySelectorAll('[data-lang="privacy_s6_li1"]').forEach(el => el.innerText = text.privacy_s6_li1);
  document.querySelectorAll('[data-lang="privacy_s6_li2"]').forEach(el => el.innerText = text.privacy_s6_li2);
  document.querySelectorAll('[data-lang="privacy_s6_li3"]').forEach(el => el.innerText = text.privacy_s6_li3);
  document.querySelectorAll('[data-lang="privacy_s6_li4"]').forEach(el => el.innerText = text.privacy_s6_li4);
  
  document.querySelectorAll('[data-lang="privacy_s7_h"]').forEach(el => el.innerText = text.privacy_s7_h);
  document.querySelectorAll('[data-lang="privacy_s7_p1"]').forEach(el => el.innerText = text.privacy_s7_p1);
  document.querySelectorAll('[data-lang="privacy_s7_p2"]').forEach(el => el.innerText = text.privacy_s7_p2);
  
  // Contact Box
  document.querySelectorAll('[data-lang="privacy_contact_h"]').forEach(el => el.innerText = text.privacy_contact_h);
  document.querySelectorAll('[data-lang="privacy_contact_p"]').forEach(el => el.innerText = text.privacy_contact_p);
  document.querySelectorAll('[data-lang="privacy_contact_email"]').forEach(el => el.innerHTML = text.privacy_contact_email);
  document.querySelectorAll('[data-lang="privacy_contact_address"]').forEach(el => el.innerHTML = text.privacy_contact_address);

  // ===================== KẾT THÚC PRIVACY PAGE =======================

  // ===== ALL PRODUCTS PAGE (TỪ FILE 1 VÀ 2) =====
  document.querySelectorAll('[data-lang="all_products_title"]').forEach(el => el.innerText = text.all_products_title);
  document.querySelectorAll('[data-lang="all_products_desc"]').forEach(el => el.innerText = text.all_products_desc);
  
  // ===== (MỚI) BREADCRUMBS =====
  // Dịch breadcrumb trên trang sản phẩm
  const breadcrumbs = document.querySelectorAll('.breadcrumbs ol li');
  if (breadcrumbs.length >= 2) {
    if (breadcrumbs[0].querySelector('a')) breadcrumbs[0].querySelector('a').innerText = text.nav_home;
    if (breadcrumbs[1].classList.contains('current')) breadcrumbs[1].innerText = text.all_products_title;
  }
  
  // ===== CẬP NHẬT TABS SẢN PHẨM (ĐÃ SỬA LỖI AN TOÀN) =====
  const tabs = document.querySelectorAll('#product-tabs .nav-link');
  tabs.forEach(tab => {
    const cat = tab.getAttribute('data-category');
    if (cat === 'all') {
      tab.innerText = text.tab_all || (currentLang === 'cn' ? '全部' : 'All');
    } else if (cat) {
      // Dịch dựa trên key, KHÔNG dùng biến 'PRODUCTS'
      const key = `tab_${cat.replace('-', '_')}`; // Ví dụ: 'smart-home' -> 'tab_smart_home'
      tab.innerText = text[key] || cat; // Nếu không có key, hiện tạm category
    }
  });

  // ===================== GỌI HÀM RENDER LẠI NỘI DUNG ĐỘNG =====================
  
  // Khối code lỗi (Block 1) đã bị XÓA HOÀN TOÀN
  
  // 1. Render lại toàn bộ nếu ở trang allproduct.html
  if (typeof renderProducts === 'function') {
    renderProducts(currentPage); // Chỉ cần gọi lại hàm này là đủ
    if (typeof renderPagination === 'function') {
        renderPagination();
    }
  }

  // 2. Render lại nếu ở trang chi tiết sản phẩm
  if (typeof renderProductDetail === 'function') {
    renderProductDetail();
  }
}

// Chạy 1 lần khi tải trang
window.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});