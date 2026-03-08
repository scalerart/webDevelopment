/*
JavaScript String Methods
সবচেয়ে গুরুত্বপূর্ণ ১০টা string methods
    1. length
    2. includes
    3. indexOf
    4. slice
    5. replace
    6. replaceAll
    7. split
    8. trim
    9. toUpperCase
    10. toLowerCase

আমরা ৫ ভাগে শিখবো:
    1.  Length & Access
    2.  Search Methods
    3.  Extract Methods
    4.  Modify Methods
    5.  Advanced / Useful Methods    

1.  Length & Access
    1.  length
        ✔  string কত লম্বা
            text.length

    2.  charAt()
        ✔  নির্দিষ্ট index এর character
            text.charAt(2)

    3.  at()
        ✔  index দিয়ে value নেয় (negative support করে)
            text.at(-1)

    4.  bracket notation
        text[0]

2.  Search Methods
    5.  includes()
        ✔  word আছে কিনা
            text.includes("JavaScript")

    6.  indexOf()
        ✔  প্রথম কোথায় আছে
            text.indexOf("JavaScript")

    7.  lastIndexOf()
        ✔  শেষ কোথায় আছে

    8.  startsWith()
        text.trim().startsWith("Hello")

    9.  endsWith()

    10. search() (regex support)
        text.search(/World/)

3.  Extract Methods
    11. slice()
        ✔  অংশ কেটে নেয়
            text.slice(2, 7)

    12. substring()
        ✔  slice এর মতো (negative support করে না)

    13. substr() (old)
        ✔  এখন কম ব্যবহার হয়

4.  Modify Methods
    14. toUpperCase()
    15. toLowerCase()
    16. trim()
        ✔  দুই পাশের space remove

    17. trimStart()
    18. trimEnd()
    19. replace()
        ✔  প্রথম match বদলায়
            text.replace("JavaScript", "JS")

    20. replaceAll()
        ✔  সব match বদলায়

    21. repeat()
        "Hi ".repeat(3)

5.  Split & Convert Methods
    22. split()
        ✔  string → array
            text.split(" ")

    23. concat()
        "Hello".concat(" World")

    24. padStart()
    25. padEnd()
    26. valueOf()
        ✔  primitive value দেয়
*/

//  Practice Task:
const text = "  Hello JavaScript World! Welcome to Bangladesh. JavaScript is powerful.  ";

// 1. সব space remove করো (trim)
const spaceRemove = text.trim();
console.log(spaceRemove);

// 2. সব JavaScript কে JS করো
const replace = text.replaceAll("JavaScript", "JS");
console.log(replace.trim());

// 3. সব word আলাদা array বানাও
const words = text.trim().split("");
console.log(words);

// 4. text uppercase বানাও
const textUppercase = text.toUpperCase();
console.log(textUppercase.trim());

// 5. Bangladesh শব্দ আছে কিনা চেক করো
const hasBangladesh = text.includes('Bangladesh');
console.log(hasBangladesh);

// 6. প্রথম 10 character বের করো
const firstTen = text.trim().slice(0, 10);
console.log(firstTen);

// 7. শেষ character বের করো
const lastCharcter = text.trim().at(-1);
console.log(lastCharcter);

// 8. JavaScript কয়বার আছে বের করো
const count = text.split("JavaScript").length - 1;
console.log(count);