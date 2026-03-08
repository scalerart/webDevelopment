/*
Memory & Performance Checklist
    ✔ Memory management
    ✔ Garbage collection
    ✔ Memory leak
    ✔ Leak detection
    ✔ Optimization techniques

1.  JavaScript–এ Memory কীভাবে কাজ করে?
    =>  JS Engine memory allocate করে:
        1.  Variables
        2.  Objects
        3.  Functions
        4.  Closures

    =>  কাজ শেষ হলে memory free হওয়া উচিত
    =>  এই কাজটা করে Garbage Collector (GC)

2.  Garbage Collection
    =>  Unused memory auto remove করে
    =>  Mark & Sweep Algorithm
        1.  reachable object mark হয়
        2.  unreachable object delete হয়

3.  Memory Leak কী?
    =>  যখন memory free হয় না কিন্তু আর দরকার নেই
    =>  Result:
        1.  App slow
        2.  Browser crash
        3.  Mobile hang

4.  Common Memory Leak Causes (Very Important)
    1.  Global Variables
        leak = "I am global"; //
        Fix: let leak = "safe";

    2.  Forgotten Timers
        setInterval(() => {
            console.log("Running");
        }, 1000);
        =>  clearInterval না করলে leak

    3.  DOM Reference Leak
        let btn = document.getElementById("btn");
        btn = null;
        =>  DOM remove হলেও reference থাকলে leak

    4.  Closures
        function createCounter() {
            let count = 0;
            return () => count++;
        }
        =>  Closure powerful, misuse করলে leak

    5.  Event Listener Leak
        button.addEventListener("click", handle);
        =>  removeEventListener না করা

5.  How to Detect Memory Leak
    ✔ Chrome DevTools
    ✔ Performance tab
    ✔ Heap snapshot
    ✔ Timeline record

6.  Performance Optimization
    1.  Minimize DOM Access
    =>  Wrong Way
        document.getElementById("x").innerText = "A";
        document.getElementById("x").style.color = "red";

    =>  Right Way
        let el = document.getElementById("x");
        el.innerText = "A";
        el.style.color = "red";

    2.  Debounce & Throttle
        Heavy event (scroll, resize)
        function debounce(fn, delay) {
            let timer;
            return function () {
                clearTimeout(timer);
                timer = setTimeout(fn, delay);
            };
        }

    3.  Efficient Loops
        =>  Wrong Way
            for (let i in arr) {}

        =>  Right Way
            for (let i = 0; i < arr.length; i++) {}

    4.  Avoid Unnecessary Re-render
        =>  state change minimal রাখো

    5.  Lazy Loading
        =>  দরকার হলে data load

7.  Use WeakMap & WeakSet (Advanced)
    =>  GC friendly
        let wm = new WeakMap();
    =>  reference না থাকলে auto clear

8.  Real-Life Optimization Example
    window.addEventListener("scroll", debounce(() => {
        console.log("scrolling");
    }, 300));

=>  Common Performance Killers
    1.  Heavy loops
    2.  Large JSON parse
    3.  Too many listeners
    4.  Deep nesting

=>  Interview Questions
    ✔ Memory leak কী
    ✔ Garbage collection
    ✔ WeakMap use
    ✔ debounce vs throttle

=>  Practice Tasks (Must Do)
    1.  event listener remove
    2.  debounce search input
    3.  interval cleanup
    4.  DOM cache practice
    5.  Chrome performance test
*/