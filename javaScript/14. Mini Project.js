//  Project 1: Calculator
function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return b !== 0 ? a / b : "Cannot divide by zero";
    } else {
        return "Invalid Operator";
    }
}
let result = calculator(20, 30, '*');
console.log(result);

//  Project 2: Number Guess Game