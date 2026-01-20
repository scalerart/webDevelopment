/*
JavaScript DOM Checklist
    ✔ getElementById
    ✔ querySelector
    ✔ innerText
    ✔ innerHTML
    ✔ style
    ✔ classList
    ✔ Real interaction

=>  DOM কী?
    =>  DOM = Document Object Model
    =>  সহজ ভাষায়
        1.  Browser HTML–কে একটা JavaScript object tree বানায়
        2.  JavaScript দিয়ে আমরা HTML খুঁজতে, বদলাতে, style দিতে, class add/remove করতে পারি

    1.  getElementById()
        =>  ID দিয়ে element ধরার সবচেয়ে পুরোনো ও fast উপায়
            <h1 id="title">Hello World</h1>
            let title = document.getElementById("title");
            console.log(title);
        =>  শুধু id-এর জন্য
        =>  একটাই element দেয়

    2.  querySelector()
        =>  CSS selector দিয়ে element ধরার modern উপায়
            document.querySelector("#title");   // id
            document.querySelector(".box");     // class
            document.querySelector("p");        // tag
        =>  প্রথম match হওয়া element দেয়
        =>  সবচেয়ে বেশি ব্যবহার হয়

        =>  querySelectorAll()
            document.querySelectorAll(".item");
        =>  NodeList দেয় (array-এর মতো)

    3.  innerText
        =>  Element-এর শুধু লেখা (text) পরিবর্তন করে HTML tag বুঝে না
            <h1 id="title">Hello World</h1>
            title.innerText = "Hello JavaScript";
        =>  User-visible text
        =>  Safe

    4.  innerHTML
        =>  Element-এর ভেতরের পুরো HTML পরিবর্তন করে
            title.innerHTML = "<span>JS</span> World";
        =>  HTML parse হয়
        =>  User input দিলে security risk (XSS)

    5.  style (Inline CSS)
        =>  JavaScript দিয়ে CSS apply করা
            title.innerHTML = "<span>JS</span> World";
            title.style.color = "red";
            title.style.fontSize = "30px";
            title.style.backgroundColor = "yellow";
        =>  CSS property → camelCase
        =>  Inline style হয়

    6.  classList
        =>  CSS class add / remove / toggle করার জন্য
            1.  add()
                title.classList.add("active");

            2.  remove()
                title.classList.remove("active");

            3.  toggle()
                title.classList.toggle("active");
                =>  থাকলে remove
                =>  না থাকলে add

            4.  contains()
                title.classList.contains("active"); // true / false

=>  Common Mistakes (খুব গুরুত্বপূর্ণ)
    1.  Script <head> এ দিয়ে DOM না পাওয়া
    2.  id ভুল লেখা
    3.  innerHTML দিয়ে user input বসানো
    4.  style দিয়ে পুরো design করা
    5.  classList না ব্যবহার করে style abuse

=>  Practice Tasks (Must Do)
    1.  Button click করলে text change
    2.  Dark mode toggle (classList)
    3.  Paragraph hide/show
    4.  innerText vs innerHTML test
    5.  style দিয়ে hover effect simulate করো
*/