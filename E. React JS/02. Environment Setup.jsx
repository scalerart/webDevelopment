/*
=>  Environment Setup

    Tools
        1.  Node.js
        2.  npm / npx
        3.  Vite
        4.  Create React App

    Topics
        1.  React Project create করা
        2.  Vite দিয়ে React Project তৈরি
        3.  Project Folder Structure
        4.  package.json
        5.  node_modules
        6.  development server
        7.  build process

=>  Tools
    1.  Node.js
        Node.js হলো একটি JavaScript runtime environment।

        React প্রজেক্ট চালাতে এটি প্রয়োজন কারণ:
            1.  npm ব্যবহার করতে লাগে
            2.  development server চালাতে লাগে
            3.  package install করতে লাগে

        ✔  Check installation: node -v

    2.  npm / npx
        npm এবং npx Node.js এর সাথে আসে।

        ✔  npm এর কাজ
            1.  package install করা
            2.  dependency manage করা

        Example:
            npm install

        ✔  npx এর কাজ
            package install না করেও run করা

        Example:
            npx create-react-app my-app

    3.  Vite
        Vite হলো modern frontend build tool।
        React project তৈরির জন্য বর্তমানে এটি সবচেয়ে fast এবং recommended।

        কারণ:
            1.  lightning fast server
            2.  instant reload
            3.  lightweight

    4.  Create React App
        এটি React এর পুরোনো project setup tool। আগে React project তৈরিতে বেশি ব্যবহার হতো। এখন সাধারণত Vite ব্যবহার করা হয়।

=>  Topics        
    1.  React Project Create করা
        React project তৈরি করার সহজ উপায় হলো Vite।

    2.  Vite দিয়ে React Project তৈরি

        1.  npm create vite@latest
        2.  Project name লিখো
            react-app
        3.  Framework select
            React
        4.  Variant select
            JavaScript
        5.  Project folder এ যাও
            cd react-app
        6.  Dependencies install
            npm install
        7.  Development server run
            npm run dev

        ✔  তারপর browser এ দেখাবে
            http://localhost:5173   
            
    3.  Project Folder Structure
        React project তৈরি করলে সাধারণত এই structure থাকে।

        react-app
        │
        ├── node_modules
        ├── public
        ├── src
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── assets
        │
        ├── package.json
        └── vite.config.js

        ✔  গুরুত্বপূর্ণ ফোল্ডার: src
        ✔  এখানে React এর সব code থাকে।
        ✔  public: static files থাকে।

    4.  package.json
        package.json হলো project এর configuration file।

        এখানে থাকে:
            1.  project info
            2.  dependencies
            3.  scripts

        Example
            {
            "name": "react-app",
            "version": "0.0.0",
            "scripts": {
            "dev": "vite",
            "build": "vite build"
            }
            }

    5.  node_modules
        node_modules হলো project এর সব install করা package এর folder।

        এখানে থাকে:
            1.  React
            2.  Vite
            3.  dependencies

        ✔  এই folder সাধারণত GitHub এ upload করা হয় না।

    6.  Development Server
        Development server হলো local server যেখানে আমরা project run করি।

        Run command:
            npm run dev

        এতে সুবিধা:
            1.  live reload
            2.  instant update
            3.  fast development

    7.  Build Process
        Development শেষে project production build করা হয়।

        Command:
            npm run build

        এতে:
            1.  code optimize হয়
            2.  file size ছোট হয়
            3.  production ready bundle তৈরি হয়
            4.  Build file সাধারণত dist folder এ থাকে।

=>  Summary
    ✔  React Environment Setup এর মূল বিষয়গুলো:
        1.  Node.js install
        2.  npm / npx ব্যবহার
        3.  Vite দিয়ে project তৈরি
        4.  Folder structure বোঝা
        5.  package.json বুঝা
        6.  development server চালানো
        7.  production build করা
*/