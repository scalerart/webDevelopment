/*
Advanced Function Checklist
   ✔ Function Scope
   ✔ Parameter & Rest
   ✔ Default Parameter
   ✔ Function Hoisting
   ✔ Anonymous Function
   ✔ IIFE
   ✔ Higher-Order Function
   ✔ Arrow Function (Advanced)
   ✔ Closure
   ✔ Currying
   ✔ Memoization
   ✔ Function as Object
   ✔ Recursion

Function Scope (Variable Scope inside Function)
1.  Function Scope কী?
   1.  Function-এর ভিতরে declare করা variable সেখানে ছাড়া বাইরে দেখা যায় না
   2.  Outside variable inside access করা যায় কিন্তু overwrite বা shadowing ঘটতে পারে
   let name = "Global";
   function greet() {
       let name = "Local";
       console.log(name); Local
   }
   greet();
   console.log(name); Global
   =>  Local variable → function scope
   =>  Global variable → program-wide

2.  Parameters: Rest & Default
   1.  Default Parameter
       function greet(name = "Guest") {
           console.log("Hello " + name);
       }
       greet(); // Hello Guest
       greet("Abdul"); // Hello Abdul

   2.  Rest Parameter (Variable number of args)
       function sum(...numbers) {
           let total = 0;
           for (let n of numbers) total += n;
           return total;
       }
       console.log(sum(1, 2, 3, 4)); // 10

3.  Function Hoisting
   1.  Normal Function Declaration
       sayHi();
       function sayHi() {
           console.log("Hi!");
       }
       =>  কাজ করবে কারণ function declaration hoist হয়

   2.  Function Expression / Arrow Function
       sayHi(); // Error
       const sayHi = () => {
           console.log("Hi!");
       }
       =>  Function expression / arrow function hoist হয় না

4.  Anonymous Function
   =>  নাম ছাড়া function
   =>  সাধারণত callback বা event-handler এ ব্যবহার হয়
       setTimeout(function() {
           console.log("Hello after 1 sec");
       }, 1000);

5.  Immediately Invoked Function Expression (IIFE)
   =>  Function declare করার সাথে সাথে পরিষ্কারভাবে run করা
   =>  সাধারণত scope isolation এর জন্য ব্যবহার হয়
       (function() {
           console.log("I run immediately!");
       })();

6.  Higher-Order Function
   =>  Function যা অন্য function নেয় বা return করে
   1.  Example: Callback
       function greetUser(name, callback) {
           console.log("Hello " + name);
           callback();
       }
           greetUser("Abdul", function() {
           console.log("Have a nice day!");
       });

   2.  Example: Return Function
       function multiplyBy(x) {
           return function(y) {
           return x * y;
           }
       }
       const double = multiplyBy(2);
       console.log(double(5)); // 10

7.  Arrow Function Advanced
   1.  One-line return
   2.  Implicit return
   3.  No this, inherits parent this
       const square = x => x * x;
       console.log(square(5)); // 25

   =>  Multiple Parameters
       const add = (a, b) => a + b;
       console.log(add(10, 5)); // 15

8.  Function Closure
   =>  Closure কী?
       Function ভিতরের variable বাইরে থেকে access করা যায়
       Private variable তৈরি করতে Closure use হয়
       function counter() {
           let count = 0;
           return function() {
           count++;
           return count;
           }
       }
       const myCounter = counter();
       console.log(myCounter()); // 1
       console.log(myCounter()); // 2
       console.log(myCounter()); // 3
   =>  Closure = Private & Persistent state

9.  Function Currying
   =>  Function যা একাধিক arguments এক এক করে নেয়
   =>  Functional programming-এ বেশি ব্যবহার হয়
       function multiply(a) {
           return function(b) {
           return a * b;
           }
       }
       const double = multiply(2);
       console.log(double(5)); // 10

10. Function Memoization (Performance Optimization)
   =>  Function result cache করে future calls fast করতে
       const memoizedAdd = (function() {
           let cache = {};
           return function(n) {
           if (cache[n]) return cache[n];
           cache[n] = n + 10;
           return cache[n];
           }
       })();
       console.log(memoizedAdd(5)); // 15
       console.log(memoizedAdd(5)); // 15 (cached)

11. Function as Object
   =>  Function JavaScript-এ first-class object
   =>  Property বা method attach করা যায়
       function greet() {
           console.log("Hi");
       }
       greet.language = "JavaScript";
       console.log(greet.language); // JavaScript

12. Recursion (Function calling itself)
   function factorial(n) {
       if (n === 0) return 1;
       return n * factorial(n - 1);
   }
   console.log(factorial(5)); // 120
   =>  Base case না থাকলে stack overflow error        
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
