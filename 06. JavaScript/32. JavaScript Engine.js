/*
JavaScript Engine Checklist
    ✔ JavaScript Engine
    ✔ Execution Context
    ✔ Memory phase
    ✔ Call Stack
    ✔ Event Loop
    ✔ Microtask vs Macrotask

1.  JavaScript Engine কী?
    JavaScript Engine হলো সেই সফটওয়্যার
    যেটা তোমার লেখা JS code পড়ে, বোঝে, চালায়

    =>  Popular Engines
        1.  Chrome → V8
        2.  Firefox → SpiderMonkey
        3.  Safari → JavaScriptCore

    =>  JS Engine কী কী করে?
        1.  Code পড়া (Parsing)
        2.  Execution Context তৈরি
        3.  Call Stack manage
        4.  Memory manage
        5.  Event Loop চালানো

2.  Execution Context (সবচেয়ে গুরুত্বপূর্ণ)
    Execution Context = একটা environment যেখানে JS code execute হয়
    =>  Execution Context এর ৩টা অংশ
        1.  Variable Environment
        2.  Scope Chain
        3.  this value

    =>  Execution Context এর ধরন
        1.  Global Execution Context (GEC)
        2.  Function Execution Context (FEC)
        3.  Global Execution Context (GEC)

3.  JS file run হলে প্রথমেই এটা তৈরি হয়
    var a = 10;
        function test() {
        console.log("Hello");
    }
    =>  এখানে:
        1.  a memory তে যায়
        2.  test memory তে যায়
        3.  this = window (browser)

4.  Memory Creation Phase (Hoisting)
    =>  Execution Context ২ ধাপে কাজ করে
        =>  Phase 1: Memory Creation
            1.  var → undefined
            2.  function → full body
            3.  let/const → TDZ (access করা যাবে না)

                console.log(a); // undefined
                var a = 10;

        =>  Phase 2: Execution Phase
            1.  line by line code execute

5.  Function Execution Context (FEC)
    function add(a, b) {
        return a + b;
    }
    add(2, 3);

    =>  add() call হলে
        1.  নতুন execution context তৈরি হয়
        2.  নিজের memory + scope + this থাকে

6.  Call Stack
    Call Stack = যেখানে execution context গুলো stack আকারে থাকে
    =>  Example
        function one() {
            two();
        }

        function two() {
            three();
        }

        function three() {
            console.log("Done");
        }
        one();

    =>  Call Stack Flow
        1.  Global
        2.  one()
        3.  two()
        4.  three()


    =>  কাজ শেষ হলে stack থেকে pop হয়
        Stack Overflow
            function loop() {
                loop();
            }
    =>  infinite call → crash

7.  Event Loop (Game Changer)
    =>  JavaScript asynchronous কাজ কীভাবে handle করে—এর brain

    =>  Important Parts
        1.  Call Stack
        2.  Web APIs
        3.  Callback Queue
        4.  Microtask Queue
        5.  Event Loop

8.  Event Loop Flow (Step-by-step)
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    Promise.resolve().then(() => console.log("C"));
    console.log("D");

    =>  Execution Order Explained
        1.  A → call stack
        2.  setTimeout → Web API
        3.  Promise → Microtask Queue
        4.  D → call stack
        5.  Microtask Queue → C
        6.  Callback Queue → B

9.  Microtask vs Macrotask
    =>  Microtask Queue
        1.  Promise.then
        2.  async/await
        3.  MutationObserver

    =>  Macrotask Queue
        1.  setTimeout
        2.  setInterval
        3.  DOM events
    =>  Microtask সবসময় আগে execute হয়

=>  Common Confusions
    1.  JS multi-threaded মনে করা
    2.  setTimeout(0) = instant ভাবা
    3.  promise execution order ভুল বোঝা
    4.  call stack vs event loop confuse

=>  Interview Golden Questions
    ✔ Execution context কী?
    ✔ Call stack overflow কীভাবে হয়?
    ✔ Event loop কী?
    ✔ Promise আগে কেন execute হয়?

=>  Mental Model (মনে রাখার ট্রিক)
    1.  Call Stack = রান্নাঘর
    2.  Web API = সহকারী
    3.  Queue = অপেক্ষার লাইন
    4.  Event Loop = ম্যানেজার

=>  Practice Tasks (Must Do)
    1.  console দিয়ে call stack trace
    2.  setTimeout vs Promise test
    3.  nested function stack observe
    4.  async/await order test
*/