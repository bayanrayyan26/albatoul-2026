// مثال توضيحي لكيفية ربط كل صورة بنمرها (طبقي هذا النمط على كل المنتجات)
const products = [
    { 
        id: 1, 
        title: "ادناء ازرار كامل", 
        price: "200 شيكل", 
        desc: "ادناء شرعي بخامة ممتازة.",
        // كل صورة هنا عبارة عن كائن (Object) يحتوي المسار والنمر المتوفرة لها
        variants: [
            { img: "image/ادناء ازرار اخضر غامق.jpg", sizes: ["S", "M"], soldOut: ["L"] },
            { img: "image/ادناء ازرار كامل خمري.jpg", sizes: ["M", "L"], soldOut: ["S"] },
            { img: "image/ادناء ازرار لون بيج.jpg", sizes: ["S", "M", "L"], soldOut: [] }
        ]
    },
    { 
        id: 9, 
        title: "الثوب الفلسطيني", 
        price: "280 شيكل", 
        desc: "أصالة وأناقة.",
        variants: [
            { img: "image/ثوب ازرق.jpeg", sizes: ["38", "40", "42"], soldOut: ["44"] },
            { img: "image/ثوب كامل.jpeg", sizes: ["38", "40", "42", "44"], soldOut: [] }
        ]
    }
    // ... كرري نفس النمط لبقية الـ 14 موديل
];

let activeProduct = null, slideIndex = 0, selectedSize = "";

function initStore() {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = '';
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProduct(p.id);
        card.innerHTML = `<img src="${p.variants[0].img}"><p>${p.title}</p>`;
        grid.appendChild(card);
    });
}

function openProduct(id) {
    activeProduct = products.find(p => p.id === id);
    slideIndex = 0;
    renderPopup();
    document.getElementById('productPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function renderPopup() {
    const variant = activeProduct.variants[slideIndex];
    document.getElementById('pTitle').innerText = activeProduct.title;
    document.getElementById('pPrice').innerText = activeProduct.price;
    document.getElementById('pDesc').innerText = activeProduct.desc;
    
    // تحديث الصور
    const slider = document.getElementById('slides');
    slider.innerHTML = '';
    activeProduct.variants.forEach((v, i) => {
        const img = document.createElement('img');
        img.src = v.img;
        if(i === slideIndex) img.className = 'active';
        slider.appendChild(img);
    });

    // تحديث النمر بناءً على الصورة الحالية (نظام شي إن)
    const sizeBox = document.getElementById('sizeOptions');
    sizeBox.innerHTML = '';
    variant.sizes.concat(variant.soldOut).sort().forEach(s => {
        const isSold = variant.soldOut.includes(s);
        const btn = document.createElement('div');
        btn.className = `size-btn ${s === selectedSize ? 'active' : ''} ${isSold ? 'sold-out' : ''}`;
        btn.innerText = s;
        if(!isSold) btn.onclick = () => { selectedSize = s; renderPopup(); };
        sizeBox.appendChild(btn);
    });

    document.getElementById('counter').innerText = `${slideIndex + 1} / ${activeProduct.variants.length}`;
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + activeProduct.variants.length) % activeProduct.variants.length;
    selectedSize = ""; // تصفير المقاس عند تغيير اللون
    renderPopup();
}

function orderWhatsApp() {
    if(!selectedSize) { alert("رجاءً اختاري المقاس أولاً"); return; }
    const phone = "972594935357";
    const msg = `طلب جديد:\nالموديل: ${activeProduct.title}\nالمقاس: ${selectedSize}\nالسعر: ${activeProduct.price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

function closeProduct() { document.getElementById('productPopup').style.display = 'none'; document.body.style.overflow = 'auto'; }

window.onload = initStore;
