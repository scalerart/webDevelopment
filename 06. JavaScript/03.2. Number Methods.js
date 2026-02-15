/*
JavaScript Number Methods
সবচেয়ে গুরুত্বপূর্ণ ১০টা Number Methods
    1. Number()
    2. parseInt()
    3. parseFloat()
    4. toFixed()
    5. Math.round()
    6. Math.floor()
    7. Math.random()
    8. Math.max()
    9. Number.isNaN()
    10. Number.isInteger()

আমরা ৫ ভাগে শিখবো:
    1. Basic Number Info
    2. Convert Methods
    3. Format Methods
    4. Math Related Methods
    5. Check Methods

1.  Basic Number Info
    1.  toString()
        ✔  Number → String বানায়
            num.toString();

    2.  valueOf()
        ✔  আসল number value দেয়
            num.valueOf();
        ✔  বাস্তবে খুব কম ব্যবহার হয়

2.  Convert Methods (String → Number)
    3.  Number()
        ✔  String কে number বানায়
            Number("500"); // 500
            Number("Hello"); // NaN

    4.  parseInt()
        ✔  Integer নেয়
            parseInt("123.45"); // 123

    5.  parseFloat()
        ✔  Decimal নেয়
            parseFloat("123.45"); // 123.45
3.  Format Methods
    6.  toFixed()
        ✔  Decimal কয় ঘর দেখাবে
            num.toFixed(2);
        ✔  এটা string return করে

    7.  toPrecision()
        ✔  মোট কয় digit দেখাবে
            num.toPrecision(5);

4.  Math Related Methods (সবচেয়ে গুরুত্বপূর্ণ)
    Math object ব্যবহার হয়।
    8.  Math.round()
        Math.round(4.6); // 5

    9.  Math.floor()
        Math.floor(4.9); // 4

    10. Math.ceil()
        Math.ceil(4.1); // 5

    11. Math.trunc()
        ✔  শুধু integer অংশ রাখে
            Math.trunc(4.9); // 4

    12. Math.random()
        Math.random();
        ✔  0 থেকে 1 এর মধ্যে random দেয়
        ✔  Random Number Range বানানো
            Math.floor(Math.random() * 10); // 0-9

    13. Math.max()
        Math.max(10, 20, 5);

    14. Math.min()
    15. Math.pow()
        Math.pow(2, 3); // 8

    16. Math.sqrt()
        Math.sqrt(16); // 4

    17. Math.abs()
        Math.abs(-10); // 10

5.  Check Methods
    18. isNaN()
        isNaN("Hello"); // true

    19. Number.isNaN()
        ✔  বেশি accurate

    20. Number.isInteger()
        Number.isInteger(10); // true

    21. Number.isFinite()
        Number.isFinite(100); // true
*/

// Practice Task
const price = 199.567;
const input = "450.75";

// 1. price কে ২ decimal এ round করো
const roundNumber = Math.round(price);
console.log(roundNumber);

// 2. input কে number বানাও
const inputToNumber = Number(input);
console.log(inputToNumber);

// 3. ১ থেকে ১০ এর মধ্যে random number বানাও
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// 4. price কে nearest integer বানাও
const nearestInteger = Math.round(price);
console.log(nearestInteger);

// 5. input integer কিনা চেক করো
const isInteger = Number.isInteger(input);
console.log("Integer Input is: ", isInteger);

// 6. 10, 25, 7, 99 এর মধ্যে সবচেয়ে বড় বের করো
const maxNumber = Math.max(10, 25, 7, 99);
console.log("Max Number is: ", maxNumber);

// 7. -50 এর absolute বের করো
const absoluteNumber = Math.abs(-50);
console.log("Absolute Number is: ", absoluteNumber);

// 8. 5 এর power 3 বের করো
const power = Math.pow(5, 3);
console.log("Power Number is: ", power);