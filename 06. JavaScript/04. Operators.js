/*
JavaScript Operators Master Checklist
    ✔ Arithmetic Operators: + - * / % **
    ✔ Assignment Operators: =, +=, -=, *=, /=, %=
    ✔ Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
    ✔ Logical Operators: &&, ||, !
    ✔ Increment / Decrement Operators: ++, --
    ✔ Operator Precedence

=>  JavaScript Operators
    JavaScript-এ Operators হলো কোডে Data বা Variables-এর উপর কাজ করার Tools।
    =>  মনে রাখো: Operator + Operand = Expression
        5 + 3 এখানে 5 এবং 3 হলো Operand, + হলো Operator

1.  Arithmetic Operators (পাটিগণিত অপারেটর)
    1.  +   Addition                5 + 5 = 10
    2.  -   Subtraction             10 - 5 = 5
    3.  *   Multiplication          5 * 2 = 10
    4.  /   Division                10 / 2 = 5
    5.  %   Modulus                 10 % 5 = 2
    6.  **  Exponentiation (Power)  2 ** 2 = 4

2.  Assignment Operators (মান নির্ধারণের জন্য)
    1.  =   Assign              x = 10
    2.  +=  Add & Assign        x += 10 || x = x + 10
    3.  -=  Subtract & Assign   x -= 10 || x = x - 10
    4.  *=  Multiply & Assign   x *= 10 || x = x * 10
    5.  /=  Divide & Assign     x /= 10 || x = x / 10
    6.  %=  Modulus & Assign    x %= 10 || x = x % 10

3.  Comparison Operators (তুলনা করার জন্য)
    1.  ==  Equal               5 == "5"    true
    2.  === Strict Equal        5 === "5"   false
    3.  !=  Not equal           5 != 3      true
    4.  !== Strict not equal    5 !== "5"   true
    5.  >   Greater than        5 > 3       true
    6.  <   Less than           3 < 5       true
    7.  >=  Greater or equal    5 >= 5      true
    8.  <=  Less or equal       3 <= 5      true

4.  Logical Operators (Boolean Decision)
    1.  &&  AND → সব শর্ত true হলে true    true && false → false
    2.  ||  OR → অথবা শর্ত একটি true হলে true
    3.  !   NOT → Value উল্টে দেয়          !true → false

    =>  Real-life analogy:
        1.  && → “আমার বই আছে এবং আমার কলম আছে” → দুটোই থাকতে হবে
        2.  || → “আমার বই আছে বা কলম আছে” → যেকোনো একটি থাকলেই হবে
        3.  ! → “না” (Opposite)

5.  Increment & Decrement Operators
    1.  ++  +1  x++
    2.  --  -1  x--
    
6.  Operator Precedence
    1.  () → প্রথমে হবে
    2.  / % → তারপর
    3.  + - → তারপর
    4.  Assignment = → সবশেষে
*/

// Arithmetic Operators
const x = 20;
const y = 10;
console.log('Addition:', x + y);
console.log('Subtraction:', x - y);
console.log('Multiplication:', x * y);
console.log('Division:', x / y);
console.log('Modulus:', x % y);
console.log('Exponentiation:', x ** 2);


//Assignment Operators
let a = 10;
console.log('Add & Assign:', a += 5);
console.log('Subtract & Assign:', a -= 5);
console.log('Multiply & Assign:', a *= 5);
console.log('Divide & Assign:', a /= 5);
console.log('Modulus & Assign:', a %= 10);
console.log('Exponentiation & Assign:', a **= 2);

//Comparison Operators
const i = "5"
console.log('Equal:', i == 5);
console.log('Strict Equal:', i === 5);
console.log('Not equal:', i != 3);
console.log('Strict not equal:', i !== 5);
console.log('Greater than:', i > 4);
console.log('Less than:', i < 6);
console.log('Greater or equal:', i >= 5);
console.log('Less or equal:', i <= 5);

//Logical Operators
const havePen = true;
const haveBook = false;
console.log('AND:', havePen && haveBook);
console.log('OR:', havePen || haveBook);
console.log('NOT:', !havePen);
console.log('NOT:', !haveBook);

//Increment & Decrement Operators
let q = 10;
console.log('Increment:', ++q);
console.log('Decrement:', --q);
console.log(q);