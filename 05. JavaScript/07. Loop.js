/*
JavaScript Loop Checklist
    ✔ for loop
    ✔ while loop
    ✔ do…while loop
    ✔ for loop with increment
    ✔ for loop with decrement
    ✔ loop with array
    ✔ nested loop
    ✔ infinite loop (concept)
    ✔ break statement
    ✔ continue statement
    ✔ break vs continue difference

=>  JavaScript Loop
    Loop ব্যবহার করা হয় যখন একই কাজ বারবার করতে হয়।
    উদাহরণ:
    1.  ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করা
    2.  array এর সব element দেখানো
    3.  ১০০ জন ইউজারের ডাটা প্রসেস করা

=>  Loop এর প্রকারভেদ
    JavaScript এ মূলত ৩ ধরনের loop বেশি ব্যবহার হয়:
        1.  for loop
        2.  while loop
        3.  do...while loop
    এছাড়া loop control করার জন্য:
        1.  break
        2.  continue

1.  for Loop
    =>  for loop হলো এমন একটা লুপ যা নির্দিষ্ট সংখ্যক বার চলার জন্য ব্যবহার করা হয়।
        যখন তুমি আগে থেকেই জানো লুপ কয়বার চলবে, তখন for loop ব্যবহার করাই সহজ।
    =>  Syntax:
        for (initialization; condition; increment/decrement) {
            code
        }
    =>  ১ থেকে ৫ প্রিন্ট
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }

    =>  এখানে
        1.  let i = 1   শুরু
        2.  i <= 5      যতক্ষণ true
        3.  i++         প্রতি বার ১ বাড়ে

    1.  Reverse Loop
        for (let i = 5; i >= 1; i--) {
            console.log(i);
        }

    2.  Even Number
        for (let i = 2; i <= 10; i += 2) {
            console.log(i);
        }

    3.  Array Loop
        let fruits = ["Apple", "Banana", "Mango"];
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

2.  while Loop
    =>  while loop হলো এমন একটা লুপ যা শর্ত (condition) true থাকা পর্যন্ত বারবার চলতে থাকে।
    মানে:
        1.  প্রথমে একটা শর্ত দেওয়া হয়।
        2.  যদি শর্ত সত্যি হয়, তাহলে লুপের ভিতরের কাজ (code block) চালু হবে।
        3.  আবার শর্ত পরীক্ষা করবে।
        4.  শর্ত false হয়ে গেলে লুপ বন্ধ হয়ে যাবে।
    =>  যখন আগে condition চেক করে তারপর code চালাতে চাই
    =>  Syntax
        while (condition) {
            code
        }
    =>  Example
        let i = 1;
        while (i <= 5) {
            console.log(i);
            i++;
        }
    =>  increment না দিলে → Infinite Loop
    
3.  do...while Loop
    =>  কমপক্ষে একবার code চলবেই, তারপর condition চেক হবে
    =>  Syntax
        do {
            code
        } while (condition);
    =>  Example
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 5);

4.  break (Loop থামানো)
    =>  Loop মাঝখানেই বন্ধ করতে চাইলে
    =>  Example
        for (let i = 1; i <= 10; i++) {
            if (i === 5) {
            break;
        }
            console.log(i);
        }

5.  continue (একটা step skip)
    =>  একটা iteration বাদ দিয়ে পরেরটায় যেতে
    =>  Example
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
            continue;
        }
            console.log(i);
        }

Task:
1.  ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।
2.  ১ থেকে ১০ পর্যন্ত সব জোড় সংখ্যা প্রিন্ট করো।
3.  ১ থেকে ১০ পর্যন্ত সব বেজোড় সংখ্যা প্রিন্ট করো।
4.  ১০ থেকে ১ পর্যন্ত সংখ্যা উল্টো প্রিন্ট করো।
5.  একটা টেক্সট ৫ বার প্রিন্ট করো।
6.  ১ থেকে ৫ পর্যন্ত যোগফল বের করো।
7.  ১ থেকে ৫ পর্যন্ত গুণফল বের করো।
8.  ১ থেকে ২০ এর মধ্যে যেসব সংখ্যা ৩ দিয়ে বিভাজ্য।
9.  Array এর সব element প্রিন্ট করো।
    let fruits = ["Mango", "Banana", "Apple"];
10. একটা নাম উল্টো করে প্রিন্ট করো।
    let name = "ABDUL KADIR";
11. ১ থেকে ১০ পর্যন্ত সংখ্যার বর্গ (square)।
12. ১ থেকে ১০০ পর্যন্ত যোগফল।
13. Array এর সব সংখ্যার যোগফল।
    let numbers = [10, 20, 30, 40, 50];
14. Array থেকে সবচেয়ে বড় সংখ্যা বের করো।
    let nums = [12, 56, 89, 34];
15. গুণের নামতা (৫ এর নামতা)।
*/