/*
Modules & Tooling Checklist
    ✔ ES Module
    ✔ Import / Export
    ✔ Browser module
    ✔ Node module
    ✔ NPM basics
    ✔ package.json

1.  Module কী? (Why Module?)
    =>  Module = code কে ছোট ছোট file–এ ভাগ করা
    =>  maintain, reuse, test সহজ
    =>  Problem (Without Module)

    =>  সব code এক ফাইলে
        1.  messy
        2.  conflict
        3.  hard to debug

2.  ES Module (ESM)
    =>  JavaScript–এর built-in module system
    =>  Key Rules
        1.  export দিয়ে বাইরে পাঠাও
        2.  import দিয়ে ব্যবহার করো
        3.  file scope থাকে (global pollute করে না)

3.  Export Types
    1.  Named Export
        export function add(a, b) {
            return a + b;
        }
        export const PI = 3.14;

        import { add, PI } from "./math.js";

    2.  Default Export
        // user.js
        export default function greet() {
            console.log("Hello");
        }
        import greet from "./user.js";

    3.  Mixed Export
        export default class User {}
        export const role = "admin";

4.  Import Variations (Must Know)
    import * as math from "./math.js";
    math.add(2, 3);
    import { add as sum } from "./math.js";

5.  Module in Browser
    <script type="module" src="main.js"></script>
    =>  type="module" না দিলে import কাজ করবে না

6.  Module in Node.js
    package.json
    {
        "type": "module"
    }
    =>  অথবা .mjs extension

7.  Common Module Errors
    1.  Cannot use import outside module
    2.  wrong path
    3.  missing .js extension
    4.  circular dependency

8.  NPM কী?
    1.  Node Package Manager
    2.  library, tool install করার জায়গা

9.  NPM Basic Commands
    1.  npm init -y
    2.  npm install lodash
    3.  npm uninstall lodash
    4.  npm install axios

    =>  package.json Explained
        {
            "name": "project",
            "version": "1.0.0",
            "scripts": {
                "start": "node index.js"
            }
        }

    =>  Dependencies Types
        1.  dependencies        production
        2.  devDependencies     development
    =>  npm install nodemon --save-dev

10. node_modules (Important)
    1.  সব installed package থাকে
    2.  Git–এ commit করা হয় না
    3.  recreate করা যায় npm install দিয়ে

11. Import NPM Package
    import axios from "axios";

12. Script Commands
    npm run start
    npm run dev

=>  Common Beginner Mistakes
    1.  node_modules delete panic
    2.  version conflict ignore
    3.  global vs local package confuse
    3.  import path ভুল

=>  Interview Questions
    ✔ ES Module vs CommonJS
    ✔ default vs named export
    ✔ package.json role
    ✔ dependencies vs devDependencies

=>  Practice Tasks (Must Do)
    1.  math module বানাও
    2.  default + named export use করো
    3.  npm দিয়ে axios install করো
    4.  script command add করো
    5.  browser + node module test
*/