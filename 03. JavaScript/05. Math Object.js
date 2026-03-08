/*
Math Object Master Checklist
    ✔ Math.round / floor / ceil / trunc
    ✔ Math.max / min
    ✔ Math.random
    ✔ Exponent & sqrt
    ✔ abs
    ✔ Floating point fix
    ✔ String → Number

1.  Math Object
    =>  JavaScript-এ advanced math করার জন্য Math Object আছে।    

    1.  Math.round()
        =>  সংখ্যাকে কাছাকাছি পূর্ণসংখ্যায় আনে

    2.  Math.floor()
        =>  নিচের পূর্ণসংখ্যা নেয়

    3.  Math.ceil()
        =>  উপরের পূর্ণসংখ্যা নেয়

    4.  Math.trunc()
        =>  Decimal কেটে ফেলে
        Math.trunc(4.9); // 4

2.  Math.max() & Math.min()
    =>  বড় ও ছোট সংখ্যা বের করতে
    =>  Result, Score, Price calculation-এ খুব কাজে আসে

3.  Math.random()
    =>  0 থেকে 1 এর মধ্যে random সংখ্যা দেয়

    =>  1–10 Random Number
    =>  Math.floor(Math.random() * 10) + 1;
    =>  Game, OTP, Dice—সব জায়গায় ব্যবহার হয়

4.  Math.pow() & Exponent Operator
    1.  Math.pow(2, 3); // 8
    2.  2 ** 3;         // 8
    =>  দুটোই same, ** modern

5.  Math.sqrt() || Square Root 
    1.  Math.sqrt(16); // 4

6.  Math.abs() || Absolute Value
    =>  Negative কে positive বানায়

7.  Floating Point Problem (Important)
    1.  Number((0.1 + 0.2).toFixed(2)); // 0.3
    =>  Real Project-এ খুব দরকার

8.  Convert String → Number
    1.  Number("25");    // 25
    2.  parseInt("25");  // 25
    3.  parseFloat("25.5"); // 25.5    
*/

// Math Object
let bananaPrice = 25.85;
console.log('Math.round():', Math.round(bananaPrice));
console.log('Math.floor():', Math.floor(bananaPrice));
console.log('Math.ceil():', Math.ceil(bananaPrice));
console.log('Math.trunc():', Math.trunc(bananaPrice));

// Math.max() & Math.min()
console.log('Math.max():', Math.max(85, 99, 80));
console.log('Math.min():', Math.min(85, 99, 80));

// Math.random()
let dice = 0;
console.log('Math.random():', Math.ceil(Math.random(dice) * 6));

// Math.pow()
let exponent = 5;
console.log('Math.pow():', Math.pow(exponent, 2));

// Math.sqrt()
exponent = 25;
console.log('Math.sqrt():', Math.sqrt(exponent));

// Floating Point
let sum = 5.10583 + 0.5010055;
console.log('Floating Point:', sum.toFixed(2));

// Convert String
let num1 = "85.5";
let num2 = 15;
console.log('String:', (num1 + num2));
console.log('parseInt():', (parseInt(num1) + num2));
console.log('parseFloat():', (parseFloat(num1) + num2));
