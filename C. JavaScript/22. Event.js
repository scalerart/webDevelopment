/*
JavaScript Event Checklist   
    ✔ onclick
    ✔ addEventListener
    ✔ event object
    ✔ click / keyup / submit
    ✔ arrow vs function
    ✔ bubbling
    ✔ capturing
    ✔ delegation
    ✔ preventDefault
    ✔ stopPropagation
    ✔ removeEventListener
    ✔ keyboard & mouse events
    ✔ form events
    ✔ window events
    ✔ custom event

=>  Event কী?
    Event হলো browser–এ ঘটে যাওয়া কোনো action, যেটাকে JavaScript ধরে কাজ করতে পারে।
    =>  Common Events
        1.  click
        2.  key press
        3.  form submit
        4.  mouse move
        5.  page load

    ✔  এটা ৩ ভাবে হতে পারে:
        1.  User action → click, key press
        2.  Browser action → page load
        3.  System change → input change
        
    =>  JavaScript এই event গুলো listen করে response দেয়।

1.  onclick (Old but Important)
        <button onclick="sayHello()">Click</button>

        function sayHello() {
            alert("Hello");
        }

    সমস্যা:
        1.  HTML + JS mix হয়
        2.  বড় project এ messy হয়ে যায়
        3.  একটাই handler দেওয়া যায়

    ✔  Real project এ avoid করা ভালো

2.  addEventListener() (Most Important)
        let btn = document.querySelector("#btn");

        btn.addEventListener("click", function () {
            console.log("Button clicked");
        });

    কেন better?
        ✔  clean code
        ✔  একাধিক event দেওয়া যায়
        ✔  capturing/bubbling control করা যায়
        ✔  modern JavaScript standard

3.  Event Object (Very Important)
        btn.addEventListener("click", function(event) {
            console.log(event);
        });

    ✔  event হলো সেই object যেখানে event সম্পর্কিত সব তথ্য থাকে।

    =>  Common Properties
        1.  event.type              কোন event হয়েছে
        2.  event.target	        কোন element এ click
        3.  event.key	            কোন key চাপা হয়েছে
        4.  event.preventDefault()  default action বন্ধ
        5.  event.stopPropagation() parent এ যাওয়া বন্ধ

    ✔  Interview এ সবচেয়ে বেশি আসে event.target

    ✔  Common Event Types (Must Know)
        1.  click
            btn.addEventListener("click", () => {});

        2.  keyup
            input.addEventListener("keyup", (e) => {
                console.log(e.key);
            });

            =>  typing detect
            =>  search box

        3.  submit
            form.addEventListener("submit", (e) => {
                e.preventDefault();
            });

4.  Arrow Function vs Normal Function (this context)
    1.  Normal Function
        btn.addEventListener("click", function() {
            console.log(this);
        });

    ✔  this = button element

    2.  Arrow Function
        btn.addEventListener("click", () => {
            console.log(this);
        });

    ✔  this = window (বা outer scope)
    ✔  বড় bug source এটা।
    ✔  Rule: Element এর reference দরকার হলে normal function ব্যবহার করো।

    =>  interview favourite
    =>  real bug source

5.  preventDefault()
    ✔  Default behaviour বন্ধ করে।

        Example:

        form.addEventListener("submit", function(e) {
            e.preventDefault();
        });


    ✔  না দিলে:
        1.  page reload হবে
        2.  form submit হয়ে যাবে
        3.  Search box / SPA app এ এটা mandatory।

6.  Event Bubbling (Advanced)
        parent.addEventListener("click", () => {
            console.log("Parent");
        });

        child.addEventListener("click", (e) => {
            console.log("Child");
        });
    =>  event নিচ থেকে উপরে যায়
    =>  default behaviour

7.  Event Capturing (Rare but Important)
        parent.addEventListener("click", () => {
            console.log("Parent");
        }, true);

    =>  Flow: Capturing → Target → Bubbling
    =>  interview
    =>  framework understanding

8.  stopPropagation & stopImmediatePropagation
    1.  stopPropagation()
        child.addEventListener("click", function(e) {
            e.stopPropagation();
        });

    ✔  Event parent এ উঠবে না।

    2.  stopImmediatePropagation()
    ✔  একই element এ multiple listener থাকলে অন্যগুলোও বন্ধ করে দেয়।

9.  Event Delegation (Pro Technique)
    ধরো:

        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>


    ✔  ভুল পদ্ধতি:
        প্রতিটা li তে আলাদা listener দেওয়া।

    ✔  সঠিক পদ্ধতি:

        list.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                console.log(e.target.innerText);
            }
        });

    ✔  কেন powerful?
        1.  Dynamic element handle করে
        2.  Memory কম খরচ
        3.  Performance ভালো
        4.  React internally delegation ব্যবহার করে।

10. once Option (Clean Trick)
        btn.addEventListener("click", () => {
            console.log("Only once");
        }, { once: true });
    =>  একবারই কাজ করবে
    =>  memory safe

11. removeEventListener (Important)
        function handleClick() {
            console.log("clicked");
        }
        btn.addEventListener("click", handleClick);
        btn.removeEventListener("click", handleClick);
    =>  dynamic UI
    =>  performance control

12. Form Related Events
    1.  submit
    2.  focus
    3.  blur
    4.  change
    5.  input
        input.addEventListener("focus", () => {});
    =>  form validation
    =>  UX improvement

13. Keyboard Events

        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                console.log("Enter pressed");
            }
        });

    Difference:
        1.  keydown     press
        2.  keyup       release
        3.  keypress	(old, avoid)

14. Mouse Events
        1.  click	        normal click
        2.  dblclick	    double click
        3.  mouseenter	    hover
        4   mouseleave	    hover leave
        5.  contextmenu	    right click
    ✔  hover effect
    ✔  UI interaction

15. Form Events
        1.  focus	    input active
        2.  blur	    input inactive
        3.  change	    value change (after blur)
        4.  input	    typing detect

    ✔  validation এর জন্য input best।

16. Window / Page Events
        window.addEventListener("resize", () => {});
        window.addEventListener("scroll", () => {});

    Difference:
        1.  Event	            কাজ
        2.  load	            সব resource load
        3.  DOMContentLoaded	শুধু HTML ready

    ✔  Modern project এ DOMContentLoaded বেশি ব্যবহার হয়।

17. Custom Event (Advanced)
    1.  Custom Event
        const myEvent = new Event("hello");

        element.dispatchEvent(myEvent);

    2.  Advanced version:

        const myEvent = new CustomEvent("hello", {
            detail: { name: "Kadir" }
        });

    ✔  বড় application এ component communication এ লাগে।

=>  Common Mistakes
    1.  arrow function + this
    2.  preventDefault ভুলে যাওয়া
    3.  bubbling না বুঝা
    4.  removeEventListener এ একই reference না দেওয়া

=>  Best Practices
    1.  addEventListener ব্যবহার করো
    2.  event delegation শিখে নাও
    3.  form submit এ preventDefault
    4.  HTML / JS clean separation

=>  Practice Tasks (Must Do)
    1.  Button click counter
    2.  Input typing preview
    3.  Form validation
    4.  Todo app (event delegation)
    5.  keyup দিয়ে search filter
*/