const products = [
    { id: 1, title: "ادناء ازرار كامل", price: "200 شيكل", desc: "ادناء شرعي بخامة ممتازة، مريح جداً وعصري.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/تفاصيل ادناء ازرار.jpg", "image/ادناء ازرار اخضر غامق.jpg", "image/ادناء ازرار كامل اخضر.jpg", "image/ادناء ازرار كامل خمري.jpg", "image/ادناء ازرار لون بيج.jpg", "image/ادناء ازرار نهدي غامق.jpg"] },
    { id: 2, title: "ادناء سحاب مخفي", price: "200 شيكل", desc: "ادناء شرعي بخامة ممتازة، مريح جداً وعصري.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/تفاصيل ادناء سحاب.jpg", "image/ادناء سحاب كامل زهري.jpg", "image/ادناء سحاب مخفي اخضر بارد.jpg", "image/ادناء سحاب نهدي.jpg"] },
    { id: 3, title: "عباءة قطعتين ورق شجر", price: "200 شيكل", desc: "عباءة قطعتين مع نقش ورق الشجر الجميل على اليد", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/عباية قطعتين ورق شجر سكني.jpeg", "image/عباية قطعتين ورق شجر خمري.jpeg", "image/عباية قطعتين وورق الشجر اخضر.jpeg"] },
    { id: 4, title: "عباءة الخط العربي", price: "200 شيكل", desc: "عباءة قطعتين مع نقش حروف اللغة العربية على اليد والحزام", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/عباية الخط العربي اسود.jpeg", "image/عباية الخط العربي زهري.jpeg"] },
    { id: 5, title: "فستان عباية خصر", price: "200 شيكل", desc: "عباءة قطعتين مع حركة جميلة عند الخصر", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/فستان عباية اخضر.jpeg", "image/فستان عباية اسود.jpeg", "image/فستان عباية نهدي.jpeg"] },
    { id: 6, title: "فستان سترس فضي", price: "180 شيكل", desc: "فستان أنيق مع سترس فضي متوفر بعدة ألوان رائعة.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/فستان مع خط فضي اخضر.jpeg", "image/فستان مع خط فضي ازرق.jpeg", "image/فستان مع خط فضي بيج.jpeg", "image/فستان مع خط فضي نهدي.jpeg"] },
    { id: 7, title: "جلباب ", price: "170 شيكل", desc: "جلباب انيق مع حركة مميزة على الصدر يعطي مظهر محتشم وجميل.", sizes: ["40", "42", "44"], soldOutSizes: [], images: ["image/جلباب اخضر.jpeg", "image/جلباب اسود مع حركة.jpeg", "image/جلباب زهري.jpeg"] },
    { id: 8, title: "ادناء شتوي", price: "250 شيكل", desc: "ادناء شتوي وشرعي بخامة ثقيلة وممتازة، مريح جداً للبرد.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/ادناء بني مود2.jpeg", "image/ادناء بني.jpeg", "image/ادناء خمري.jpeg", "image/ادناء كحلي.jpeg", "image/ادناء نهدي.jpeg"] },
    { id: 9, title: "الثوب الفلسطيني", price: "280 شيكل", desc: "أصالة الماضي وأناقة الحاضر في قطعة واحدة مطرزة بدقة.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/ثوب ازرق.jpeg", "image/ثوب كامل.jpeg", "image/ثوب ملون.jpeg"] },
    { id: 10, title: "قسم العروض", price: "100 شيكل", desc: "اي قطعة داخل هذا الالبوم فقط بـ 100 شيكل. اغتنمي الفرصة!", sizes: ["40", "42", "44", "46", "48", "50", "52", "54"], soldOutSizes: [], images: ["image/جلباب بيج.jpeg", "image/جلباب سكني.jpeg", "image/طقم اخضر.jpeg", "image/طقم خمري.jpeg", "image/عباية رمضان.jpeg", "image/عباية قطعتين اخضر سترس.jpeg"] },
    { id: 11, title: "معطف شتوي ابيض", price: "220 شيكل", desc: "معطف شتوي جميل وانيق بدمج لونين، خامة دافئة جداً.", sizes: ["38", "40", "42", "44", "46", "48", "50", "52"], soldOutSizes: [], images: ["image/معطف ابيض واسود.jpeg", "image/معطف ابيض وسكني.jpeg"] },
    { id: 12, title: "معطف شتوي", price: "250 شيكل", desc: "معطف شتوي بتصاميم وألوان عصرية تناسب ذوقك.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/معطف ابيض.jpeg", "image/معطف اخضر.jpeg", "image/معطف بيج.jpeg"] },
    { id: 13, title: "جلباب شتوي ", price: "250 شيكل", desc: "جلباب شتوي انيق بدمج اللون الابيض مع الاسود او الكحلي.", sizes: ["38", "40", "42", "44", "46"], soldOutSizes: [], images: ["image/جلباب شتوي.jpeg"] },
    { id: 14, title: "جلباب انيق", price: "260 شيكل", desc: "جلباب انيق ومميز بتفاصيل راقية جداً.", sizes: ["40", "42", "44", "46","48", "50", "52", "54", "56", "58"], soldOutSizes: [], images: ["image/جلباب نهدي.jpeg", "image/جلباب اسود.jpeg"] }
];

let activeProduct = null, selectedSize = "", slideIndex = 0;

function initStore() {
    const grid = document.getElementById('mainGrid');
    if(!grid) return;
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p.id);
        card.innerHTML = `<img src="${p.images[0]}" alt="${p.title}"><p>${p.title}</p>`;
        grid.appendChild(card);
    });
}

function openProduct(id) {
    activeProduct = products.find(p => p.id === id);
    slideIndex = 0;
    const firstAvailable = activeProduct.sizes.find(s => !activeProduct.soldOutSizes.includes(s));
    selectedSize = firstAvailable || "";
    document.getElementById('pTitle').innerText = activeProduct.title;
    document.getElementById('pPrice').innerText = activeProduct.price;
    document.getElementById('pDesc').innerText = activeProduct.desc;
    updateSizeUI();
    renderSlides();
    document.getElementById('productPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function updateSizeUI() {
    const sizeBox = document.getElementById('sizeOptions');
    const orderBtn = document.getElementById('orderBtn');
    sizeBox.innerHTML = '';
    activeProduct.sizes.forEach(s => {
        const isSoldOut = activeProduct.soldOutSizes.includes(s);
        const btn = document.createElement('div');
        btn.className = `size-btn ${s === selectedSize ? 'active' : ''} ${isSoldOut ? 'disabled-size' : ''}`;
        btn.innerText = s;
        if (!isSoldOut) btn.onclick = () => { selectedSize = s; updateSizeUI(); };
        sizeBox.appendChild(btn);
    });
    orderBtn.disabled = !selectedSize;
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
    slideIndex = (slideIndex + n + activeProduct.images.length) % activeProduct.images.length;
    renderSlides();
}

function closeProduct() { document.getElementById('productPopup').style.display = 'none'; document.body.style.overflow = 'auto'; }

function orderWhatsApp() {
    const phone = "972594935357";
    const msg = `مرحباً البتول للزي الشرعي، أود طلب موديل: ${activeProduct.title}\nالمقاس: ${selectedSize}\nالسعر: ${activeProduct.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = initStore;
