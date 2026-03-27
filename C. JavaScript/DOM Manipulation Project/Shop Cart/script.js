const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('#cart-close');

cartIcon.addEventListener('click', () => cart.classList.add('active'));
cartClose.addEventListener('click', () => cart.classList.remove('active'));

const addCartButtons = document.querySelectorAll('.add-cart');

addCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        const prodcutBox = event.target.closest('.product-box');
        addToCart(prodcutBox);
    });
})

const cartContent = document.querySelector('.cart-content');

const addToCart = prodcutBox => {
    const prodcutImgSrc = prodcutBox.querySelector('img').src;
    const prodcutTittle = prodcutBox.querySelector('.product-tittle').textContent;
    const prodcutPrice = prodcutBox.querySelector('.price').textContent;

    const cartItems = document.querySelectorAll('.cart-product-tittle');
    for (let item of cartItems) {
        if (item.textContent === prodcutTittle) {
            alert("This item is already in the cart.");
            return;
        }
    };

    const cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');
    cartBox.innerHTML = `
        <img src="${prodcutImgSrc}" class="cart-img">
        <div class="cart-detail">
            <h2 class="cart-product-tittle">${prodcutTittle}</h2>
            <span class="cart-price">${prodcutPrice}</span>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-line cart-remove"></i>            
    `;
    cartContent.append(cartBox);
    cartBox.querySelector('.cart-remove').addEventListener('click', () => {
        cartBox.remove();

        updateCateCount(-1);

        updateTotalPrice();
    });

    cartBox.querySelector('.cart-quantity').addEventListener('click', event => {
        const numberElement = cartBox.querySelector('.number');
        const decrementButton = cartBox.querySelector('#decrement');
        let quantity = numberElement.textContent;

        if (event.target.id === 'decrement' && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decrementButton.style.color = '#999';
            }
        } else if (event.target.id === 'increment') {
            quantity++
            decrementButton.style.color = '#333';
        }

        numberElement.textContent = quantity;

        updateTotalPrice();
    })
    updateCateCount(1);

    updateTotalPrice();
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector('.total-price');
    const cartBoxes = cartContent.querySelectorAll('.cart-box');
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector('.cart-price');
        const quantityElemnt = cartBox.querySelector('.number');
        const price = priceElement.textContent.replace('$', '');
        const quantity = quantityElemnt.textContent;
        total += price * quantity;
    })
    totalPriceElement.textContent = `$${total}`
};

let cartItemCount = 0;
const updateCateCount = change => {
    const cartItemCountBadge = document.querySelector('.cart-item-count');
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = 'visible';
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = 'hidden';
        cartItemCountBadge.textContent = '';
    }
};

const buyNowButton = document.querySelector('.btn-buy');
buyNowButton.addEventListener('click', () => {
    const cartBoxes = cartContent.querySelectorAll('.cart-box');
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before buying.")
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCateCount(0);
    updateTotalPrice();
    alert("Thank you for your purchase!");
});