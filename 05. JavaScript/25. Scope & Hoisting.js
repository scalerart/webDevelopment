/*
Scope & Hoisting Checklist
    ✔ Global scope
    ✔ Function scope
    ✔ Block scope
    ✔ Scope chain
    ✔ Hoisting
    ✔ TDZ
    
Scope কী?
    Scope মানে—কোন variable কোথা থেকে access করা যাবে।
    JavaScript-এ scope ঠিক করে দেয়—
        1.  variable কোথায় declare করা হয়েছে
        2.  কোথায় ব্যবহার করা যাবে

JavaScript-এ মূলত ৩ ধরনের scope আছে:
    1.  Global Scope
    2.  Function Scope
    3.  Block Scope

1.  Global Scope
    let x = 10;
    function show() {
        console.log(x);
    }
    show(); // 10
    =>  function এর ভিতর থেকেও access করা যায়
    =>  বেশি ব্যবহার dangerous

2.  Function Scope
    function test() {
        let y = 20;
        console.log(y);
    }
    test();
    console.log(y); // Error
    =>  function-এর বাইরে পাওয়া যায় না

3.  Block Scope (let / const)
    if (true) {
        let a = 5;
        const b = 10;
    }
    console.log(a);
    =>  {} block এর ভিতরে সীমাবদ্ধ

    =>  var vs let vs const (Scope wise)
            Keyword	    Scope
        1.  var	        Function scope
        2.  let	        Block scope
        3.  const	    Block scope

Hoisting কী?
    Variable ও function declaration আগে থেকেই memory-তে তুলে রাখা হয়।

1.  Function Hoisting
    hello();
    function hello() {
        console.log("Hello");
    }
    =>  কাজ করবে

2.  Variable Hoisting (var)
        console.log(x);
        var x = 10;
    =>  JS internally করে:
        var x;
        console.log(x); // undefined
        x = 10;

3.  let & const Hoisting (TDZ)
        console.log(a);
        let a = 5;
    =>  ReferenceError
        1.  Temporal Dead Zone (TDZ)
        2.  declaration এর আগে access নিষিদ্ধ

4.  Function Expression Hoisting
        sayHi();
        var sayHi = function () {
            console.log("Hi");
        };
    =>  Error (undefined is not a function)

5.  Arrow Function Hoisting
        hello();
        const hello = () => {
            console.log("Hello");
        };
    =>  Error
    =>  arrow function hoist হয় না

=>  Common Mistakes (Very Important)
    1.  var ব্যবহার করে scope leak
    2.  hoisting ধরে code লেখা
    3.  let/const hoisting ভুল বোঝা
    4.  nested scope confuse করা

=>  Best Practices (Industry Standard)
    1.  always use let / const
    2.  minimize global scope
    3.  declare variables top-এ
    4.  hoisting এর উপর depend করো না

=>  Practice Tasks (Must Do)
    1.  global vs local test
    2.  var / let difference observe
    3.  hoisting predict করে output লিখো
    4.  nested function scope test
    5.  TDZ example বানাও
*/