/*
JavaScrit Condition (Basic to Advanced)

Level 1: Basic If-Else (১–৫)
    1.  সংখ্যাটা Positive না Negative?
        let num = -5;

        Output:
            1.  Positive
            2.  Negative
            3.  Zero

    2.  সংখ্যা Even না Odd?
        let num = 7;

    3.  বয়স ১৮ এর বেশি হলে “Adult” না হলে “Minor”
        let age = 20;

    4.  পাস না ফেল? let marks = 45;

        Rule:
            1.  40 বা বেশি = Pass
            2.  কম হলে = Fail

    5.  বড় সংখ্যা বের করো (২টার মধ্যে)
        let a = 10;
        let b = 25;

Level 2: Multiple Condition (৬–১০)
    6.  Grade System
        let marks = 85;

        Rule:
            1.  80+ = A+
            2.  70–79 = A
            3.  60–69 = B
            4.  50–59 = C
            5.  Below 50 = F

    7.  তিনটা সংখ্যার মধ্যে বড় কোনটা?
        let a = 10, b = 50, c = 30;

    8.  বছর Leap Year কিনা?
        let year = 2024;

        Hint:
        1.  4 দিয়ে বিভাজ্য
        2.  কিন্তু 100 দিয়ে না
        3.  অথবা 400 দিয়ে বিভাজ্য

    9.  Username + Password সঠিক কিনা?
        let username = "admin";
        let password = "1234";

    10. ভোট দিতে পারবে?
        let age = 19;
        let isCitizen = true;

        Condition:
            1.  age >= 18
            2.  এবং citizen হতে হবে

Level 3: Logical Operator (১১–১৫)
    11. Discount System
        let total = 5000;
        let isMember = true;

        Rule:
            1.  3000 এর বেশি এবং member হলে 20% discount
            2.  শুধু 3000 বেশি হলে 10%
            3.  না হলে 0%
            
    12. Password Strong কিনা?
        let password = "Hello123";
        Condition:
            1.  Length >= 8
            2.  Number থাকতে হবে

    13. অফিস খোলা আছে কিনা?
        let hour = 15;
        Rule:
            1.  9 থেকে 17 এর মধ্যে হলে Open
            2.  না হলে Closed

    14. Free Shipping পাবে?
        let total = 2500;
        let location = "Dhaka";

        Rule:
            1.  2000+ এবং Dhaka হলে free

    15. Triangle Valid কিনা?
        let a = 60, b = 60, c = 60;

        Rule:
            1.  a + b + c = 180 হলে valid

Level 4: Advanced Thinking (১৬–২০)
    16. Largest in Array (loop + condition)
        let arr = [10, 25, 5, 40, 15];

    17. Palindrome কিনা?
        let word = "madam";

    18. BMI Calculator
        let weight = 70;
        let height = 1.7;
        
        Rule:
            1.  BMI = weight / (height²)
            2.  <18.5 = Underweight
            3.  18.5–24.9 = Normal
            4.  25+ = Overweight

    19. Login Attempt Block System
        let attempts = 3;

        Rule:
            1.  3 বার ভুল হলে blocked

    20. Temperature Status
        let temp = 35;

        Rule:
            1.  <10 = Cold
            2.  10–25 = Normal
            3.  25–35 = Warm
            4.  35+ = Hot

=>  Bonus: Ternary দিয়ে Practice
    এইগুলোর কিছু ternary দিয়ে করো:
    condition ? "Yes" : "No";
*/
// 1.  সংখ্যাটা Positive না Negative?
let num = -5;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2.  সংখ্যা Even না Odd?
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3.  বয়স ১৮ এর বেশি হলে “Adult” না হলে “Minor”
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 4.  পাস না ফেল? {Rule: 1.  40 বা বেশি = Pass, 2.  কম হলে = Fail}
let marks = 45;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 5.  বড় সংখ্যা বের করো (২টার মধ্যে)
let a = 10;
let b = 25;
if (a > b) {
    console.log("A is bigger");
} else {
    console.log("B is bigger");
}

// 6.  Grade System {Rule: 1. 80+ = A+, 2. 70–79 = A, 3. 60–69 = B, 4. 50–59 = C, 5., Below 50 = F}
let mark = 85;
if (mark >= 80) {
    console.log("A+");
} else if (mark >= 70) {
    console.log("A");
} else if (mark >= 60) {
    console.log("B");
} else if (mark >= 50) {
    console.log("C");
} else {
    console.log("F");
}

// 7.  তিনটা সংখ্যার মধ্যে বড় কোনটা?
let i = 10, j = 50, k = 30;
if (i > j && i > k) {
    console.log("I is bigger");
} else if (j > k && j > i) {
    console.log("J is bigger");
} else {
    console.log("K is bigger");
}

// 8.  বছর Leap Year কিনা? {Hint: 4 দিয়ে বিভাজ্য; কিন্তু 100 দিয়ে না; অথবা 400 দিয়ে বিভাজ্য}
let year = 2400;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}

// 9.  Username + Password সঠিক কিনা?
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Login Faild");
}

// 10. ভোট দিতে পারবে? {Condition: age >= 18, এবং citizen হতে হবে}
let yourAge = 19;
let isCitizen = true;
if (yourAge >= 18 && isCitizen) {
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}

// 11. Discount System {Rule: 3000 এর বেশি এবং member হলে 20 % discount, শুধু 3000 বেশি হলে 10 %, না হলে 0 %}
let total = 5000;
let isMember = true;
if (total > 3000 && isMember) {
    console.log("20% Discount");
} else if (total > 3000) {
    console.log("10% Discount");
} else {
    console.log("0% Discount");
}

// 12. Password Strong কিনা? {Condition: Length >= 8, Number থাকতে হবে}
let strongPassword = "Hello123";
if (strongPassword.length >= 8 && /\d/.test(strongPassword)) { // /\d/ মানে number আছে কিনা চেক করা।
    console.log("Strong Password");
} else {
    console.log("Week Password");
}

// 13. অফিস খোলা আছে কিনা? {Rule: 9 থেকে 17 এর মধ্যে হলে Open, না হলে Closed}
let hour = 15;
if (hour >= 9 && hour <= 17) {
    console.log("Office Open");
} else {
    console.log("Office Close");
}

// 14. Free Shipping পাবে? {Rule: 2000+ এবং Dhaka হলে free}
let totalPrice = 2500;
let location = "Dhaka";
if (totalPrice >= 2000 && location === "Dhaka") {
    console.log("Free Shipping");
} else {
    console.log("No Free Shipping");
}

// 15. Triangle Valid কিনা? {Rule: a + b + c = 180 হলে valid}
let x = 60, y = 60, z = 60;
if (x + y + z === 180) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}

// 16. Largest in Array (loop + condition)
let arr = [10, 25, 5, 40, 15];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]
    }
}
console.log(largest);

// 17. Palindrome কিনা?
let word = "madam";
let reversed = word.split("").reverse().join("");
if (word === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 18. BMI Calculator {Rule: BMI = weight / (height²), < 18.5 = Underweight, 18.5–24.9 = Normal, 25 + = Overweight}
let weight = 70;
let height = 1.7;
let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal");
} else {
    console.log("Overweight");
}

// 19. Login Attempt Block System {Rule: 3 বার ভুল হলে blocked}
let attempts = 3;
if (attempts >= 3) {
    console.log("Account Blocked");
} else {
    console.log("Try Again");
}


// 20. Temperature Status {Rule: <10 = Cold, 10–25 = Normal, 25–35 = Warm, 35 + = Hot}
let temp = 35;
if (temp < 10) {
    console.log("Cold");
} else if (temp <= 25) {
    console.log("Normal");
} else if (temp <= 35) {
    console.log("Warm");
} else {
    console.log("Hot");
}