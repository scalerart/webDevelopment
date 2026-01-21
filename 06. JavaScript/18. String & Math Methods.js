/*
String & Math Methods Checklist
    ✔ length
    ✔ slice
    ✔ replace / replaceAll
    ✔ toUpperCase / toLowerCase
    ✔ trim
    ✔ includes
    ✔ split / join
    ✔ Math.random
    ✔ Math.floor / ceil / round
    ✔ Math.max / min
    
1.  String Methods

    1.  String কী?
        =>  String মানে হলো টেক্সট ডেটা।
            let name = "Abdul Kadir";
            let city = 'Dhaka';
        =>  String সবসময় "" বা '' এর মধ্যে থাকে।

    2.  length (String length)
        =>  String-এর মোট character সংখ্যা দেয় (space সহ)
            let text = "Hello World";
            console.log(text.length); // 11
        =>  Space-ও count হয়
        =>  length হলো property, function না

    3.  slice() — String কেটে নেওয়া
        =>  String-এর একটা অংশ বের করে আনে Original string change হয় না
        =>  Syntax
            string.slice(start, end);
            
        =>  Example
            let text = "JavaScript";
            console.log(text.slice(0, 4)); // Java
        =>  start index include
        =>  end index exclude

        =>  Negative index
            let text = "JavaScript";
            console.log(text.slice(-6)); // Script
        =>  Negative মানে শেষ থেকে গণনা

    4.  replace() — Text পরিবর্তন
        =>  String-এর নির্দিষ্ট অংশ replace করে Original string change হয় না
            let msg = "I love JavaScript";
            let newMsg = msg.replace("JavaScript", "JS");
            console.log(newMsg); // I love JS

            1.  replace only first match
                "aaa".replace("a", "b"); // baa

            2.  replace all (modern way)
                "aaa".replaceAll("a", "b"); // bbb

            3.  replace using RegEx
                "apple apple".replace(/apple/g, "orange");

    5.  toUpperCase() / toLowerCase()
        =>  Text normalize করার জন্য খুব দরকার।
            let name = "AbDuL";
            name.toUpperCase(); // "ABDUL"
            name.toLowerCase(); // "abdul"

    6.  trim() / trimStart() / trimEnd()
        =>  User input থেকে extra space কাটার জন্য।
            let email = "  test@gmail.com  ";
            email.trim(); // "test@gmail.com"

    7.  includes()
        =>  String-এর ভেতরে কিছু আছে কিনা check।
            "JavaScript".includes("Script"); // true

    8.  startsWith() / endsWith()
        "hello@gmail.com".endsWith("@gmail.com"); // true

    9.  split()
        =>  String → Array বানায়।
            "apple,banana,mango".split(",");

    10. join()
        =>  Array → String বানায়।
            ["a","b","c"].join("-");

    11. repeat()
        "*".repeat(5); // "*****"

    12. charAt() / indexOf()
        "hello".charAt(1);   // e
        "hello".indexOf("l"); // 2        
        =>  Login, search, compare—সব জায়গায় লাগে।                

    =>  Common String Mistakes
        1.  length() লেখা → ভুল
        2.  slice এ end include ভাবা
        3.  replace original string change করে ভাবা
  
2.  Math Methods
    1.  Math কী?
        =>  JavaScript-এর built-in Math object, যেখানে সব math related function থাকে।

    2.  Math.random()
        0 থেকে 1 এর মধ্যে random decimal দেয়
        (0 include, 1 exclude)
        Math.random(); // 0.12345

        1.  Random integer (1–10)
            Math.floor(Math.random() * 10) + 1;

        2.  Random integer (min–max)
            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randomNumber(5, 20);

    3.  Math.floor()
        =>  Decimal নাম্বারকে নিচের দিকে round করে
            Math.floor(4.9); // 4
            Math.floor(4.1); // 4

    4.  Math.ceil()
        =>  উপরের দিকে round।
            Math.ceil(4.1); // 5

    5.  Math.round()
        =>  সবচেয়ে কাছের integer।
            Math.round(4.5); // 5

    6.  Math.abs()
        =>  Negative → positive।
            Math.abs(-10); // 10

    7.  Math.max() / Math.min()
        Math.max(10, 5, 20); // 20
        Math.min(10, 5, 20); // 5

    8.  Math.pow() / ** operator
        Math.pow(2, 3); // 8
        2 ** 3;         // 8

    9.  Math.sqrt()
        Math.sqrt(16); // 4

    =>  Common Math Mistakes
        1.  Math.random(10) লেখা
        2.  +1 ভুলে যাওয়া
        3.  floor না দিয়ে decimal রেখে দেওয়া
        4.  trim() না করে compare
        5.  case-sensitive issue ignore করা
        6.  random logic ভুল করা
        7.  index ভুল ধরে slice করা

=>  Practice Tasks (Must Do)
    1.  নিজের নামের length বের করো
    2.  Email থেকে username slice করো
    3.  replace দিয়ে bad word filter করো
    4.  Dice game (1–6 random) বানাও
    5.  Random password/OTP generator বানাও
*/