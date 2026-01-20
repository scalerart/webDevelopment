/*
এই ৩টা প্রজেক্ট করলে—
    1.  DOM
    2.  Event
    3.  Array / Object
    4.  Time / State
    5.  UI logic
    সব একসাথে solid হয়ে যাবে।

1.  Todo App (সবচেয়ে গুরুত্বপূর্ণ)
    =>  কী শিখবে
        1.  Array of objects
        2.  DOM manipulation
        3.  Event handling
        4.  Event delegation
        5.  State manage (add / delete / complete)

    =>  Features (Beginner → Pro)
        ✔ Todo add
        ✔ Todo delete
        ✔ Complete / uncomplete
        ✔ Empty input validation

    =>  Data Structure
        let todos = [
            { id: 1, text: "Learn JS", completed: false }
        ];

    =>  Core Logic
        form.addEventListener("submit", e => {
            e.preventDefault();

            if (input.value === "") return;

            todos.push({
                id: Date.now(),
                text: input.value,
                completed: false
            });

            input.value = "";
            renderTodos();
        });

    =>  Event Delegation
        list.addEventListener("click", e => {
            if (e.target.classList.contains("delete")) {
            // delete logic
            }
        });

    =>  Common Mistakes
        1.  Array update না করে DOM modify
        2.  delegation না ব্যবহার
        3.  id ছাড়া todo manage

2.  Digital Clock
    =>  কী শিখবে
        1.  Date object
        2.  Time format
        3.  setInterval
        4.  DOM update

    =>  Core Logic
        function updateClock() {
            let now = new Date();
            let h = now.getHours();
            let m = now.getMinutes();
            let s = now.getSeconds();

            clock.innerText = `${h}:${m}:${s}`;
        }
        setInterval(updateClock, 1000);

    =>  Improve It
        ✔ 12-hour format
        ✔ AM / PM
        ✔ Leading zero (09)

    =>  Common Mistakes
        1.  setInterval ভুল time
        2.  Date না বোঝা
        3.  page load এ function call না করা

3.  Modal Popup
    =>  কী শিখবে
        1.  classList
        2.  overlay
        3.  click event
        4.  UI state

    =>  HTML Structure
        <button id="open">Open</button>

        <div class="modal hidden">
            <div class="box">
                <button id="close">X</button>
                <p>Hello Modal</p>
            </div>
        </div>
    
    =>  Core Logic
        openBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

    =>  Extra Feature
        ✔ Outside click close
        ✔ ESC key close

    =>  Common Mistakes
        1.  inline style ব্যবহার
        2.  overlay না দেওয়া
        3.  accessibility ignore
*/