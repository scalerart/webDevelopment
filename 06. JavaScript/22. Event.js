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
    =>  JavaScript এই event গুলো listen করে response দেয়।

    1.  onclick (Old but Important)
            <button onclick="sayHello()">Click</button>
            function sayHello() {
                alert("Hello");
            }
        =>  সমস্যা
            1.  HTML + JS mix হয়ে যায়
            2.  scalable না
        =>  শেখার জন্য ভালো
        =>  Real project এ avoid করা ভালো

    2.  addEventListener() (Most Important)
            let btn = document.querySelector("#btn");
            btn.addEventListener("click", function () {
                console.log("Button clicked");
            });
        =>  কেন best?
            1.  একাধিক event add করা যায়
            2.  clean & readable code
            3.  modern JavaScript standard

    3.  Event Object (Very Important)
            btn.addEventListener("click", function (event) {
                console.log(event);
            });

        =>  Common Properties
            1.  event.type              কোন event
            2.  event.target	        কোন element
            3.  event.key               কোন key press
            4.  event.preventDefault()  default behaviour বন্ধ

    4.  Common Event Types (Must Know)
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

    5.  Arrow Function vs Normal Function (this context)
            btn.addEventListener("click", function () {
                console.log(this); // button
            });

            btn.addEventListener("click", () => {
                console.log(this); // window
            });
        =>  interview favourite
        =>  real bug source

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
            e.stopPropagation();
        =>  parent এ যাওয়া বন্ধ
            e.stopImmediatePropagation();
        =>  একই element-এর অন্য event-ও বন্ধ

    9.  Event Delegation (Pro Technique)
            list.addEventListener("click", (e) => {
                if (e.target.tagName === "LI") {
                    console.log(e.target.innerText);
                }
            });
        =>  dynamic element handle
        =>  performance boost

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
        =>  keydown	    press
        =>  keyup	    release

    14. Mouse Events
        1.  mouseenter
        2.  mouseleave
        3.  mousemove
        4.  dblclick
        5.  contextmenu
            box.addEventListener("mouseenter", () => {});
        =>  hover effect
        =>  UI interaction

    15. Window / Page Events
            window.addEventListener("load", () => {
                console.log("Page loaded");
            });

        =>  Other:
            1.  DOMContentLoaded
            2.  resize
            3.  scroll

    16. Custom Event (Advanced)
            const myEvent = new Event("hello");

            element.addEventListener("hello", () => {
                console.log("Hello Event");
            });

            element.dispatchEvent(myEvent);
        =>  large application
        =>  component communication

=>  Common Mistakes
    1.  onclick বেশি ব্যবহার
    2.  preventDefault ভুলে যাওয়া
    3.  arrow function + this confusion
    4.  bubbling না বোঝা

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