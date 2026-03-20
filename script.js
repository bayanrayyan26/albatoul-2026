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
        title: "عباءة قطعتين ورق شجر",
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
        desc: "أصالة الماضي وأناقة الحاضر في قطعة واحدة.",
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
        sizes: ["40", "42", "44", "46", "48"],
        images: [
            "image/جلباب بيج.jpeg",
            "image/جلباب سكني.jpeg",
            "image/طقم اخضر.jpeg",
            "image/طقم خمري.jpeg",
            "image/عباية رمضان.jpeg",
        ], 
    },
];

let activeProduct = null;
let selectedSize = "";
let slideIndex = 0;

function initStore() {
    const grid = document.getElementById('mainGrid');
    if(!grid) return;
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p.id);
        card.innerHTML = `
            <img src="${p.images[0]}" alt="${p.title}" onerror="this.src='image/logo.png'">
            <div class="card-info">
                <p>${p.title}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openProduct(id) {
    activeProduct = products.find(p => p.id === id);
    selectedSize = activeProduct.sizes[0];
    slideIndex = 0;
    
    document.getElementById('pTitle').innerText = activeProduct.title;
    document.getElementById('pPrice').innerText = activeProduct.price;
    document.getElementById('pDesc').innerText = activeProduct.desc;
    
    updateSizeUI();
    renderSlides();
    document.getElementById('productPopup').style.display = 'flex';
}

function renderSlides() {
    const container = document.getElementById('slides');
    container.innerHTML = '';
    activeProduct.images.forEach((img, i) => {
        const el = document.createElement('img');
        el.src = img;
        if(i === slideIndex) el.className = 'active';
        container.appendChild(el);
    });
    document.getElementById('counter').innerText = `${slideIndex + 1} / ${activeProduct.images.length}`;
}

function changeSlide(n) {
    slideIndex += n;
    if(slideIndex >= activeProduct.images.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = activeProduct.images.length - 1;
    renderSlides();
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
    const imagePath = activeProduct.images[slideIndex];
    
    const baseUrl = "https://bayanrayyan26.github.io/albatoul-2026/";
    const fullImageUrl = baseUrl + encodeURI(imagePath);

    const message = `مرحباً البتول للزي الشرعي،\n` +
                  `أود طلب الموديل: ${activeProduct.title}\n` +
                  `المقاس: ${selectedSize}\n` +
                  `السعر: ${activeProduct.price}\n\n` +
                  `رابط الصورة للتأكيد:\n${fullImageUrl}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

window.onload = initStore;
