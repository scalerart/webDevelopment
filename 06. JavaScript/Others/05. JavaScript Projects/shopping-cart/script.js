// handle phoneIncrease
document.getElementById('phoneIncrease').addEventListener('click', () => {
    productHandle(true, 'phoneInput', 'phoneTotal', 1219);
})

// handle phoneDecrease
document.getElementById('phoneDecrease').addEventListener('click', () => {
    productHandle(false, 'phoneInput', 'phoneTotal', 1219)
})

// handle caseIncrease
document.getElementById('caseIncrease').addEventListener('click', () => {
    productHandle(true, 'caseInput', 'caseTotal', 59);
})

// handle caseDecrease
document.getElementById('caseDecrease').addEventListener('click', () => {
    productHandle(false, 'caseInput', 'caseTotal', 59)
})

function productHandle(isIncrease, inputId, productTotal, price) {
    const inputField = document.getElementById(inputId);
    let quantity = parseInt(inputField.value) || 0;

    if (isIncrease) {
        quantity++;
    } else if (quantity > 0) {
        quantity--;
    }

    inputField.value = quantity;
    document.getElementById(productTotal).innerText = '$' + (quantity * price);

    calculateTotal();
}

function calculateTotal() {
    const phoneQty = parseInt(document.getElementById('phoneInput').value) || 0;
    const caseQty = parseInt(document.getElementById('caseInput').value) || 0;

    const PHONE_PRICE = 1219;
    const CASE_PRICE = 59;

    const subTotal = phoneQty * PHONE_PRICE + caseQty * CASE_PRICE;
    const tax = Math.round(subTotal * 0.1);
    const grandTotal = subTotal + tax;

    document.getElementById('subTotal').innerText = '$' + subTotal;
    document.getElementById('tax').innerText = '$' + tax;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
}