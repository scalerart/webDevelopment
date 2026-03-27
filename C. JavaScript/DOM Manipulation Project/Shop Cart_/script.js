const products = [
    {
        id: 1,
        name: "Apple Watch",
        price: 120,
        image: "images/product1.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    },
    {
        id: 2,
        name: "Apple Watch Ultra 3",
        price: 60,
        image: "images/product2.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    },
    {
        id: 3,
        name: "Apple Watch SE 3",
        price: 100,
        image: "images/product3.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    },
    {
        id: 4,
        name: "Galaxy Watch 8 Classic",
        price: 80,
        image: "images/product4.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    },
    {
        id: 5,
        name: "Galaxy Watch 8",
        price: 150,
        image: "images/product5.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    },
    {
        id: 6,
        name: "Kospet Magic R10",
        price: 150,
        image: "images/product6.jpeg",
        desc: "Dual-Band GNSS That Tracks You Clearly Smudge-Resistan"
    }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const buyBtn = document.querySelector(".buy-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Render Products
const renderProducts = () => {
    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            <h4>${product.name}</h4>
            <p>${product.desc}</p>
            <div class="price-and-cart">
                <div class="price">$ ${product.price}</div>
                <button class="btn">
                    <i class="ri-shopping-bag-line"></i>
                </button>
            </div>
        `;

        const button = card.querySelector(".btn");
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productList.appendChild(card);
    });
}


// Add To Cart
const addToCart = product => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
        alert("This item is already in the cart.");
        return;
    }

    cart.push({ ...product, qty: 1 });
    updateCart();
}


// Update Cart
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


// Render Cart
function renderCart() {

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" class="cart-img">
            <span>${item.name}</span>

            <div class="qty-box">
                <span class="qty-btn minus" data-index="${index}">-</span>
                <span>${item.qty}</span>
                <span class="qty-btn plus" data-index="${index}">+</span>
            </div>

            <span>$${item.price * item.qty}</span>
            
            <span class="remove" data-index="${index}">
                <i class="ri-delete-bin-line"></i>
            </span>
        `;

        cartItems.appendChild(div);
    });

    totalEl.textContent = total;
    cartCount.textContent = cart.length;
}


// Cart Event Delegation
cartItems.addEventListener("click", (e) => {

    const index = e.target.closest("[data-index]")?.dataset.index;

    if (index === undefined) return;

    if (e.target.closest(".minus")) {
        changeQty(index, -1);
    }

    if (e.target.closest(".plus")) {
        changeQty(index, 1);
    }

    if (e.target.closest(".remove")) {
        removeItem(index);
    }

});


// Change Quantity
function changeQty(index, amount) {

    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}


// Buy Now
buyBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Purchase successful!");

    cart = [];
    localStorage.removeItem("cart");
    renderCart();
});


// Initial Load
renderProducts();
renderCart();



/*
1.  Project শুরু হওয়ার সময় কী হয়?
    সবচেয়ে নিচে দেখো

    renderProducts();
    renderCart();

    ✔  এই দুইটা ফাংশনই প্রথমে রান হয়।

    1.  renderProducts() → প্রোডাক্ট কার্ড বানায়
    2.  renderCart() → কার্টে আগে থেকে কিছু থাকলে দেখায়

        ✔  কারণ তুমি LocalStorage ব্যবহার করছো।

2.  Products Array
    const products = [ ... ]

    ✔  এখানে কী আছে?
        এটা হচ্ছে তোমার ডাটাবেজ (fake database)।

    প্রতিটি প্রোডাক্টে আছে:
        1.  id
        2.  name
        3.  price
        4.  image
        5.  desc

    ✔  এগুলো দিয়েই কার্ড বানানো হয়।

3.  DOM ধরার অংশ
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");
    const buyBtn = document.querySelector(".buy-btn");

    এখানে আমরা HTML থেকে element ধরছি।
    ✔  মানে:
        1.  প্রোডাক্ট যেখানে দেখাবে
        2.  কার্ট যেখানে দেখাবে
        3.  টোটাল যেখানে দেখাবে
        4.  কার্ট কাউন্ট
        5.  Buy button

4.  LocalStorage থেকে কার্ট আনা
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    ✔  এখানে গুরুত্বপূর্ণ বিষয় আছে

        1.  LocalStorage থেকে "cart" নামে ডাটা আনে
        2.  সেটা string থাকে
        3.  JSON.parse() দিয়ে object বানায়
        4.  যদি কিছু না থাকে → empty array []

    ✔  তাই refresh করলেও কার্ট থাকে।

5.  renderProducts()
    function renderProducts() { ... }

    ✔  এটা কী করে?

    1.  Loop করে প্রতিটি product এর জন্য:
        products.forEach(product => {

    2.  নতুন card বানায়:
        const card = document.createElement("div");

    3.  card এর ভিতরে HTML বসায়:
        card.innerHTML = `
            <img src="${product.image}">
            ...
        `;

    4.  তারপর button এ event যোগ করে:
        button.addEventListener("click", () => {
            addToCart(product);
        });

    ✔  এখানে আমরা onclick ব্যবহার করি নাই।
    ✔  আমরা modern method addEventListener ব্যবহার করেছি।

6.  addToCart()
    function addToCart(product)

    ✔  এখানে কী হয়?

    ✔  চেক করে প্রোডাক্ট আগে আছে কিনা:
        const exists = cart.find(item => item.id === product.id);

    যদি থাকে:
        alert("This item is already in the cart.");
        return;

    2.  না থাকলে:
        cart.push({ ...product, qty: 1 });

    ✔  এখানে Spread Operator ব্যবহার হয়েছে।

    ✔  মানে:
        product এর সব data কপি
        সাথে qty: 1 যোগ

    তারপর:
    updateCart();

7.  updateCart()
    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    ✔  এখানে দুইটা কাজ হয়:
        1.  LocalStorage এ save
        2.  Cart UI update

8.  renderCart()
    এটা পুরো কার্ট আবার নতুন করে বানায়।

    cartItems.innerHTML = "";

    ✔  আগে সব মুছে দেয়।
    ✔  তারপর loop করে:

        cart.forEach((item, index) => {

    ✔  এখানে index খুব গুরুত্বপূর্ণ
    ✔  কারণ minus/plus/remove এর জন্য index দরকার।

    ✔  Quantity Buttons
        <span class="qty-btn minus" data-index="${index}">-</span>

    ✔  এখানে data-index রাখা হয়েছে।
    ✔  এটা custom attribute।

9.  Event Delegation
    cartItems.addEventListener("click", (e) => {

    ✔  এটা advanced concept।
        আমরা প্রতিটি button এ event লাগাইনি।
        আমরা parent এ event লাগিয়েছি।

    ✔  কিভাবে বোঝে কে ক্লিক হয়েছে?
        const index = e.target.closest("[data-index]")?.dataset.index;

    মানে:
        যেটাতে data-index আছে সেটাকে খুঁজে বের করো
        তার index নাও

    ✔  তারপর condition:

        if (e.target.closest(".minus")) {
            changeQty(index, -1);
        }
        if (e.target.closest(".plus")) {
            changeQty(index, 1);
        }
        if (e.target.closest(".remove")) {
            removeItem(index);
        }

10. changeQty()
    function changeQty(index, amount)

    এখানে:
        cart[index].qty += amount;

    মানে:
        minus হলে -1
        plus হলে +1

    যদি qty 0 হয়:
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }

    ✔  তখন remove করে দেয়।

    তারপর:
    updateCart();

11. removeItem()
    cart.splice(index, 1);
    মানে ওই index এর item delete।

12. Buy Now Button
    buyBtn.addEventListener("click", () => {

    1.  কার্ট খালি কিনা চেক
        if (cart.length === 0)

    2.  যদি প্রোডাক্ট থাকে
        alert("Purchase successful!");

    3.  কার্ট খালি করে দেয়
        cart = [];
        localStorage.removeItem("cart");
        renderCart();

=>  পুরো ফ্লো এক লাইনে
    1.  Page Load
    2.  Products render
    3.  Cart render
    4.  Add → Cart update
    5.  Update → LocalStorage save
    ✔  Refresh → আবার LocalStorage থেকে load
*/