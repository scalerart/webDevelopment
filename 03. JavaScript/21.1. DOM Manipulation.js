/*
JavaScript DOM
    ✔ DOM vs BOM
    ✔ Node types
    ✔ append / prepend / appendChild
    ✔ replaceWith / replaceChild
    ✔ cloneNode
    ✔ contains
    ✔ getBoundingClientRect
    ✔ Event Bubbling / Capturing
    ✔ stopPropagation
    ✔ Performance concept

1.  DOM vs BOM (অনেকে গুলিয়ে ফেলে)
    1.  DOM (Document Object Model)
        ✔  ওয়েব পেজের ভেতরের HTML element নিয়ে কাজ করা
        ✔  মানে: button, div, input, text, image

    2.  BOM (Browser Object Model)
        ✔  পুরো ব্রাউজার নিয়ে কাজ করা
        ✔  মানে: URL, back button, alert, reload, screen size
        ✔  Browser নিয়ে কাজ
            window
            location
            history
            navigator
            alert()
            setTimeout()
    =>  Interview-এ জিজ্ঞেস করে:
        ✔  DOM আর BOM পার্থক্য কী?
            ✔ DOM = HTML document manipulation
            ✔ BOM = Browser manipulation
            ✔ DOM হলো window এর অংশ
  
2.  DOM Node Types (Deep Concept)
    ✔  Browser যখন HTML পড়ে, তখন সবকিছুকে “Node” বানায়।
    ✔  Node Types
        1 → Element Node
        3 → Text Node
        8 → Comment Node
        9 → Document Node
    ✔  এগুলোই ৯০% ক্ষেত্রে লাগে।

    1.  Element Node (nodeType = 1)
        সব HTML tag হলো element node।

    2.  Text Node (nodeType = 3)
        Tag-এর ভিতরের লেখা হলো text node।

    3.  Comment Node (nodeType = 8)
        <!-- This is comment -->

    4.  Document Node (nodeType = 9)
        পুরো document নিজেই একটা node।

    ✔  childNodes vs children
        এখানে অনেকেই ভুল করে
        1.  childNodes
            ✔  সব node দেয় element + text + comment

            let box = document.getElementById("box");
            console.log(box.childNodes);

        2.  children
            ✔  শুধু element node দেয়
                console.log(box.children);

    =>  Interview-এ জিজ্ঞেস করে:                
        ✔  childNodes আর children পার্থক্য কী?
            ✔ childNodes → সব node
            ✔ children → শুধু element                

3.  append vs appendChild vs prepend
    1.  append()
        ✔  Parent element-এর শেষে যোগ করে
        ✔  একাধিক node বা string নিতে পারে
        ✔  Modern ও flexible

        ✔  উদাহরণ
            <div id="box"></div>
            let box = document.getElementById("box");
            let p = document.createElement("p");
            p.innerText = "Hello";
            box.append(p, " World");

        ✔  Output:
            <div id="box">
                <p>Hello</p> World
            </div>

        ✔  এখানে:
            p element যোগ হয়েছে
            " World" text-ও যোগ হয়েছে
        
    2.  prepend()
        ✔  Parent element-এর শুরুর দিকে যোগ করে
        ✔  একাধিক element বা string নিতে পারে
        ✔  Modern method

        ✔  উদাহরণ
            box.prepend("Start - ", p);

        ✔  Output:
            <div id="box">
                Start - <p>Hello</p>
            </div>

        ✔  prepend সবসময় উপরে বসায়।
      
    3.  appendChild()
        ✔  Parent element-এর শেষে যোগ করে
        ✔  শুধু একটাই node নেয়
        ✔  string নেয় না
        ✔  পুরোনো কিন্তু এখনো ব্যবহৃত

        ✔  উদাহরণ
            box.appendChild(p);

            box.appendChild("Hello"); 
            // Error: string node না
        ✔  এটা কাজ করবে না:
        ✔  কারণ appendChild শুধু Node নেয়।

4.  replaceWith / replaceChild
    1.  replaceWith()
        ✔  যে element replace হবে সে নিজেই method call করে
        ✔  Modern method
        ✔  একাধিক node বা string নিতে পারে

        ✔  উদাহরণ
            <p id="old">Old Text</p>

            let old = document.getElementById("old");

            let newEl = document.createElement("h1");
            newEl.innerText = "New Text";
            old.replaceWith(newEl);

        ✔  Result:
            <h1>New Text</h1>

    2.  replaceChild()
        ✔  Parent element দিয়ে call করতে হয়
        ✔  পুরোনো DOM method
        ✔  দুইটা parameter নেয়
            1.  newNode
            2.  oldNode

        ✔  উদাহরণ
            <div id="box">
                <p id="old">Old Text</p>
            </div>

            let box = document.getElementById("box");
            let old = document.getElementById("old");

            let newEl = document.createElement("h1");
            newEl.innerText = "New Text";
            box.replaceChild(newEl, old);

        ✔  Result:
            <div id="box">
                <h1>New Text</h1>
            </div>

    =>  replaceWith আর replaceChild পার্থক্য কী?
        ✔  replaceWith self method
        ✔  replaceChild parent method
        ✔  replaceWith string নেয়
        ✔  replaceChild নেয় না
        ✔  replaceWith multiple নেয়

5.  removeChild()
    ✔  parent element তার নির্দিষ্ট child-কে remove করে।
        parent.removeChild(child);

    ✔  remove()
        ✔  যে element remove হবে সে নিজেই method call করে
        ✔  Modern method
        ✔  Parent দরকার হয় না

        ✔  উদাহরণ
            item1.remove();
    ✔ Cleaner
    ✔ Modern
    ✔ সহজ

6.  contains()
    ✔  Check করে element ভেতরে আছে কিনা।
        parent.contains(child);

7.  cloneNode() (Very Important)
    ✔  Element copy করতে লাগে।
        let clone = element.cloneNode(true);
        true দিলে deep clone হয়।

8.  getBoundingClientRect()
    ✔  Position & size বের করতে লাগে।
        element.getBoundingClientRect();
    ✔  Tooltip / Animation / Scroll logic-এ লাগে।

9.  className vs classList পার্থক্য
    ✔  difference জানাও দরকার:
        element.className = "newClass"; // overwrite
        element.classList.add("newClass"); // safe

10. Event Bubbling & Capturing (Very Important)
    1.  Event Bubbling (সবচেয়ে বেশি ব্যবহৃত)
        ✔  Event নিচ থেকে উপরে ওঠে
        ✔  Child → Parent → Grandparent → Document

        ✔  Example
            document.getElementById("grandparent").addEventListener("click", () => {
                console.log("Grandparent Clicked");
            });
            document.getElementById("parent").addEventListener("click", () => {
                console.log("Parent Clicked");
            });
            document.getElementById("child").addEventListener("click", () => {
                console.log("Child Clicked");
            });


        ✔  যদি button-এ click করো —
            Output হবে:
            ✔  Child Clicked
            ✔  Parent Clicked
            ✔  Grandparent Clicked

        ✔  কারণ event bubble করে উপরে উঠছে

        ✔  কেন Bubbling দরকার?
            1.  Event Delegation করার জন্য
            2.  Parent দিয়ে অনেক child control করার জন্য
        Example:
            list.addEventListener("click", function(e) {
                if (e.target.tagName === "LI") {
                    console.log("List Item Clicked");
                }
            });
        ✔  এটা Bubbling ছাড়া সম্ভব না

        ✔  Bubbling বন্ধ করতে চাইলে?
            event.stopPropagation();

        Example:
            child.addEventListener("click", function(e) {
                e.stopPropagation();
                console.log("Child Only");
            });
            
        ✔  এবার parent আর grandparent run করবে না।

11. stopPropagation() / stopImmediatePropagation()
    e.stopPropagation();

    ✔  Event bubble বন্ধ করে।

12. preventDefault() বিস্তারিত
    Form submit
    Link click
    Checkbox default behaviour

13. Dataset Deep Use
        <button data-user-id="101"></button>
    ✔  Access:
        button.dataset.userId
        
    ✔  camelCase rule বুঝতে হবে।

14. Performance Concept
    ✔  বারবার DOM query খারাপ
        document.querySelector(".box")

    ✔  Loop এর ভিতরে repeatedly না করা।

15. Reflow & Repaint (Advanced)
    ✔  Style change করলে browser layout আবার calculate করে।
    ✔  Performance discussion-এর জন্য দরকার।

=>  Advanced Modern DOM (Optional But Powerful)
    1.  MutationObserver
        ✔  DOM change detect করা।

    2.  IntersectionObserver
        ✔  Scroll করলে element viewport-এ এলো কিনা detect।

    3.  ResizeObserver
        ✔  Element resize detect।
*/