// login button event handler
const loginBtn = document.getElementById('loginBtn').addEventListener('click', function () {
    const loginSection = document.getElementById('loginArea');
    loginSection.style.display = 'none';
    const bankSection = document.getElementById('bankSection');
    bankSection.style.display = 'block';
})

// deposit button event handler
const depositBtn = document.getElementById('depositBtn').addEventListener('click', function () {
    const depositNumber = getInpurNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
})

// withdraw button event handler
const withdrawBtn = document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawNumber = getInpurNumber('withdrawAmmount')
});

function getInpurNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}



