(function () {
  const STORAGE_KEY = "supercycle_lang";
  const DEFAULT_LANG = "en";
  const LANGS = ["en", "ar"];

  const translations = {
    "SuperCycle - Admin Login": "سوبر سايكل - تسجيل دخول الإدارة",
    "SuperCycle – Admin Dashboard": "سوبر سايكل - لوحة تحكم الإدارة",
    "SuperCycle - Shipments Management": "سوبر سايكل - إدارة الشحنات",
    "SuperCycle – Create Representative": "سوبر سايكل - إنشاء مندوب",
    "SuperCycle - Create Trader": "سوبر سايكل - إنشاء تاجر",
    "SuperCycle - Shipment Details": "سوبر سايكل - تفاصيل الشحنة",
    "Segment & Route": "تقسيم وتوجيه",
    "Eco Participants – SuperCycle": "مشاركو البرنامج البيئي - سوبر سايكل",
    "SuperCycle – Eco Redeems": "سوبر سايكل - طلبات الاستبدال البيئي",
    "SuperCycle": "سوبر سايكل",
    "Professional Cardboard Recycling Management System":
      "نظام احترافي لإدارة إعادة تدوير الكرتون",
    "Admin Access": "دخول الإدارة",
    "Sign in to your account": "سجّل الدخول إلى حسابك",
    "Email Address": "البريد الإلكتروني",
    "Sign In": "تسجيل الدخول",
    "Logout": "تسجيل الخروج",
    "Operations": "العمليات",
    "Pending Approvals": "الموافقات المعلقة",
    "Review and approve shipments waiting for admin verification":
      "راجع واعتمد الشحنات التي تنتظر تحقق الإدارة",
    "Pending Segmentation": "التقسيمات المعلقة",
    "Route and segment shipments for optimal logistics planning":
      "قسّم ووجّه الشحنات لتحقيق أفضل تخطيط لوجستي",
    "Eco Program": "البرنامج البيئي",
    "Eco Participants": "مشاركو البرنامج البيئي",
    "Enroll and manage environmental program participants":
      "أضف المشاركين في البرنامج البيئي وأدرهم",
    "Redemption Requests": "طلبات الاستبدال",
    "Process approvals and track environmental impact metrics":
      "عالج الطلبات واعرض مؤشرات الأثر البيئي",
    "Accounts": "الحسابات",
    "Field Representatives": "المندوبون الميدانيون",
    "Create and manage field operations representatives":
      "أنشئ وادِر مندوبي العمليات الميدانية",
    "Contracts & Pricing": "العقود والتسعير",
    "Establish trader contracts and configure pricing models":
      "أنشئ عقود التجار واضبط نماذج التسعير",
    "Shipments Management": "إدارة الشحنات",
    "Pending Approval / Edit": "بانتظار الاعتماد أو التعديل",
    "Shipment No": "رقم الشحنة",
    "Total (KG)": "الإجمالي (كجم)",
    "Status": "الحالة",
    "Created At": "تاريخ الإنشاء",
    "No pending shipments for approval": "لا توجد شحنات بانتظار الاعتماد",
    "Pending Segmentation & Routing": "بانتظار التقسيم والتوجيه",
    "No pending shipments for segmentation": "لا توجد شحنات بانتظار التقسيم",
    "Create Representative": "إنشاء مندوب",
    "Representative Information": "بيانات المندوب",
    "Full Name": "الاسم الكامل",
    "Email": "البريد الإلكتروني",
    "Phone": "الهاتف",
    "Address": "العنوان",
    "National ID": "الرقم القومي",
    "Password": "كلمة المرور",
    "Create": "إنشاء",
    "Clear": "مسح",
    "Eco Participants": "مشاركو البرنامج البيئي",
    "Dashboard": "لوحة التحكم",
    "Business": "النشاط التجاري",
    "Manager": "المسؤول",
    "Action": "الإجراء",
    "Convert to Eco Participant?": "تحويل إلى مشارك بيئي؟",
    "Cancel": "إلغاء",
    "Confirm": "تأكيد",
    "Convert": "تحويل",
    "Eco Redemption Requests": "طلبات الاستبدال البيئي",
    "Filter by status:": "تصفية حسب الحالة:",
    "All": "الكل",
    "Pending": "معلق",
    "Approved": "مقبول",
    "Planted": "تمت الزراعة",
    "Rejected": "مرفوض",
    "Trader": "التاجر",
    "Redeem Info": "تفاصيل الطلب",
    "Created": "تم الإنشاء",
    "Actions": "الإجراءات",
    "Approve": "قبول",
    "Reject": "رفض",
    "Mark Planted": "تحديد كمزروع",
    "Create Trader": "إنشاء تاجر",
    "Trader Type": "نوع التاجر",
    "Contracted Trader": "تاجر متعاقد",
    "Uncontracted Trader": "تاجر غير متعاقد",
    "Trader Info": "بيانات التاجر",
    "Business Name": "اسم النشاط",
    "Business Type": "نوع النشاط",
    "Business Address": "عنوان النشاط",
    "Dosh Manager Name": "اسم مسؤول الدوش",
    "Dosh Manager Phone": "هاتف مسؤول الدوش",
    "Contract": "العقد",
    "Meal": "وجبات",
    "Monthly": "شهري",
    "Cash": "نقدي",
    "Wallet": "محفظة",
    "Bank Transfer": "تحويل بنكي",
    "Fixed Shipment Days (comma e.g. 2,5)":
      "أيام الشحن الثابتة (مثال: 2,5)",
    "Estimated Qty / Shipment": "الكمية التقديرية لكل شحنة",
    "Wallet Number": "رقم المحفظة",
    "Bank Name": "اسم البنك",
    "Account Number": "رقم الحساب",
    "IBAN (optional)": "IBAN (اختياري)",
    "If no branches are added, the API will create the default main branch from the contract data.":
      "إذا لم تتم إضافة فروع، سيقوم الـ API بإنشاء الفرع الرئيسي الافتراضي من بيانات العقد.",
    "Branches": "الفروع",
    "Add Branch": "إضافة فرع",
    "Branch Name": "اسم الفرع",
    "Contact Name": "اسم مسؤول التواصل",
    "Contact Phone": "هاتف مسؤول التواصل",
    "Shipment Days (comma e.g. 2,5)": "أيام الشحن (مثال: 2,5)",
    "Weekly": "أسبوعي",
    "Biweekly": "كل أسبوعين",
    "-- Select Dosh Type --": "-- اختر نوع الدوش --",
    "Custom Dates (YYYY-MM-DD, comma)":
      "تواريخ مخصصة (YYYY-MM-DD مفصولة بفواصل)",
    "Remove": "حذف",
    "Shipment Details": "تفاصيل الشحنة",
    "Loading...": "جارٍ التحميل...",
    "Current Items": "العناصر الحالية",
    "Segment & Route Shipment": "تقسيم الشحنة وتوجيهها",
    "Add Segment": "إضافة قطاع",
    "Segment ": "قطاع ",
    "Items": "العناصر",
    "Vehicle": "المركبة",
    "-- Select Vehicle --": "-- اختر مركبة --",
    "Destination Type": "نوع الوجهة",
    "Factory": "مصنع",
    "Warehouse": "مخزن",
    "Destination": "الوجهة",
    "-- Select Destination --": "-- اختر وجهة --",
    "Scheduled For (Optional)": "موعد التنفيذ (اختياري)",
    "Remove Segment": "حذف القطاع",
    "Quantity KG": "الكمية بالكيلو",
    "Shipment Images": "صور الشحنة",
    "Shipment Information": "معلومات الشحنة",
    "Total KG": "إجمالي الكيلو",
    "Pickup Address": "عنوان الاستلام",
    "Requested Pickup At": "موعد الاستلام المطلوب",
    "Shipment Items": "محتويات الشحنة",
    "Activity Timeline": "سجل النشاط",
    "Admin Actions": "إجراءات الإدارة",
    "Assign Representative": "تعيين مندوب",
    "-- Select Representative --": "-- اختر مندوبًا --",
    "Assign Vehicles": "تعيين مركبات",
    "Notes / Reason": "ملاحظات / سبب",
    "Add a note for this shipment...": "أضف ملاحظة لهذه الشحنة...",
    "Note Visibility": "ظهور الملاحظة",
    "Admin": "الإدارة",
    "Representative": "المندوب",
    "Edit & Approve": "تعديل واعتماد",
    "Add Note": "إضافة ملاحظة",
    "Edit Shipment": "تعديل الشحنة",
    "Pickup Date": "تاريخ الاستلام",
    "Add Item": "إضافة عنصر",
    "Vehicles:": "المركبات:",
    "Total Capacity:": "السعة الإجمالية:",
    "Shipment:": "الشحنة:",
    "Loading shipment details...": "جارٍ تحميل تفاصيل الشحنة...",
    "Back": "رجوع",
    "pending": "معلق",
    "pending_admin_review": "بانتظار مراجعة الإدارة",
    "approved": "مقبول",
    "rejected": "مرفوض",
    "planted": "تمت الزراعة",
    "Unknown": "غير معروف",
    "factory": "مصنع",
    "warehouse": "مخزن",
    "Please enter both email and password":
      "من فضلك أدخل البريد الإلكتروني وكلمة المرور",
    "Login failed": "فشل تسجيل الدخول",
    "Please fill all required fields": "من فضلك املأ كل الحقول المطلوبة",
    "Failed to create representative": "فشل إنشاء المندوب",
    "Representative created successfully": "تم إنشاء المندوب بنجاح",
    "Network error": "خطأ في الشبكة",
    "to Eco participant?": "كمشارك بيئي؟",
    "Failed to convert trader": "فشل تحويل التاجر",
    "Failed to load redemption requests": "فشل تحميل طلبات الاستبدال",
    "No redemption requests": "لا توجد طلبات استبدال",
    "Quantity:": "الكمية:",
    "Points Used:": "النقاط المستخدمة:",
    "Reason for rejection?": "سبب الرفض؟",
    "Action failed": "فشل تنفيذ الإجراء",
    "Wallet number is required for wallet payment method":
      "رقم المحفظة مطلوب عند اختيار الدفع بالمحفظة",
    "Bank name and account number are required for bank transfer":
      "اسم البنك ورقم الحساب مطلوبان عند اختيار التحويل البنكي",
    "Failed": "فشل التنفيذ",
    "Contracted trader created successfully":
      "تم إنشاء التاجر المتعاقد بنجاح",
    "Uncontracted trader created successfully":
      "تم إنشاء التاجر غير المتعاقد بنجاح",
    "Shipment has not been inspected yet": "لم يتم فحص الشحنة بعد",
    "Error loading shipment: ": "خطأ أثناء تحميل الشحنة: ",
    "Please add at least one segment": "من فضلك أضف قطاعًا واحدًا على الأقل",
    "Segment {index}: add at least one item":
      "القطاع {index}: أضف عنصرًا واحدًا على الأقل",
    "Segment {segment} item {item}: select a dosh type":
      "القطاع {segment} العنصر {item}: اختر نوع الدوش",
    "Segment {segment} item {item}: enter a valid weight":
      "القطاع {segment} العنصر {item}: أدخل وزنًا صحيحًا",
    "Segment {index}: select a vehicle":
      "القطاع {index}: اختر مركبة",
    "Segment {index}: select a destination":
      "القطاع {index}: اختر وجهة",
    "Failed to segment shipment": "فشل تقسيم الشحنة",
    "Shipment segmented and routed successfully":
      "تم تقسيم الشحنة وتوجيهها بنجاح",
    "Error: ": "خطأ: ",
    "Failed to add note": "فشل إضافة الملاحظة",
    "Invalid items": "العناصر غير صالحة",
    "Shipment edited & approved": "تم تعديل الشحنة واعتمادها",
    "Shipment approved": "تم اعتماد الشحنة",
    "Shipment rejected": "تم رفض الشحنة",
    "Please enter a note": "من فضلك أدخل ملاحظة",
    "Please select at least one visibility option":
      "من فضلك اختر جهة ظهور واحدة على الأقل",
    "Note added successfully": "تمت إضافة الملاحظة بنجاح",
  };

  const rtlStyle = `
    .lang-switcher {
      position: fixed;
      inset-block-start: 16px;
      inset-inline-end: 16px;
      z-index: 10001;
      display: flex;
      gap: 6px;
      background: rgba(15, 23, 42, 0.72);
      backdrop-filter: blur(8px);
      border-radius: 999px;
      padding: 6px;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
    }

    .lang-switcher button {
      border: none;
      background: transparent;
      color: #fff;
      padding: 8px 12px;
      border-radius: 999px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
    }

    .lang-switcher button.active {
      background: #2ba572;
    }

    html[dir="rtl"] body {
      direction: rtl;
      text-align: right;
    }

    html[dir="rtl"] .header,
    html[dir="rtl"] .section-header,
    html[dir="rtl"] .actions,
    html[dir="rtl"] .button-group,
    html[dir="rtl"] .filter-bar,
    html[dir="rtl"] .checkbox-group {
      flex-direction: row-reverse;
    }

    html[dir="rtl"] .header h1,
    html[dir="rtl"] .header h2,
    html[dir="rtl"] .section h2,
    html[dir="rtl"] .card h3 {
      text-align: right;
    }

    html[dir="rtl"] th,
    html[dir="rtl"] td,
    html[dir="rtl"] label,
    html[dir="rtl"] input,
    html[dir="rtl"] select,
    html[dir="rtl"] textarea,
    html[dir="rtl"] .info-item,
    html[dir="rtl"] .info-row,
    html[dir="rtl"] .empty-message,
    html[dir="rtl"] .empty,
    html[dir="rtl"] .message,
    html[dir="rtl"] .summary-box,
    html[dir="rtl"] .modal-content {
      text-align: right;
    }

    html[dir="rtl"] .badge {
      right: auto !important;
      left: 20px;
    }
  `;

  const state = {
    textNodes: [],
    placeholders: [],
    title: document.title,
    isApplying: false,
  };

  function injectStyle() {
    const style = document.createElement("style");
    style.textContent = rtlStyle;
    document.head.appendChild(style);
  }

  function getLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(stored) ? stored : DEFAULT_LANG;
  }

  function interpolate(text, vars) {
    return String(text).replace(/\{(\w+)\}/g, (_, key) =>
      vars && vars[key] != null ? vars[key] : "",
    );
  }

  function translateText(text, lang) {
    if (lang !== "ar") return text;

    let result = String(text);
    Object.keys(translations)
      .sort((a, b) => b.length - a.length)
      .forEach((source) => {
        result = result.split(source).join(translations[source]);
      });

    return result;
  }

  function rememberTextNode(node) {
    if (!node || !node.nodeValue || !node.nodeValue.trim()) return;
    const parent = node.parentElement;
    if (!parent) return;
    const tag = parent.tagName;
    if (["SCRIPT", "STYLE"].includes(tag)) return;
    if (node.__i18nTracked) return;

    node.__i18nTracked = true;
    node.__i18nOriginal = node.nodeValue;
    state.textNodes.push(node);
  }

  function rememberPlaceholder(element) {
    if (!element || !element.getAttribute) return;
    const placeholder = element.getAttribute("placeholder");
    if (!placeholder || element.__i18nPlaceholderTracked) return;

    element.__i18nPlaceholderTracked = true;
    element.__i18nPlaceholderOriginal = placeholder;
    state.placeholders.push(element);
  }

  function scanNode(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      rememberTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE) return;

    if (root.matches("input[placeholder], textarea[placeholder]")) {
      rememberPlaceholder(root);
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) {
            return NodeFilter.FILTER_REJECT;
          }
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName;
          if (["SCRIPT", "STYLE"].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    let current;
    while ((current = walker.nextNode())) {
      rememberTextNode(current);
    }

    root
      .querySelectorAll?.("input[placeholder], textarea[placeholder]")
      .forEach((element) => rememberPlaceholder(element));
  }

  function captureTextNodes() {
    scanNode(document.body);
  }

  function applyCurrentLanguage() {
    state.isApplying = true;
    const lang = getLanguage();

    state.textNodes.forEach((node) => {
      node.nodeValue = translateText(node.__i18nOriginal, lang);
    });

    state.placeholders.forEach((element) => {
      element.setAttribute(
        "placeholder",
        translateText(element.__i18nPlaceholderOriginal, lang),
      );
    });

    document.title = translateText(state.title, lang);
    updateSwitcher(lang);
    state.isApplying = false;
  }

  function watchDomChanges() {
    const observer = new MutationObserver((mutations) => {
      if (state.isApplying) return;

      let hasNewNodes = false;
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            scanNode(node);
            hasNewNodes = true;
          });
        }
      });

      if (hasNewNodes) {
        applyCurrentLanguage();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  }

  function injectSwitcher() {
    const wrapper = document.createElement("div");
    wrapper.className = "lang-switcher";
    wrapper.innerHTML = `
      <button type="button" data-lang="en">EN</button>
      <button type="button" data-lang="ar">AR</button>
    `;

    wrapper.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    document.body.appendChild(wrapper);
  }

  function updateSwitcher(lang) {
    document.querySelectorAll(".lang-switcher button").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    const safeLang = LANGS.includes(lang) ? lang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, safeLang);
    document.documentElement.lang = safeLang;
    document.documentElement.dir = safeLang === "ar" ? "rtl" : "ltr";
    applyCurrentLanguage();

    if (typeof window.onLanguageChange === "function") {
      window.onLanguageChange(safeLang);
    }
  }

  window.__t = function (text, vars) {
    const lang = getLanguage();
    return interpolate(translateText(text, lang), vars);
  };

  window.__status = function (status) {
    return window.__t(status || "Unknown");
  };

  window.__formatDateTime = function (value) {
    if (!value) return "-";
    const lang = getLanguage();
    return new Date(value).toLocaleString(lang === "ar" ? "ar-EG" : "en-US");
  };

  window.__lang = function () {
    return getLanguage();
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectStyle();
    captureTextNodes();
    injectSwitcher();
    watchDomChanges();
    setLanguage(getLanguage());
  });
})();
