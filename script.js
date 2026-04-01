const products = [
{
id:1,
title:"عباءة الخط العربي",
price:"200 شيكل",
desc:"عباءة جميلة",
images:[
{src:"image/عباية الخط العربي اسود.jpeg",color:"اسود",sizes:["38","40","42"],soldOut:["40"]},
{src:"image/عباية الخط العربي زهري.jpeg",color:"زهري",sizes:["38","40","42"],soldOut:[]}
]
}
];

let activeProduct=null,selectedSize="",slideIndex=0;

function initStore(){
const grid=document.getElementById('mainGrid');
products.forEach(p=>{
const card=document.createElement('div');
card.className='product-card';
card.onclick=()=>openProduct(p.id);
card.innerHTML=`<img src="${p.images[0].src}"><p>${p.title}</p>`;
grid.appendChild(card);
});
}

function openProduct(id){
activeProduct=products.find(p=>p.id===id);
slideIndex=0;
renderSlides();
document.getElementById('pTitle').innerText=activeProduct.title;
document.getElementById('pPrice').innerText=activeProduct.price;
document.getElementById('pDesc').innerText=activeProduct.desc;
document.getElementById('productPopup').style.display='flex';
}

function renderSlides(){
const container=document.getElementById('slides');
container.innerHTML='';

activeProduct.images.forEach((img,i)=>{
const el=document.createElement('img');
el.src=img.src;
if(i===slideIndex) el.className='active';
container.appendChild(el);
});

updateSizes();

document.getElementById('counter').innerText=
`${slideIndex+1}/${activeProduct.images.length}`;
}

function updateSizes(){
const img=activeProduct.images[slideIndex];

document.getElementById('colorName').innerText=`اللون: ${img.color}`;

const box=document.getElementById('sizeOptions');
box.innerHTML='';
selectedSize="";

img.sizes.forEach(s=>{
const btn=document.createElement('div');
const sold=img.soldOut.includes(s);

btn.className=`size-btn ${sold?'disabled-size':''}`;
btn.innerText=s;

if(!sold){
btn.onclick=()=>{
selectedSize=s;
updateSizes();
};
}

if(s===selectedSize) btn.classList.add('active');

box.appendChild(btn);
});
}

function changeSlide(n){
slideIndex=(slideIndex+n+activeProduct.images.length)%activeProduct.images.length;
renderSlides();
}

function closeProduct(){
document.getElementById('productPopup').style.display='none';
}

function orderWhatsApp(){
const img=activeProduct.images[slideIndex];
const msg=`طلب:
${activeProduct.title}
اللون: ${img.color}
المقاس: ${selectedSize}`;
window.open(`https://wa.me/972594935357?text=${encodeURIComponent(msg)}`);
}

window.onload=initStore;
