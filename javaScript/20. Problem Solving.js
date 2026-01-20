//  Problem 1:  String Reverse
let name = "ABDUL KADIR";
let reverse = "";
for (let i = 0; i < name.length; i++) {
    let element = name[i];
    reverse = element + reverse;
}
console.log(reverse);


//  Problem 2:  Remove Duplicate From Array
const friendList = ["Rohim", "Rakib", "Rony", "Ratul", "Sujon", "Kamrul", "Roton", "Rakib", "Ratul", "Kamrul", "Rohim"]

function removeDuplicate(friendList) {
    newList = [];
    for (let i = 0; i < friendList.length; i++) {

        const name = friendList[i];
        if (newList.includes(name) === false) {
            newList.push(name);
        }
    }
    return newList;
}
const finalList = removeDuplicate(friendList);
console.log(finalList);


//  Problem 3: Factorial
function fact(n) {
    let factResult = 1;
    for (let i = 1; i <= n; i++) {
        factResult *= i;
    }
    return factResult;
}
const factResult = fact(10);
console.log(factResult);

//  Factorial Recursive Way
/*  5! = 1*2*3*4*5
    5!  = 4!*5
    5%! = (5-1)!*5
    n!  = (n-1)!*5
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
const result = factorial(10);
console.log(result);

//  Problem 4:  Fibonacci Numbers
/*
fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2];
fibo[n] = fibo[n-1] + fibo[n-2];
fibo[i] = fibo[i-1] + fibo[i-2];
*/

function fibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
const fibonacciResult = fibonacci(12);
console.log(fibonacciResult);

//  Fibonacci Recursive Way
function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
const fibonacciRecursiveResult = fibonacciRecursive(12);
console.log(fibonacciRecursiveResult);

//  Problem 5:  Check Prime Number or Not
function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "This is not a Prime Number";
        }
    }
    return "This is a Prime Number";
}
const isPrime = checkPrime(17);
console.log(isPrime);

//  Problem 6:  Find max of two or three values
let businessMan = 450;
let minister = 350;
let sochib = 550;

//  way one
if (businessMan > minister) {
    if (businessMan > sochib) {
        console.log("Business man is bigger.");
    } else {
        console.log("Sochib is bigger.");
    }
} else {
    if (minister > sochib) {
        console.log("Minister is bigger");
    } else {
        console.log("Sochib is bigger");
    }
}

//  way two
let max = Math.max(businessMan, minister, sochib);
console.log(max);