/*
JavaScript DOM – Complete Master Checklist
    ✔ DOM concept
    ✔ Select element
    ✔ Change text / HTML
    ✔ Style & classList
    ✔ Traverse DOM
    ✔ Create / remove element
    ✔ Event handling
    ✔ Form handling
    ✔ Attribute control
    ✔ DOM ready

1.  DOM কী?
    DOM = Document Object Model

    =>  সহজ ভাষায়:
        1.  Browser HTML-কে একটি JavaScript Object Tree বানায়
        2.  JavaScript দিয়ে আমরা HTML element খুঁজতে, বদলাতে, style দিতে, class add/remove করতে পারি

        
2.  DOM Select করার Method (Element ধরা)
    1.  getElementById()
        <h1 id="title">Hello World</h1>
        let title = document.getElementById("title");
        =>  শুধু id এর জন্য
        =>  একটাই element দেয়
        =>  সবচেয়ে fast

    2.  querySelector()
        document.querySelector("#title"); // id
        document.querySelector(".box");   // class
        document.querySelector("p");      // tag
        =>  CSS selector ব্যবহার করে
        =>  প্রথম match হওয়া element দেয়
        =>  সবচেয়ে বেশি ব্যবহার হয়

    3.  querySelectorAll()
        document.querySelectorAll(".item");
        =>  NodeList দেয় (array-like)
        =>  loop চালানো যায় (forEach)

    4.  getElementsByClassName()
        document.getElementsByClassName("item");
        =>  HTMLCollection দেয়
        =>  live collection

    5.  getElementsByTagName()
        document.getElementsByTagName("p");

3.  Text & HTML Change
    1.  innerText
        title.innerText = "Hello JavaScript";
        =>  শুধু visible text
        =>  HTML parse করে না
        =>  Safe

    2.  textContent
        title.textContent = "Hello";
        =>  Hidden text সহ নেয়
        =>  Performance ভালো

    3.  innerHTML
        title.innerHTML = "<span>JS</span> World";
        =>  HTML parse হয়
        =>  User input দিলে XSS risk

4.  Style Apply (Inline CSS)
        title.style.color = "red";
        title.style.fontSize = "30px";
        title.style.backgroundColor = "yellow";
        
        =>  CSS property → camelCase
        =>  Inline style হয়

    =>  cssText
        title.style.cssText = `
        color: red;
        font-size: 30px;
        `;

5.  classList (Best Practice)
        title.classList.add("active");
        title.classList.remove("active");
        title.classList.toggle("active");
        title.classList.contains("active");
    =>  className overwrite করে — avoid করো

6.  DOM Traversing (Relation বুঝা)
    element.parentElement;
    element.children;
    element.firstElementChild;
    element.lastElementChild;
    element.nextElementSibling;
    element.previousElementSibling;

7.  Create / Add / Remove Element
    let p = document.createElement("p");
    p.innerText = "Hello DOM";
    document.body.append(p);
    p.remove();

8.  Attribute Handling
    img.getAttribute("src");
    img.setAttribute("alt", "Image");
    input.removeAttribute("disabled");

    =>  data-* attribute
        <button data-id="101"></button>
        button.dataset.id;

9.  Event Handling (Real Interaction)
    =>  addEventListener()
        button.addEventListener("click", () => {
            title.innerText = "Clicked";
        });

    =>  Common Events
        1.  click
        2.  input
        3.  change
        4.  submit
        5.  keyup
        6.  mouseover / mouseout

10. Event Object
    button.addEventListener("click", (e) => {
        console.log(e.target);
    });

11. Form Handling
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    input.value;

12. Event Delegation (Very Important)
    list.addEventListener("click", (e) => {
        if (e.target.matches("li")) {
        e.target.classList.toggle("active");
        }
    });

13. closest()
    element.closest(".card");

14. removeEventListener()
    function handleClick() {}
        btn.addEventListener("click", handleClick);
        btn.removeEventListener("click", handleClick);

15. Focus & Scroll
    input.focus();
    input.blur();
    section.scrollIntoView({ behavior: "smooth" });

16. DOM Ready Problem & Fix
    =>  Script head এ দিলে DOM পাওয়া যায় না
    =>  Fix:    <script defer src="app.js"></script>
    =>  document.addEventListener("DOMContentLoaded", () => {});

=>  Common Mistakes (Must Read)
    1.  id ভুল লেখা / duplicate id
    2.  innerHTML দিয়ে user input বসানো
    3.  style দিয়ে পুরো design করা
    4.  DOM বারবার query করা
    5.  event delegation না জানা

=>  Practice Tasks (Must Do)
    1.  Button click → text change
    2.  Dark mode toggle (classList)
    3.  Paragraph hide/show
    4.  innerText vs innerHTML test
    5.  Hover effect simulate (JS)
    6.  Dynamic list add/remove

=>  Final Status
    ✔ DOM Fundamentals
    ✔ Real Interaction
    ✔ Interview-ready concepts
    ✔ Framework-ready base (React/Vue)
*/