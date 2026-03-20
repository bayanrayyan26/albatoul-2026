const products = [
    {
        id: 1,
        title: "ادناء ازرار كامل",
        price: "200 شيكل",
        desc: "ادناء شرعي بخامة ممتازة، مريح جداً وعصري ، متوفر مع بنطال عريض او تنورة.",
        sizes: ["S", "M", "L"],
        images: [
            "image/تفاصيل ادناء ازرار.jpg", 
            "image/ادناء ازرار اخضر غامق.jpg", 
            "image/ادناء ازرار كامل اخضر.jpg",
            "image/ادناء ازرار كامل خمري.jpg",
            "image/ادناء ازرار لون بيج.jpg",
            "image/ادناء ازرار نهدي غامق.jpg"
        ]
    },
    {
        id: 2,
        title: "ادناء سحاب مخفي",
        price: "200 شيكل",
        desc: "ادناء شرعي بخامة ممتازة، مريح جداً وعصري ، متوفر مع بنطال عريض او تنور.",
        sizes: ["S", "M", "L"],
        images: [
            "image/تفاصيل ادناء سحاب.jpg",
            "image/ادناء سحاب كامل زهري.jpg",
            "image/ادناء سحاب مخفي اخضر بارد.jpg",
            "image/ادناء سحاب نهدي.jpg"
        ],
        
    },
    {
        id: 3,
        title: "عباءة ورق شجر",
        price: "200 شيكل",
        desc: "عباءة قطعتين مع نقش ورق الشجر الجميل على اليد",
        sizes: ["38", "40", "42", "44", "46", "48"],
        images: [
            "image/عباية قطعتين ورق شجر سكني.jpeg",
            "image/عباية قطعتين ورق شجر خمري.jpeg",
            "image/عباية قطعتين وورق الشجر اخضر.jpeg",
        ], 
    },
    {
        id: 4,
        title: "عباءة الخط العربي",
        price: "200 شيكل",
        desc: "عباءة قطعتين مع نقش حروف اللغة العربية على اليد والحزام",
        sizes: ["38", "40", "42", "44", "46", "48"],
        images: [
            "image/عباية الخط العربي اسود.jpeg",
            "image/عباية الخط العربي زهري.jpeg",
        ], 
    },
    {
        id: 5,
        title: "فستان عباية خصر",
        price: "200 شيكل",
        desc: "عباءة قطعتين مح حركة جميلة عند الخصر",
        sizes: ["38", "40", "42", "44", "46", "48"],
        images: [
            "image/فستان عباية اخضر.jpeg",
            "image/فستان عباية اسود.jpeg",
            "image/فستان عباية نهدي.jpeg",
        ], 
    },
    {
        id: 6,
        title: "فستان سترس فضي",
        price: "180 شيكل",
        desc: "فستان أنيق مع سترس فضي ",
        sizes: ["38", "40", "42", "44", "46", "48"],
        images: [
            "image/فستان مع خط فضي اخضر.jpeg",
            "image/فستان مع خط فضي ازرق.jpeg",
            "image/فستان مع خط فضي بيج.jpeg",
            "image/فستان مع خط فضي نهدي.jpeg",
        ], 
    },
    {
        id: 7,
        title: "جلباب حركة صدر",
        price: "170 شيكل",
        desc: "جلباب انيق مع حركة مميزة على الصدر  ",
        sizes: ["40", "42", "44"],
        images: [
            "image/جلباب اخضر.jpeg",
            "image/جلباب اسود مع حركة.jpeg",
            "image/جلباب زهري.jpeg",
        ], 
    },
    {
        id: 8,
        title: "ادناء شتوي",
        price: "250 شيكل",
        desc: "ادناء شتوي وشرعي بخامة ممتازة، مريح جداً ، متوفر مع بنطال عريض او تنورة",
        sizes: ["S", "M", "L"],
        images: [
            "image/ادناء بني مود2.jpeg",
            "image/ادناء بني.jpeg",
            "image/ادناء خمري.jpeg",
            "image/ادناء كحلي.jpeg",
            "image/ادناء نهدي.jpeg",
        ], 
    },
    {
        id: 9,
        title: "الثوب الفلسطيني",
        price: "280 شيكل",
        desc: "ثوب فلسطيني مطرز بكل حب، ليعكس هويتكِ وجمالكِ بلمسة شرعية راقية.",
        sizes: ["38", "40", "42", "44", "46", "48"],
        images: [
            "image/ثوب ازرق.jpeg",
            "image/ثوب كامل.jpeg",
            "image/ثوب ملون.jpeg",
        ], 
    },
    {
        id: 10,
        title: "قسم العروض",
        price: "100 شيكل",
        desc: "اي قطعة داخل هذا الالبوم فقط 100 شيكل",
        sizes: ["40", "42", "44", "46", "48", "50", "52", "54"],
        images: [
            "image/طقم اخضر.jpeg",
            "image/طقم خمري.jpeg",
            "image/عباية رمضان.jpeg",
            "image/عباية قطعتين اخضر سترس.jpeg",
        ], 
    },
];

let activeProduct = null;
let selectedSize = "";
let selectedColorName = "";
let slideIndex = 0;
let currentMediaList = [];

// قاموس لترجمة أسماء الألوان من اسم الملف إلى أكواد ألوان للدوائر
const colorMap = {
    "اخضر": "#006400", "أخضر": "#006400", "اسود": "#000000", "أسود": "#000000",
    "خمري": "#800000", "بيج": "#F5F5DC", "نهدي": "#4B0082", "زهري": "#FFC0CB",
    "سكني": "#808080", "ازرق": "#0000FF", "بني": "#8B4513", "كحلي": "#000080", "أبيض": "#FFFFFF"
};

function initStore() {
    const grid = document.getElementById('mainGrid');
    if(!grid) return;
    grid.innerHTML = ''; 
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p.id);
        card.innerHTML = `
            <img src="${p.images[0]}" alt="${p.title}">
            <div class="card-info"><p>${p.title}</p><span>عرض التفاصيل ◄</span></div>
        `;
        grid.appendChild(card);
    });
}

function startEidCelebration() {
    const today = new Date();
    const endDate = new Date(2026, 2, 24); 
    if (today <= endDate) {
        const greeting = document.getElementById('eidGreeting');
        greeting.style.display = 'flex';
        for (let i = 0; i < 80; i++) { createConfetti(); }
        setTimeout(() => {
            greeting.style.opacity = '0';
            setTimeout(() => { greeting.style.display = 'none'; }, 1000);
        }, 5000); 
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#f87a9f', '#f8a5c2', '#ffcc00', '#00ccff'][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confetti.style.opacity = Math.random();
    document.getElementById('eidGreeting').appendChild(confetti);
}

function openProduct(id) {
    activeProduct = products.find(p => p.id === id);
    selectedSize = activeProduct.sizes[0]; 
    document.getElementById('pTitle').innerText = activeProduct.title;
    document.getElementById('pPrice').innerText = activeProduct.price;
    document.getElementById('pDesc').innerText = activeProduct.desc;
    
    updateSizeUI();
    updateColorUI(); // إضافة الألوان
    prepareMedia(); 
    document.getElementById('productPopup').style.display = 'flex';
}

function updateColorUI() {
    const colorBox = document.getElementById('colorOptions');
    colorBox.innerHTML = '';
    
    // نستخرج الألوان من أسماء الصور فقط (نتجاهل صورة "تفاصيل")
    activeProduct.images.forEach((img, index) => {
        const fileName = img.split('/').pop().split('.')[0];
        let detectedColor = "transparent";
        
        // محاولة إيجاد كود اللون من القاموس
        for (let key in colorMap) {
            if (fileName.includes(key)) {
                detectedColor = colorMap[key];
                break;
            }
        }

        if(detectedColor !== "transparent") {
            const circle = document.createElement('div');
            circle.className = `color-circle ${index === slideIndex ? 'active' : ''}`;
            circle.style.backgroundColor = detectedColor;
            circle.title = fileName;
            circle.onclick = () => {
                slideIndex = index;
                selectedColorName = fileName;
                renderSlides();
                updateColorUI();
            };
            colorBox.appendChild(circle);
        }
    });
}

function prepareMedia() {
    currentMediaList = [];
    activeProduct.images.forEach(imgUrl => { currentMediaList.push({ type: 'image', url: imgUrl }); });
    slideIndex = 0;
    renderSlides();
}

function renderSlides() {
    const container = document.getElementById('slides');
    container.innerHTML = '';
    currentMediaList.forEach((m, i) => {
        let el = document.createElement('img');
        el.src = m.url;
        if(i === slideIndex) el.className = 'active';
        container.appendChild(el);
    });
    document.getElementById('counter').innerText = `${slideIndex + 1} / ${currentMediaList.length}`;
    
    // تحديث اسم اللون المختار بناءً على الصورة الحالية
    const currentImg = currentMediaList[slideIndex].url;
    selectedColorName = currentImg.split('/').pop().split('.')[0];
}

function changeSlide(n) {
    slideIndex += n;
    if(slideIndex >= currentMediaList.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = currentMediaList.length - 1;
    renderSlides();
    updateColorUI();
}

function updateSizeUI() {
    const sizeBox = document.getElementById('sizeOptions');
    sizeBox.innerHTML = '';
    activeProduct.sizes.forEach(s => {
        const btn = document.createElement('div');
        btn.className = `size-btn ${s === selectedSize ? 'active' : ''}`;
        btn.innerText = s;
        btn.onclick = () => { selectedSize = s; updateSizeUI(); };
        sizeBox.appendChild(btn);
    });
}

function closeProduct() { document.getElementById('productPopup').style.display = 'none'; }

function orderWhatsApp() {
    const phone = "972594935357";
    const currentImageUrl = currentMediaList[slideIndex].url;
    const fullImageUrl = "https://bayanrayyan26.github.io/albatoul-2026/" + currentImageUrl;

    const message = `مرحباً البتول للزي الشرعي،\n` +
                  `أود طلب الموديل: ${activeProduct.title}\n` +
                  `اللون المطلوب: ${selectedColorName}\n` +
                  `المقاس: ${selectedSize}\n` +
                  `السعر: ${activeProduct.price}\n` +
                  `رابط الصورة: ${fullImageUrl}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

window.onload = () => {
    initStore();
    startEidCelebration();
};
