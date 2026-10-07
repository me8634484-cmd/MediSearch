// ===== Medicine Database =====
const medicinesDatabase = [
    {
        id: 1,
        name: { en: "Panadol Extra", ar: "بانادول إكسترا" },
        generic: { en: "Paracetamol + Caffeine", ar: "باراسيتامول + كافيين" },
        category: { en: "Painkillers", ar: "مسكنات" },
        categoryKey: "painkillers",
        price: 25.5,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Nausea", "Allergic reactions", "Liver damage (overdose)", "Insomnia"],
            ar: ["غثيان", "ردود فعل تحسسية", "تلف الكبد (جرعة زائدة)", "أرق"]
        },
        alternatives: [
            { name: { en: "Tylenol", ar: "تايلينول" }, price: 15.00 },
            { name: { en: "Fevadol", ar: "فيفادول" }, price: 8.50 },
            { name: { en: "Adol", ar: "أدول" }, price: 10.00 }
        ],
        description: {
            en: "Fast-acting pain relief for headaches, muscle pain, and fever.",
            ar: "مسكن سريع المفعول للصداع وآلام العضلات والحمى."
        }
    },
    {
        id: 2,
        name: { en: "Augmentin 625mg", ar: "أوجمنتين 625 مجم" },
        generic: { en: "Amoxicillin + Clavulanate", ar: "أموكسيسيلين + كلافولانات" },
        category: { en: "Antibiotics", ar: "مضادات حيوية" },
        categoryKey: "antibiotics",
        price: 117,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Diarrhea", "Nausea", "Skin rash", "Stomach upset"],
            ar: ["إسهال", "غثيان", "طفح جلدي", "اضطراب المعدة"]
        },
        alternatives: [
            { name: { en: "Klavox", ar: "كلافوكس" }, price: 38.00 },
            { name: { en: "Curam", ar: "كيورام" }, price: 42.00 },
            { name: { en: "Amoclan", ar: "أموكلان" }, price: 35.00 }
        ],
        description: {
            en: "Broad-spectrum antibiotic for bacterial infections.",
            ar: "مضاد حيوي واسع الطيف للعدوى البكتيرية."
        }
    },
    {
        id: 3,
        name: { en: "Vitamin D3 5000 IU", ar: "فيتامين د3 5000 وحدة" },
        generic: { en: "Cholecalciferol", ar: "كوليكالسيفيرول" },
        category: { en: "Vitamins", ar: "فيتامينات" },
        categoryKey: "vitamins",
        price: 100,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/blb/blb00368/y/24.jpg",
        sideEffects: {
            en: ["Hypercalcemia (high dose)", "Nausea", "Weakness", "Kidney problems"],
            ar: ["فرط كالسيوم الدم (جرعة عالية)", "غثيان", "ضعف", "مشاكل الكلى"]
        },
        alternatives: [
            { name: { en: "Vi-De-3", ar: "في-دي-3" }, price: 28.00 },
            { name: { en: "Osteocare", ar: "أوستيوكير" }, price: 45.00 },
            { name: { en: "Caltrate D", ar: "كالترات د" }, price: 52.00 }
        ],
        description: {
            en: "Essential vitamin for bone health and immune function.",
            ar: "فيتامين أساسي لصحة العظام ووظيفة المناعة."
        }
    },
    {
        id: 4,
        name: { en: "Concor 5mg", ar: "كونكور 5 مجم" },
        generic: { en: "Bisoprolol", ar: "بيسوبرولول" },
        category: { en: "Heart & BP", ar: "القلب والضغط" },
        categoryKey: "heart",
        price: 72,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Fatigue", "Dizziness", "Cold extremities", "Slow heartbeat"],
            ar: ["إرهاق", "دوخة", "برودة الأطراف", "بطء ضربات القلب"]
        },
        alternatives: [
            { name: { en: "Bisocard", ar: "بيسوكارد" }, price: 22.00 },
            { name: { en: "Lodoz", ar: "لودوز" }, price: 35.00 },
            { name: { en: "Zebeta", ar: "زيبيتا" }, price: 40.00 }
        ],
        description: {
            en: "Beta-blocker for high blood pressure and heart conditions.",
            ar: "حاصر بيتا لارتفاع ضغط الدم وأمراض القلب."
        }
    },
    {
        id: 5,
        name: { en: "Glucophage 500mg", ar: "جلوكوفاج 500 مجم" },
        generic: { en: "Metformin", ar: "ميتفورمين" },
        category: { en: "Diabetes", ar: "السكري" },
        categoryKey: "diabetes",
        price: 60,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Stomach upset", "Diarrhea", "Metallic taste", "Vitamin B12 deficiency"],
            ar: ["اضطراب المعدة", "إسهال", "طعم معدني", "نقص فيتامين ب12"]
        },
        alternatives: [
            { name: { en: "Cidophage", ar: "سيدوفاج" }, price: 12.00 },
            { name: { en: "Diaformin", ar: "ديافورمين" }, price: 15.00 },
            { name: { en: "Fortamet", ar: "فورتاميت" }, price: 25.00 }
        ],
        description: {
            en: "First-line medication for type 2 diabetes management.",
            ar: "الدواء الأول لإدارة مرض السكري من النوع الثاني."
        }
    },
    {
        id: 6,
        name: { en: "Zyrtec 10mg", ar: "زيرتك 10 مجم" },
        generic: { en: "Cetirizine", ar: "سيتيريزين" },
        category: { en: "Allergies", ar: "الحساسية" },
        categoryKey: "allergies",
        price:100,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Drowsiness", "Dry mouth", "Fatigue", "Headache"],
            ar: ["نعاس", "جفاف الفم", "إرهاق", "صداع"]
        },
        alternatives: [
            { name: { en: "Claritine", ar: "كلاريتين" }, price: 28.00 },
            { name: { en: "Telfast", ar: "تلفاست" }, price: 35.00 },
            { name: { en: "Xyzal", ar: "زيزال" }, price: 32.00 }
        ],
        description: {
            en: "Antihistamine for allergies, hay fever, and hives.",
            ar: "مضاد للهيستامين للحساسية وحمى القش والشرى."
        }
    },
    {
        id: 7,
        name: { en: "Nexium 40mg", ar: "نيكسيوم 40 مجم" },
        generic: { en: "Esomeprazole", ar: "إيسوميبرازول" },
        category: { en: "Digestive", ar: "الجهاز الهضمي" },
        categoryKey: "digestive",
        price: 488,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Headache", "Nausea", "Diarrhea", "Abdominal pain"],
            ar: ["صداع", "غثيان", "إسهال", "ألم في البطن"]
        },
        alternatives: [
            { name: { en: "Losec", ar: "لوسيك" }, price: 75.00 },
            { name: { en: "Controloc", ar: "كونترولوك" }, price: 65.00 },
            { name: { en: "Pariet", ar: "باريت" }, price: 90.00 }
        ],
        description: {
            en: "Proton pump inhibitor for acid reflux and ulcers.",
            ar: "مثبط مضخة البروتون للارتجاع الحمضي والقرحة."
        }
    },
    {
        id: 8,
        name: { en: "Brufen 400mg", ar: "بروفين 400 مجم" },
        generic: { en: "Ibuprofen", ar: "إيبوبروفين" },
        category: { en: "Painkillers", ar: "مسكنات" },
        categoryKey: "painkillers",
        price: 78,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://media.zid.store/810bcff4-ce05-43e7-b1fa-1894e0ed9fd1/e1467494-c675-4c40-b8bf-e569a576443d.jpg",
        sideEffects: {
            en: ["Stomach upset", "Heartburn", "Dizziness", "Increased bleeding risk"],
            ar: ["اضطراب المعدة", "حرقة المعدة", "دوخة", "زيادة خطر النزيف"]
        },
        alternatives: [
            { name: { en: "Advil", ar: "أدفيل" }, price: 18.00 },
            { name: { en: "Motrin", ar: "موترين" }, price: 16.00 },
            { name: { en: "Nurofen", ar: "نوروفين" }, price: 20.00 }
        ],
        description: {
            en: "NSAID for pain, inflammation, and fever relief.",
            ar: "مضاد للالتهاب غير ستيرويدي لتخفيف الألم والالتهاب والحمى."
        }
    },
    {
        id: 9,
        name: { en: "Vitamin C 1000mg", ar: "فيتامين سي 1000 مجم" },
        generic: { en: "Ascorbic Acid", ar: "حمض الأسكوربيك" },
        category: { en: "Vitamins", ar: "فيتامينات" },
        categoryKey: "vitamins",
        price:150,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Stomach upset", "Diarrhea (high dose)", "Kidney stones (rare)", "Nausea"],
            ar: ["اضطراب المعدة", "إسهال (جرعة عالية)", "حصى الكلى (نادر)", "غثيان"]
        },
        alternatives: [
            { name: { en: "Cevit", ar: "سيفيت" }, price: 20.00 },
            { name: { en: "Redoxon", ar: "ريدوكسون" }, price: 30.00 },
            { name: { en: "Emergen-C", ar: "إيمرجن-سي" }, price: 45.00 }
        ],
        description: {
            en: "Immune booster and antioxidant vitamin.",
            ar: "فيتامين معزز للمناعة ومضاد للأكسدة."
        }
    },
    {
        id: 10,
        name: { en: "Lipitor 20mg", ar: "ليبيتور 20 مجم" },
        generic: { en: "Atorvastatin", ar: "أتورفاستاتين" },
        category: { en: "Heart & BP", ar: "القلب والضغط" },
        categoryKey: "heart",
        price: 348,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Muscle pain", "Liver problems", "Digestive issues", "Memory problems"],
            ar: ["ألم عضلي", "مشاكل الكبد", "مشاكل هضمية", "مشاكل الذاكرة"]
        },
        alternatives: [
            { name: { en: "Crestor", ar: "كريستور" }, price: 75.00 },
            { name: { en: "Zocor", ar: "زوكور" }, price: 55.00 },
            { name: { en: "Lipostat", ar: "ليبوستات" }, price: 48.00 }
        ],
        description: {
            en: "Statin medication for lowering cholesterol levels.",
            ar: "دواء ستاتين لخفض مستويات الكوليسترول."
        }
    },
    {
        id: 11,
        name: { en: "Cipro 500mg", ar: "سيبرو 500 مجم" },
        generic: { en: "Ciprofloxacin", ar: "سيبروفلوكساسين" },
        category: { en: "Antibiotics", ar: "مضادات حيوية" },
        categoryKey: "antibiotics",
        price: 63,
        currency: { en: "EGP", ar: "ج.م" },
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Nausea", "Diarrhea", "Tendon problems", "Sensitivity to sunlight"],
            ar: ["غثيان", "إسهال", "مشاكل الأوتار", "حساسية لأشعة الشمس"]
        },
        alternatives: [
            { name: { en: "Ciproxin", ar: "سيبروكسين" }, price: 38.00 },
            { name: { en: "Ciprobay", ar: "سيبروباي" }, price: 42.00 },
            { name: { en: "Ciplox", ar: "سيبلوكس" }, price: 28.00 }
        ],
        description: {
            en: "Fluoroquinolone antibiotic for various bacterial infections.",
            ar: "مضاد حيوي فلوروكينولون لمختلف الالتهابات البكتيرية."
        }
    },
    {
        id: 12,
        name: { en: "Ventolin Inhaler", ar: "بخاخ فنتولين" },
        generic: { en: "Salbutamol", ar: "سالبيوتامول" },
        category: { en: "Respiratory", ar: "الجهاز التنفسي" },
        categoryKey: "respiratory",
        price: 86,
        currency: { en: "EGP", ar: "جم" },
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop",
        sideEffects: {
            en: ["Tremor", "Headache", "Rapid heartbeat", "Nervousness"],
            ar: ["رعشة", "صداع", "تسارع ضربات القلب", "توتر"]
        },
        alternatives: [
            { name: { en: "Proventil", ar: "بروفنتيل" }, price: 32.00 },
            { name: { en: "Airomir", ar: "إيرومير" }, price: 25.00 },
            { name: { en: "Salamol", ar: "سالامول" }, price: 22.00 }
        ],
        description: {
            en: "Bronchodilator inhaler for asthma and breathing difficulties.",
            ar: "بخاخ موسع للقصبات للربو وصعوبات التنفس."
        }
    }
];

// ===== State Management =====
let currentLang = 'en';
let currentTheme = 'light';
let isListening = false;

// ===== DOM Elements =====
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const voiceSearch = document.getElementById('voiceSearch');
const voiceStatus = document.getElementById('voiceStatus');
const resultsSection = document.getElementById('resultsSection');
const resultsGrid = document.getElementById('resultsGrid');
const noResults = document.getElementById('noResults');
const searchQuery = document.getElementById('searchQuery');
const resultsCount = document.getElementById('resultsCount');
const featuredGrid = document.getElementById('featuredGrid');
const medicineModal = document.getElementById('medicineModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const categoryCards = document.querySelectorAll('.category-card');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    renderFeaturedMedicines();
    setupEventListeners();
});

// ===== Load Saved Preferences =====
function loadPreferences() {
    const savedLang = localStorage.getItem('medisearch-lang') || 'en';
    const savedTheme = localStorage.getItem('medisearch-theme') || 'light';
    
    setLanguage(savedLang);
    setTheme(savedTheme);
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Language Toggle
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Search
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Voice Search
    voiceSearch.addEventListener('click', toggleVoiceSearch);

    // Category Cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            searchByCategory(category);
        });
    });

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// ===== Language Functions =====
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('medisearch-lang', lang);
    
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.dataset[`placeholder${lang === 'en' ? 'En' : 'Ar'}`];
    });
    
    // Re-render cards if results are showing
    if (!resultsSection.classList.contains('hidden')) {
        const query = searchQuery.textContent;
        if (query) performSearch();
    }
    
    renderFeaturedMedicines();
}

// ===== Theme Functions =====
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('medisearch-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

// ===== Search Functions =====
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        resultsSection.classList.add('hidden');
        return;
    }
    
    const results = medicinesDatabase.filter(med => {
        const nameEn = med.name.en.toLowerCase();
        const nameAr = med.name.ar;
        const genericEn = med.generic.en.toLowerCase();
        const genericAr = med.generic.ar;
        const categoryEn = med.category.en.toLowerCase();
        const categoryAr = med.category.ar;
        
        return nameEn.includes(query) || 
               nameAr.includes(query) ||
               genericEn.includes(query) ||
               genericAr.includes(query) ||
               categoryEn.includes(query) ||
               categoryAr.includes(query);
    });
    
    displayResults(results, query);
}

function searchByCategory(category) {
    const results = medicinesDatabase.filter(med => med.categoryKey === category);
    const categoryName = results.length > 0 ? results[0].category[currentLang] : category;
    
    searchInput.value = categoryName;
    displayResults(results, categoryName);
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function displayResults(results, query) {
    resultsSection.classList.remove('hidden');
    searchQuery.textContent = query;
    
    if (results.length === 0) {
        resultsGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        resultsCount.textContent = currentLang === 'en' ? '0 results' : '0 نتائج';
        return;
    }
    
    noResults.classList.add('hidden');
    resultsCount.textContent = currentLang === 'en' 
        ? `${results.length} result${results.length > 1 ? 's' : ''}` 
        : `${results.length} نتيجة`;
    
    resultsGrid.innerHTML = results.map(med => createMedicineCard(med)).join('');
    
    // Add click listeners to cards
    resultsGrid.querySelectorAll('.medicine-card').forEach((card, index) => {
        card.addEventListener('click', () => openModal(results[index]));
    });
}

// ===== Render Featured Medicines =====
function renderFeaturedMedicines() {
    const featured = medicinesDatabase.slice(0, 6);
    
    featuredGrid.innerHTML = featured.map(med => createMedicineCard(med)).join('');
    
    // Add click listeners
    featuredGrid.querySelectorAll('.medicine-card').forEach((card, index) => {
        card.addEventListener('click', () => openModal(featured[index]));
    });
}

// ===== Create Medicine Card =====
function createMedicineCard(med) {
    const sideEffectsText = currentLang === 'en' ? 'Side effects' : 'آثار جانبية';
    const alternativesText = currentLang === 'en' ? 'alternatives' : 'بدائل';
    
    return `
        <article class="medicine-card" tabindex="0" role="button" aria-label="${med.name[currentLang]}">
            <img 
                src="${med.image}" 
                alt="${med.name[currentLang]}" 
                class="medicine-image"
                loading="lazy"
            >
            <div class="medicine-content">
                <span class="medicine-category">${med.category[currentLang]}</span>
                <h3 class="medicine-name">${med.name[currentLang]}</h3>
                <p class="medicine-generic">${med.generic[currentLang]}</p>
                <div class="medicine-price">${med.price.toFixed(2)} ${med.currency[currentLang]}</div>
                <div class="medicine-info">
                    <div class="medicine-info-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 8v4M12 16h.01"/>
                        </svg>
                        <span><span class="info-label">${sideEffectsText}:</span> ${med.sideEffects[currentLang].slice(0, 2).join(', ')}</span>
                    </div>
                    <div class="medicine-info-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>${med.alternatives.length} ${alternativesText}</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// ===== Modal Functions =====
function openModal(med) {
    const sideEffectsTitle = currentLang === 'en' ? 'Side Effects' : 'الآثار الجانبية';
    const alternativesTitle = currentLang === 'en' ? 'Alternatives' : 'البدائل';
    const descriptionTitle = currentLang === 'en' ? 'Description' : 'الوصف';
    
    modalBody.innerHTML = `
        <img 
            src="${med.image}" 
            alt="${med.name[currentLang]}" 
            class="modal-image"
        >
        <div class="modal-body">
            <div class="modal-header">
                <span class="modal-category">${med.category[currentLang]}</span>
                <h2 class="modal-title">${med.name[currentLang]}</h2>
                <p class="modal-generic">${med.generic[currentLang]}</p>
            </div>
            
            <div class="modal-price">${med.price.toFixed(2)} ${med.currency[currentLang]}</div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    ${descriptionTitle}
                </h3>
                <p style="color: var(--foreground-muted); font-size: 0.938rem;">${med.description[currentLang]}</p>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v4M12 16h.01"/>
                    </svg>
                    ${sideEffectsTitle}
                </h3>
                <ul class="modal-list">
                    ${med.sideEffects[currentLang].map(effect => `<li>${effect}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    ${alternativesTitle}
                </h3>
                <div class="alternatives-grid">
                    ${med.alternatives.map(alt => `
                        <div class="alternative-card">
                            <div class="alternative-name">${alt.name[currentLang]}</div>
                            <div class="alternative-price">${alt.price.toFixed(2)} ${med.currency[currentLang]}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    medicineModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    modalClose.focus();
}

function closeModal() {
    medicineModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== Voice Search =====
function toggleVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert(currentLang === 'en' 
            ? 'Voice search is not supported in your browser. Please try Chrome or Edge.' 
            : 'البحث الصوتي غير مدعوم في متصفحك. يرجى تجربة Chrome أو Edge.');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = currentLang === 'en' ? 'en-US' : 'ar-SA';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    if (!isListening) {
        isListening = true;
        voiceSearch.classList.add('listening');
        voiceStatus.classList.remove('hidden');
        
        recognition.start();
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            performSearch();
        };
        
        recognition.onend = () => {
            isListening = false;
            voiceSearch.classList.remove('listening');
            voiceStatus.classList.add('hidden');
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            isListening = false;
            voiceSearch.classList.remove('listening');
            voiceStatus.classList.add('hidden');
            
            if (event.error === 'not-allowed') {
                alert(currentLang === 'en' 
                    ? 'Microphone access denied. Please allow microphone access to use voice search.' 
                    : 'تم رفض الوصول إلى الميكروفون. يرجى السماح بالوصول للميكروفون لاستخدام البحث الصوتي.');
            }
        };
    } else {
        recognition.stop();
        isListening = false;
        voiceSearch.classList.remove('listening');
        voiceStatus.classList.add('hidden');
    }
}

// ===== Keyboard Accessibility =====
document.addEventListener('keydown', (e) => {
    // Allow Enter key to activate medicine cards
    if (e.key === 'Enter' && e.target.classList.contains('medicine-card')) {
        e.target.click();
    }
});
