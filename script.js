const products = [
    { id: 1, title: "ادناء ازرار كامل", price: "200 شيكل", desc: "ادناء شرعي بخامة ممتازة، مريح جداً وعصري.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/تفاصيل ادناء ازرار.jpg", "image/ادناء ازرار اخضر غامق.jpg", "image/ادناء ازرار كامل اخضر.jpg"] },
    { id: 2, title: "ادناء سحاب مخفي", price: "200 شيكل", desc: "ادناء شرعي بخامة ممتازة، مريح وعصري.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/تفاصيل ادناء سحاب.jpg", "image/ادناء سحاب كامل زهري.jpg", "image/ادناء سحاب مخفي اخضر بارد.jpg"] },
    { id: 3, title: "عباءة قطعتين ورق شجر", price: "200 شيكل", desc: "عباءة قطعتين مع نقش ورق الشجر.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/عباية قطعتين ورق شجر سكني.jpeg", "image/عباية قطعتين ورق شجر خمري.jpeg"] },
    { id: 4, title: "عباءة الخط العربي", price: "200 شيكل", desc: "نقش حروف اللغة العربية.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/عباية الخط العربي اسود.jpeg", "image/عباية الخط العربي زهري.jpeg"] },
    { id: 5, title: "فستان عباية خصر", price: "200 شيكل", desc: "عباءة قطعتين مع حركة خصر.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/فستان عباية اخضر.jpeg", "image/فستان عباية اسود.jpeg"] },
    { id: 6, title: "فستان سترس فضي", price: "180 شيكل", desc: "فستان أنيق مع سترس فضي.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/فستان مع خط فضي اخضر.jpeg", "image/فستان مع خط فضي ازرق.jpeg"] },
    { id: 7, title: "جلباب حركة صدر", price: "170 شيكل", desc: "جلباب انيق مع حركة مميزة.", sizes: ["40", "42", "44"], soldOutSizes: [], images: ["image/جلباب اخضر.jpeg", "image/جلباب اسود مع حركة.jpeg"] },
    { id: 8, title: "ادناء شتوي", price: "250 شيكل", desc: "ادناء شتوي وشرعي بخامة ممتازة.", sizes: ["S", "M", "L"], soldOutSizes: [], images: ["image/ادناء بني.jpeg", "image/ادناء خمري.jpeg"] },
    { id: 9, title: "الثوب الفلسطيني", price: "280 شيكل", desc: "أصالة الماضي وأناقة الحاضر.", sizes: ["38", "40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/ثوب ازرق.jpeg", "image/ثوب كامل.jpeg"] },
    { id: 10, title: "قسم العروض", price: "100 شيكل", desc: "اي قطعة داخل هذا الالبوم فقط 100 شيكل.", sizes: ["40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/جلباب بيج.jpeg", "image/جلباب سكني.jpeg"] },
    { id: 11, title: "معطف شتوي ابيض", price: "220 شيكل", desc: "معطف شتوي بدمج لونين.", sizes: ["38", "40", "42", "44", "46"], soldOutSizes: [], images: ["image/معطف ابيض واسود.jpeg", "image/معطف ابيض وسكني.jpeg"] },
    { id: 12, title: "معطف شتوي ملون", price: "250 شيكل", desc: "معطف شتوي انيق.", sizes: ["38", "40", "42", "44", "46"], soldOutSizes: [], images: ["image/معطف ابيض.jpeg", "image/معطف اخضر.jpeg"] },
    { id: 13, title: "جلباب شتوي دمج", price: "250 شيكل", desc: "جلباب شتوي بدمج اللونين.", sizes: ["38", "40", "42", "44", "46"], soldOutSizes: [], images: ["image/جلباب شتوي.jpeg"] },
    { id: 14, title: "جلباب انيق", price: "260 شيكل", desc: "جلباب انيق ومميز.", sizes: ["40", "42", "44", "46", "48"], soldOutSizes: [], images: ["image/جلباب نهدي.jpeg", "image/جلباب اسود.jpeg"] }
];

let activeProduct = null, selectedSize = "", slideIndex = 0;

function initStore() {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p.id);
        card.innerHTML = `<img src="${p.images[0]}"><p>${p.title}</p>`;
        grid.appendChild(card);
    });
}

function openProduct(id) {
    activeProduct = products.find(p => p.id === id);
    selectedSize = activeProduct.sizes.find(s => !activeProduct.soldOutSizes.includes(s)) || "";
    document.getElementById('pTitle').innerText = activeProduct.title;
    document.getElementById('pPrice').innerText = activeProduct.price;
    document.getElementById('pDesc').innerText = activeProduct.desc;
    updateSizeUI();
    renderSlides();
    document.getElementById('productPopup').style.display = 'flex';
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
    orderBtn.innerText = selectedSize ? "اطلب الآن عبر واتساب" : "نفدت الكمية";
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

function closeProduct() { document.getElementById('productPopup').style.display = 'none'; slideIndex = 0; }

function orderWhatsApp() {
    const phone = "972594935357";
    const msg = `مرحباً البتول للزي الشرعي، أود طلب موديل: ${activeProduct.title}\nالمقاس: ${selectedSize}\nالسعر: ${activeProduct.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = initStore;
