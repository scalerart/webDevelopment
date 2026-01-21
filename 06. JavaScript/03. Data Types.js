/*
JavaScript Primitive Data Types Checklist
    ✔ String
    ✔ Number
    ✔ Boolean
    ✔ Undefined
    ✔ Null
    ✔ typeof

1.  String
    =>  Text বা লেখা রাখার জন্য।
        let name = "ABDUL KADIR";
    =>  String Quotes:
        1.  Single ' '
        2.  Double " "
        3.  Backtick ` (পরে শিখবে)

2.  Number
    =>  সব ধরনের সংখ্যা।
        let age = 25;
        let price = 99.99;
        let total = -10;
    =>  Integer, Float—সব Number

3.  Boolean
    =>  শুধু দুইটা মান:
        1.  true
        2.  false
    let isLogin = true;
    let hasPermission = false;
    =>  Decision নেওয়ার জন্য খুব দরকার

4.  Undefined
    =>  Variable declare করা আছে, কিন্তু value নেই।
        let x;
        console.log(x); // undefined
    =>  ভুল না—JavaScript নিজে দেয়

5.  Null
    =>  ইচ্ছাকৃতভাবে খালি রাখা।
        let data = null;
    =>  Programmer নিজে বলে দেয়: “এখানে কিছু নেই”

6.  typeof Operator
    Data Type জানার জন্য ব্যবহার হয়।
        1.  console.log(typeof "Hello");    string
        2.  console.log(typeof 25);         number
        3.  console.log(typeof true);       boolean
        4.  console.log(typeof undefined);  undefined
        5.  console.log(typeof null);       object (JS bug)
*/

const name = "ABDUL KADIR";
console.log('name:', name);
console.log('name:', typeof(name));

let age = 24;
console.log('age:', age);
console.log('age:', typeof(age));

let isStudent = true;
console.log('isStudent:', isStudent);
console.log('isStudent:', typeof(isStudent));

let result;
console.log('result:', result);
console.log('result:', typeof(result));

const girlFriend = null;
console.log('girlFriend:', girlFriend);
console.log('girlFriend:', typeof(girlFriend));











