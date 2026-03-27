/*
JavaScript Advanced Function – Master Checklist
    1.  Function Basics & Scope  
    2.  Parameters & Arguments
    3.  Function Hoisting
    4.  Anonymous & Named Functions
    5.  IIFE (Immediately Invoked Function Expression)
    6.  Higher-Order Functions (HOF)
    7.  Arrow Function – Advanced Concepts
    8.  Closures (Very Important)
    9.  Currying & Partial Application
    10. Memoization (Performance Optimization)
    11. Function as First-Class Object
    12. Recursion
    13. this Keyword with Function
    14. Call, Apply, Bind (Very Important)
    15. Callback vs Promise vs Async Function (Conceptual)
    16. Pure vs Impure Function (Functional Programming)
    17. Function Composition (Advanced FP)

1.  Function Basics & Scope
    1.  Function Declaration
        =>  সরাসরি function কীওয়ার্ড দিয়ে ফাংশন তৈরি।
            function greet() {
                console.log("Hello!");
            }
        ✔ Hoisting হয়
        ✔ আগে ডিফাইন না করলেও কল করা যায়

    2.  Function Expression
        =>  ফাংশনকে ভেরিয়েবলে রাখা।
            const greet = function () {
                console.log("Hello!");
            };
        ✔ Hoisting হয় না
        ✔ প্রয়োজন অনুযায়ী বেশি কন্ট্রোল

    3.  Function Scope
        =>  ফাংশনের ভেতরে ডিক্লেয়ার করা ভেরিয়েবল বাইরে থেকে পাওয়া যায় না।
            function test() {
                let x = 10;
            }

    4.  Global Scope vs Local Scope
            let a = 5; // Global

            function demo() {
                let b = 10; // Local
            }
        ✔ Global → সব জায়গায়
        ✔ Local → শুধু নিজের ব্লকে

    5.  Block Scope (let, const)
            if (true) {
                let x = 10;
            }
        ✔ let ও const ব্লকের বাইরে যায় না
        ✔ var যায়

    6.  Scope Chain
        =>  ভিতরের স্কোপ বাইরে খুঁজে।
            let x = 10;

            function outer() {
            function inner() {
                console.log(x);
                }
            inner();
            }

    7.  Variable Shadowing
        =>  ভিতরের ভেরিয়েবল বাইরে ভেরিয়েবলকে ঢেকে ফেলে।
            let x = 5;

            function demo() {
                let x = 10;
                console.log(x); // 10
            }

2.  Parameters & Arguments
    1.  Function Parameters
        =>  ফাংশনের ইনপুট।
            function sum(a, b) {}

    2.  Arguments Object
        =>  সব arguments ধরে রাখে (Regular function-এ)।
            function demo() {
                console.log(arguments);
            }
        ✔  Arrow function-এ নেই

    3.  Default Parameters
        function greet(name = "Guest") {
            console.log(name);
        }

    4.  Rest Parameters (...args)
        function sum(...nums) {
            return nums.reduce((a, b) => a + b);
        }

    5.  Spread Operator in Function Call
        const arr = [1, 2, 3];
        sum(...arr);

3.  Function Hoisting
    1.  Function Declaration Hoisting
        hello();
        function hello() {}

    2.  Function Expression Hoisting
        hello(); // Error
        const hello = function () {};

    3.  Arrow Function Hoisting
        Arrow function hoisted হয় না।

4.  Anonymous & Named Functions
    1.  Anonymous Function
        =>  নাম নেই।
            setTimeout(function () {}, 1000);

    2.  Named Function Expression
        const greet = function sayHi() {};

    =>  Use Cases
        1.  Callback
        2.  Event handler
        3.  Timer

5.  IIFE (Immediately Invoked Function Expression)
    1.  Basic IIFE
        (function () {
            console.log("Run immediately");
        })();

    2.  IIFE with Parameters
        (function (x) {
            console.log(x);
        })(10);

    3.  Scope Isolation
        =>  Global pollution রোধ করে

    4.  Module-style IIFE
        const module = (function () {
            return { name: "JS" };
        })();

6.  Higher-Order Functions (Important)
    1.  Function as Argument
        function greet(fn) {
            fn();
        }

    2.  Function as Return Value
        function outer() {
            return function () {};
        }

    3.  Callback Function
        =>  এক ফাংশন অন্য ফাংশনে পাঠানো।

    =>  Array HOFs
        1.  arr.map()
        2.  arr.filter()
        3.  arr.reduce()
        4.  arr.forEach()

7.  Arrow Function – Advanced
    1.  One-liner & Implicit Return
        const add = (a, b) => a + b;

    2.  Arrow vs Regular
        বিষয়	        Regular	    Arrow
        1.  this        dynamic     lexical
        2.  arguments   আছে        নেই

8.  Closures (খুব গুরুত্বপূর্ণ)
    1.  What is Closure
        =>  ফাংশন তার বাইরের ভেরিয়েবল মনে রাখে।
            function outer() {
                let count = 0;
                return function () {
                    count++;
                    return count;
                };
            }

    2.  Private Variables
        =>  Data hide করা যায়

    3.  Closure in Loop
        =>  let ব্যবহার করা জরুরি

    =>  Real-world Use
        ✔ Counter
        ✔ Cache
        ✔ Event handler

9.  Currying & Partial Application
    1.  Currying
        const add = a => b => c => a + b + c;

    2.  Partial Application
        function add(a, b, c) {
            return a + b + c;
        }
        const add5 = add.bind(null, 5);

10. Memoization
    1.  What & Why
        =>  ফল cache করে performance বাড়ানো
        function memo(fn) {
            const cache = {};
            return function (n) {
                if (cache[n]) return cache[n];
                return (cache[n] = fn(n));
            };
        }

11. Function as First-Class Object
    ✔ Function = value
    ✔ Variable-এ রাখা
    ✔ Argument হিসেবে পাঠানো
    ✔ Property যোগ করা

    function test() {}
    test.version = "1.0";

12. Recursion
    1.  Recursive Function
        =>  ফাংশন নিজেকে কল করে

    2.  Base Case
        =>  যেখানে থামে

    3.  Stack Overflow
        =>  Base case না থাকলে

    =>  Tail Recursion
        শেষ লাইনে recursive call (concept)

13. this Keyword with Function
    Context         this
    1.  Regular     caller
    2.  Arrow       parent
    3.  Method      object
    4.  Event       element

14. Call, Apply, Bind
    fn.call(obj, a, b)
    fn.apply(obj, [a, b])
    const newFn = fn.bind(obj)
    ✔ Function Borrowing

15. Callback vs Promise vs Async
    Callback	    Promise     Async
    1.  Nested	    then	    clean
    2.  Hell        better      best

16. Pure vs Impure Function
    1.  Pure
        ✔ Same input → same output
        ✔ No side effect

    2.  Impure
        ✔ Global modify
        ✔ Console / API

17. Function Composition
    ✔  Small → Big Logic
        const compose = (f, g) => x => f(g(x));

*/

//  Rest Operators
function addNumbers(...numbers) {
    return numbers;
}
console.log(addNumbers(20, 30, 50, 40, 30));

//  Spread Operators
const numbers = [20, 10, 50, 30, 22, 33, 44, 56];
function sum(a, b, c, d, e, f, g, k) {
    return a + b + c + d + e + f + g + k;
}
console.log(sum(...numbers));

console.log(...numbers);
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//  Recursion (Function calling itself)
//  5! = 1*2*3*4*5
//  5!  = 4!*5
//  5%! = (5-1)!*5
//  n!  = (n-1)!*5
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
const result = factorial(5);
console.log(result);
