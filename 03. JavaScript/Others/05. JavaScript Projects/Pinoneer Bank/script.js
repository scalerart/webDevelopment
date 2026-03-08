// login button event handler
const loginBtn = document.getElementById('loginBtn').addEventListener('click', () => {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none';
    const bankSection = document.getElementById('bankSection');
    bankSection.style.display = 'block';
});


// deposit button event handler
const depositBtn = document.getElementById('depositBtn').addEventListener('click', () => {
    handleTransaction('depositAmount', 'currentDeposit', 1);
})

// withdraw button event handler
const withdrawBtn = document.getElementById('withdrawBtn').addEventListener('click', () => {
    handleTransaction('withdrawAmmount', 'currentWithdraw', -1);
})

function handleTransaction(inputId, updateId, sign) {
    const amount = getInputNumber(inputId);

    if (amount === 0) {
        alert("Please enter a valid amount");
        return;
    }
    const balance = document.getElementById('currentBalance');
    const currentBalance = parseFloat(balance.innerText);

    // Withdraw low lalance
    if (sign === -1 && amount > currentBalance) {
        alert("Insufficient balance");
        document.getElementById(inputId).value = '';
        return;
    }
    updateSpanText(updateId, amount);
    updateSpanText('currentBalance', sign * amount);
    document.getElementById(inputId).value = '';
}

/*
function handleTransaction(inputId, updateId, sign) {
    const amount = getInputNumber(inputId)
    updateSpanText(updateId, amount)
    updateSpanText('currentBalance', sign * amount);
    document.getElementById(inputId).value = '';
}
*/

function getInputNumber(inputId) {
    const amount = document.getElementById(inputId).value;
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
        return 0;
    }
    return amountNumber;
}

function updateSpanText(id, amount) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalCurrent = amount + currentNumber;
    document.getElementById(id).innerText = totalCurrent;
}