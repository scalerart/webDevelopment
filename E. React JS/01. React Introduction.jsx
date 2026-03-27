/*
=>  React Introduction
    1.  React কী
    2.  React কেন ব্যবহার করা হয়
    3.  React vs Vanilla JavaScript
    4.  React vs Angular vs Vue
    5.  SPA (Single Page Application)
    6.  Virtual DOM
    7.  Real DOM vs Virtual DOM
    8.  React Architecture overview

1.  React কী
    React হলো একটি JavaScript Library যা ব্যবহার করা হয় User Interface (UI) তৈরি করার জন্য। এটি তৈরি করেছে Meta Platforms (আগে নাম ছিল Facebook)।

    সহজভাবে
        React দিয়ে আমরা ওয়েবসাইটের ফ্রন্টএন্ড UI তৈরি করি।

    যেমন:
        1.  Button
        2.  Navbar
        3.  Form
        4.  Dashboard
        5.  Todo App
        6.  Social Media UI

    ✔  React মূলত Component ভিত্তিক UI তৈরির লাইব্রেরি।
    ✔  Example Concept: ধরো একটি ওয়েবসাইটে আছে:
        1.  Navbar
        2.  Sidebar
        3.  Post
        4.  Comment

    ✔  React এ এগুলোকে আলাদা আলাদা Component বানানো হয়।
        <App>
        ├── Navbar
        ├── Sidebar
        ├── Post
        └── Comment

    ✔  এতে কোড হয় reusable এবং clean।

2.  React কেন ব্যবহার করা হয়
    React জনপ্রিয় হওয়ার কয়েকটি বড় কারণ আছে।

    1.  Component Based Architecture
        UI কে ছোট ছোট component এ ভাগ করা যায়।

        উদাহরণ:
            1.  Navbar
            2.  Footer
            3.  Card
            4.  Button
            5.  Form

    ✔  একবার তৈরি করলে বারবার ব্যবহার করা যায়।

    2.  Fast Rendering (Virtual DOM)
        React সরাসরি DOM পরিবর্তন করে না।
        এটি ব্যবহার করে: Virtual DOM

    ✔  ফলে ওয়েবসাইট দ্রুত কাজ করে।

    3.  Reusable Code
        একই component অনেক জায়গায় ব্যবহার করা যায়।

        ✔  Example:
            <ProductCard />
            <ProductCard />
            <ProductCard />

    4.  Huge Ecosystem
        React এর সাথে অনেক টুল আছে।

        যেমন:
            1.  Next.js
            2.  Redux
            3.  React Router

    5.  Huge Community
        React বর্তমানে পৃথিবীর সবচেয়ে জনপ্রিয় Frontend library গুলোর একটি।

3.  React vs Vanilla JavaScript
    বিষয়	            Vanilla JavaScript	        React
    DOM Update	        Direct DOM manipulation     Virtual DOM
    Code Structure	    অনেক সময় messy            Component based
    Large Project	    কঠিন হয়ে যায়                সহজ
    Reusability	        কম                         বেশি
    Performance	        মাঝারি	                     দ্রুত

    Vanilla JS Example
        document.getElementById("title").innerText = "Hello";

    React Example
        function App(){
            return <h1>Hello</h1>
        }

    ✔  React অনেক বেশি clean এবং scalable।

4.  React vs Angular vs Vue
    React এর সাথে আরও ২টা বড় frontend framework/library আছে।

    1.  Angular
        Google তৈরি করেছে
        Full framework
        বড় enterprise app এ বেশি ব্যবহৃত

    2.  Vue.js
        সহজ শেখা যায়
        ছোট project এ জনপ্রিয়
        syntax clean

    ✔  Comparison
    Feature	        React	    Angular	        Vue
    Type	        Library	    Framework	    Framework
    Learning	    Medium	    Hard	        Easy
    Company	        Meta	    Google	        Community
    Flexibility	    High	    Medium	        High

5.  SPA (Single Page Application)
    SPA = Single Page Application
    মানে পুরো ওয়েবসাইট একটাই HTML page এর উপর চলে।

    Traditional Website
        1.  Home → reload
        2.  About → reload
        3.  Contact → reload

    ✔  প্রতিবার page reload হয়।

    SPA
        1.  Home → no reload
        2.  About → no reload
        3.  Contact → no reload

    ✔  সবকিছু JavaScript দিয়ে dynamically change হয়।
    ✔  React মূলত SPA তৈরির জন্য ব্যবহার করা হয়।

6.  Virtual DOM
    Virtual DOM হলো Real DOM এর একটি lightweight copy।

    ✔  React যখন UI update করে তখন:
        1.  Virtual DOM তৈরি করে
        2.  আগের Virtual DOM এর সাথে compare করে
        3.  শুধু পরিবর্তন হওয়া অংশ update করে

    ✔  এটাকে বলে Diffing Algorithm।

7.  Real DOM vs Virtual DOM
    Feature	    Real DOM	        Virtual DOM
    Speed	    ধীর	                দ্রুত
    Update	    পুরো DOM update   	শুধু change update
    Memory	    বেশি লাগে	        কম লাগে
    Control	    Browser	            React

    ✔  React Process
        State Change
            ↓
        Virtual DOM Update
            ↓
        Compare (Diffing)
            ↓
        Real DOM Update

    ✔  এজন্য React fast।

8.  React Architecture Overview
    React অ্যাপের মূল structure এমন হয়।

        App
        ├── Components
        │    ├── Header
        │    ├── Sidebar
        │    ├── Card
        │    └── Footer
        │
        ├── State
        ├── Props
        ├── Hooks
        └── Routing

    ✔  React এর Main Building Blocks
        1.  Components
        2.  JSX
        3.  Props
        4.  State
        5.  Hooks
        6.  Virtual DOM
        7.  Routing

=>  Summary
    ✔  React হলো একটি UI Library যা:
        1.  Component দিয়ে UI বানায়
        2.  Virtual DOM ব্যবহার করে
        3.  SPA তৈরি করে
        4.  Code reusable করে
        5.  Fast performance দেয়
*/