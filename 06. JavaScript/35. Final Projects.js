/*
Final Projects

Project 1: Portfolio Website (JS Heavy)
    =>  Goal
        1.  নিজের skill, project, identity showcase
        2.  Interactive + Dynamic portfolio

    Must-Have Features
    =>  UI / Interaction
        ✔ Dark / Light mode (localStorage)
        ✔ Smooth navigation
        ✔ Scroll animation
        ✔ Active menu highlight

    =>  JavaScript Features
        ✔ Dynamic project render
        ✔ Skill progress animation
        ✔ Form validation
        ✔ Theme save
        ✔ Lazy loading

    =>  Data Handling
        ✔ Projects data (JSON)
        ✔ Skills data (Array/Object)

    =>  Architecture (Folder Structure)
    portfolio/
    │
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── data.js
    │   ├── theme.js
    │   ├── ui.js
    │   ├── form.js
    │   └── main.js

    =>  Dynamic Project Render
        projects.forEach(p => {
            container.innerHTML += `
                <div class="card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                </div>
            `;
        });

Project 2: Full Dynamic Web App (Real App)
    =>  Goal
        1.  Real-world app behaviour
        2.  API + State + Modular JS

    =>  Project Idea (Choose One)
        ✔ Task Manager App
        ✔ Weather + Notes App
        ✔ Expense Tracker
        ✔ Auth-based Dashboard

    =>  Core Features
        ✔ API integration
        ✔ CRUD operation
        ✔ State management
        ✔ Loading & error UI
        ✔ Modular code
        ✔ Performance optimized

    =>  Architecture (Scalable)
        app/
        │
        ├── index.html
        ├── js/
        │   ├── api.js
        │   ├── state.js
        │   ├── ui.js
        │   ├── events.js
        │   └── main.js

    =>  Example: State Pattern
        let state = {
            tasks: []
        };

        function setState(newState) {
            state = { ...state, ...newState };
            render();
        }

=>  Common Final Project Mistakes
    1.  সব code main.js এ
    2.  no error handling
    3.  no loading state
    4.  unreadable code

=>  Interview Value (Huge)
    এই ২টা project থাকলে তুমি পারো বলতে:
    ✔ Modular JS
    ✔ API handling
    ✔ Async flow
    ✔ Optimization
    ✔ Clean code
*/