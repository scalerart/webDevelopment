/*
JavaScript Event Checklist
    ✔ onclick
    ✔ addEventListener
    ✔ click / keyup / submit
    ✔ event object
    ✔ bubbling
    ✔ delegation

Event কী?
    =>  Event হলো browser–এ ঘটে যাওয়া কোনো action। যেমন—
        1.  click
        2.  key press
        3.  form submit
        4.  mouse move
        5.  page load
    =>  JavaScript এসব event ধরে কাজ করে।

    1.  onclick (Old but Important)
        <button onclick="sayHello()">Click</button>
        function sayHello() {
            alert("Hello");
        }
        =>  Problem
            1.  HTML + JS mix
            2.  scalable না
        =>  Beginner-এ বুঝতে ভালো, real project-এ avoid

    2.  addEventListener() (Most Important)
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", function () {
            console.log("Button clicked");
        });
        =>  কেন best?
            1.  multiple event
            2.  clean code
            3.  modern JS

    3.  Event Object (Very Important)
        btn.addEventListener("click", function (event) {
            console.log(event);
        });

        =>  Common properties
            Property	                কাজ
            1.  event.type              কোন event
            2.  event.target	        কোন element
            3.  event.key               key press
            4.  event.preventDefault()  default বন্ধ

    4.  Event Types (Must Know)
        1.  click
            btn.addEventListener("click", () => {});

        2.  keyup
            input.addEventListener("keyup", (e) => {
                console.log(e.key);
            });
            =>  typing detect
            =>  search box

    5.  Arrow vs Function (Event Context)
        btn.addEventListener("click", function () {
            console.log(this); // button
        });

        btn.addEventListener("click", () => {
            console.log(this); // window
        });
        =>  interview favourite

    6.  Event Bubbling (Advanced)
        parent.addEventListener("click", () => {
            console.log("Parent");
        });

        child.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("Child");
        });

    7.  Event Delegation (Pro Technique)
        list.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
            console.log(e.target.innerText);
            }
        });
        =>  dynamic element handle
        =>  performance boost

=>  Common Mistakes
    1.  onclick বেশি ব্যবহার
    2.  preventDefault ভুলে যাওয়া
    3.  arrow function + this confusion
    4.  event bubbling না বোঝা

=>  Best Practice
    1.  addEventListener ব্যবহার
    2.  event delegation শিখে নাও
    3.  form submit-এ preventDefault
    4.  clean separation (HTML / JS)

=>  Practice Tasks (Must Do)
    1.  Button click counter
    2.  Input typing preview
    3.  Form validation
    4.  Todo add (event delegation)
    5.  keyup দিয়ে search filter
*/