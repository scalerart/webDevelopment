/*
JavaScript Core Concepts
1.  Variables & Data Types (মেরুদণ্ড)
    1.  Variables
        var (পুরনো)
        let
        const

    2.  Data Types
        1.  Primitive
            string, number, boolean, undefined, null, symbol, bigint

        2.  Non-Primitive
            object, array, function

    =>  Framework-এ ব্যবহার
        State, props, API data—সবই object/array দিয়ে।

2.  Operators & Expressions
    1.  Arithmetic (+ - * / %)
    2.  Comparison (== === != !==)
    3.  Logical (&& || !)
    4.  Ternary (condition ? a : b)

    =>  React/Vue-এ সবচেয়ে বেশি
        Conditional rendering, dynamic class, logic control।

3.  Control Flow (Decision Making)
    1.  if / else
    2.  switch
    3.  for, while, do while
    4.  break, continue

    =>  UI দেখাবে নাকি লুকাবে?
    =>  ডাটা আছে নাকি নাই? → সব এখান থেকেই।

4.  Functions (সবচেয়ে গুরুত্বপূর্ণ)
    1.  Function Types
        1.  Function Declaration
        2.  Function Expression
        3.  Arrow Function () => {}
        4.  Callback Function

    2.  Advanced
        1.  Return
        2.  Default Parameter
        3.  Rest Parameter

    =>  Framework = Function based
        React component = function
        Vue composable = function

5.  Scope, Hoisting & Execution Context (গভীর কিন্তু জরুরি)
    1.  Global Scope
    2.  Local Scope
    3.  Block Scope
    4.  Hoisting
    5.  Call Stack
    6.  Execution Context

    =>  Bug কেন হচ্ছে বুঝতে এগুলো না জানলে তুমি অন্ধ।

6.  Closures (Framework এর প্রাণ)
    function outer() {
        let count = 0;
        return function () {
            count++;
            return count;
        }
    }

    =>  React hooks, private state, event handler—সব closures।

7.  Objects & Arrays (ডাটা নিয়ে খেলা)
    1.  Object
        1.  Property
        2.  Method
        3.  Destructuring
        4.  Optional chaining ?.

    2.  Array
        1.  map
        2.  filter
        3.  reduce
        4.  find
        5.  forEach

    =>  90% framework কাজ array method দিয়ে

8.  This, Bind, Call, Apply
    1.  this context
    2.  bind
    3.  call
    4.  apply

    =>  Class component, event handler, OOP pattern বোঝার জন্য।

9.  Asynchronous JavaScript (সবচেয়ে ভয়ংকর কিন্তু সবচেয়ে দরকারি)
    1.  Callbacks
    2.  Promise
    3.  async / await
    4.  fetch
    5.  API handling
    6.  Error handling (try/catch)

    =>  Framework ছাড়া একটা real app বানানো অসম্ভব।

10. DOM Manipulation (Vanilla JS শক্তি)
    1.  querySelector
    2.  addEventListener
    3.  classList
    4.  innerText / innerHTML
    5.  Event Bubbling
    6.  Event Delegation

    =>  Framework থাকলেও core বোঝার জন্য Vanilla DOM জানা চাই।

11. ES6+ Features (Modern JS)
    1.  Destructuring
    2.  Spread Operator ...
    3.  Template Literal
    4.  Modules (import/export)
    5.  Optional chaining
    6.  Nullish coalescing ??

    =>  Modern framework = ES6 ছাড়া চলেই না।

12. Error Handling & Debugging
    1.  try / catch
    2.  throw
    3.  Console debugging
    4.  DevTools

    =>  Production app বাঁচায়।

Vanilla JavaScript কোথায় সবচেয়ে বেশি দরকার?
    1.  Framework শেখার আগে
        React শেখার আগে Vanilla না জানলে = অন্ধভাবে কোড লেখা

    2.  Interview
        80% প্রশ্ন Vanilla JS থেকে

    3.  Bug Fixing
        Framework error আসলে ভেতরে Vanilla-ই কাজ করে

    4.  Performance Optimization
        DOM, event, async—সব Vanilla

    5.  Framework ছাড়াও কাজ
        Simple website, widget, animation
*/

/*
PHASE 1: JavaScript Foundation (Must)
    1.  Variables (let, const)
    2.  Data Types
    3.  Operators
    4.  Condition (if / else)
    5.  Loop
    6.  Function (basic → arrow)

    =>  এখানে logic জন্ম নেয়

PHASE 2: Core Power (Game Changer)
    7.  Scope & Hoisting
    8.  Function Execution & Call Stack
    9.  Closure
    10. Object (deep)
    11. Array + important methods
    12. this keyword

    =>  এখানে JS “ক্লিক” করবে

PHASE 3: Real World JavaScript
    13. DOM manipulation
    14. Events (bubbling, delegation)
    15. Async JS
    16. Promise
    17. async / await
    18. Error handling

    =>  এখান থেকে app বানানো শুরু

PHASE 4: Modern JavaScript (Framework Friendly)
    19. ES6+ features
    20. Modules
    21. Clean code mindset
    22. Mini projects (Vanilla JS)

    =>  এখান থেকে React easy
*/