/*
More Events
    ✔ Event Flow (3 phases)
    ✔ target vs currentTarget
    ✔ Delegation
    ✔ CustomEvent with detail
    ✔ Passive Listener
    ✔ Pointer Events
    ✔ Drag & Drop
    ✔ Debounce / Throttle
    ✔ Memory Leak awareness
    ✔ addEventListener options object

1.  Event Phases
    Event Flow হয় ৩ ধাপে:
        1. Capturing Phase
        2. Target Phase
        3. Bubbling Phase

    ✔  এটা শুধু capturing true দিলে শেষ না
    ✔  ইন্টারভিউতে জিজ্ঞেস করে: "Event Flow explain করো"

    Visual বুঝো:
        HTML
        └── Body
            └── Parent
                └── Child (click here)


    ✔  Flow হবে:
        Capturing → Parent → Child
        Target → Child
        Bubbling → Parent → Body

    ✔  এটা React, Vue বুঝতে খুব কাজে লাগে।

2.  event.currentTarget vs event.target (VERY IMPORTANT)
    এটা অনেকেই জানে না।

    parent.addEventListener("click", function (e) {
        console.log(e.target);
        console.log(e.currentTarget);
    });


    ✔  event.target → যেটাতে আসলে click হয়েছে
    ✔  event.currentTarget → যেটাতে listener বসানো হয়েছে
    ✔  Event Delegation বুঝতে এটা mandatory।

3.  Passive Event Listener (Performance Topic)
    window.addEventListener("scroll", handleScroll, { passive: true });

    ✔  scroll performance improve করে
    ✔  mobile performance interview topic
    ✔  preventDefault এখানে কাজ করবে না

4.  Capture Option Proper Syntax
    Modern syntax:

    element.addEventListener("click", handler, {
        capture: true,
        once: true,
        passive: true
    });

    ✔  Modern JS knowledge marker

5.  Pointer Events (Modern Replacement)
    Mouse + Touch unify করে:
        1. pointerdown
        2. pointerup
        2. pointermove
    ✔  Mobile + Desktop unified event handling

6.  Drag & Drop Events (Practical UI Skill)
        1. dragstart
        2. dragover
        3. drop
    ✔  Todo app বা Kanban board এ লাগে।

7.  DOMContentLoaded vs load (Important Difference)
    document.addEventListener("DOMContentLoaded", () => {});

    ✔  DOMContentLoaded → HTML ready
    ✔  load → images + css সহ সব ready
    ✔  Performance mindset এখানে বোঝা যায়।

8.  CustomEvent (Better Version of Custom Event)
    Advanced version:
        const myEvent = new CustomEvent("hello", {
            detail: { name: "Kadir" }
        });

        element.dispatchEvent(myEvent);

        element.addEventListener("hello", (e) => {
            console.log(e.detail.name);
        });
    ✔  data pass করা যায়
    ✔  বড় application architecture skill

9.  Debounce & Throttle (Event Optimization)
    ✔  এটা সরাসরি event না
    ✔  কিন্তু event handling mastery এর অংশ।

        Search box, scroll event performance এর জন্য লাগে।

10. Event Listener Memory Leak Concept
    Single Page App এ গুরুত্বপূর্ণ।

    ✔  element remove করেও listener remove না করলে memory leak হয়।

=>  Interview Favourite Hidden Topics
    1.  Why event delegation improves performance?
    2.  Why arrow function changes this?
    3.  Why removeEventListener needs same function reference?
    4.  Difference between stopPropagation & stopImmediatePropagation?
    5.  What happens if multiple listeners on same element?
*/