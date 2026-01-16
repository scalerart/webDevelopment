/*
JavaScript Array Master Checklist
    ✔ Array basic
    ✔ push / pop
    ✔ shift / unshift
    ✔ map
    ✔ filter
    ✔ reduce
    ✔ chaining

1.  Array কী? (Array Basic)
    =>  Array হলো এমন একটি ডেটা স্ট্রাকচার যেখানে একসাথে অনেকগুলো ডেটা রাখা যায়।
    =>  let fruits = ["Apple", "Banana", "Mango"];

    =>  কেন Array দরকার?
        1.  আলাদা আলাদা variable না বানিয়ে
            এক জায়গায় অনেক ডেটা রাখা
        2.  Loop, function দিয়ে সহজে কাজ করা যায়

2.  Array Index
    =>  Array-এর প্রতিটি element-এর একটা index number থাকে
    =>  Index সবসময় 0 থেকে শুরু
        let fruits = ["Apple", "Banana", "Mango"];
        fruits[0]; Apple
        fruits[1]; Banana
        fruits[2]; Mango
    =>  Update element
        fruits[1] = "Orange";

3.  Array Length
    fruits.length; // total elements

4.  push() — শেষে যোগ করা
    =>  Array-এর শেষে element যোগ করে।
        let numbers = [1, 2, 3];
        numbers.push(4);
        console.log(numbers); // [1,2,3,4]
    =>  Original array change হয়

5.  pop() — শেষ থেকে remove
    =>  Array-এর শেষের element remove করে।
        let numbers = [1, 2, 3];
        numbers.pop();
        console.log(numbers); // [1,2,3]
    =>  Removed element return করে

6.  unshift() — শুরুতে যোগ করা
    =>  Array-এর শুরুতে element যোগ করে।
        let numbers = [1, 2, 3];
        numbers.unshift(0);
        console.log(numbers); // [0,1,2,3]

7.  shift() — শুরু থেকে remove
    =>  Array-এর শুরুর element remove করে।
        let numbers = [1, 2, 3];
        numbers.shift();
        console.log(numbers); // [1,2,3]

=>  push/pop vs shift/unshift
    1.  push/pop → fast
    2.  shift/unshift → একটু slow (index shift হয়)

8.  map() — পরিবর্তন করে নতুন Array বানায়
    =>  map ব্যবহার হয় যখন প্রতিটা element নিয়ে কিছু পরিবর্তন করতে চাই
        let nums = [1, 2, 3, 4];
        let squared = nums.map(n => n * n);
        console.log(squared); // [1,4,9,16]
    =>  Original array change হয় না
    =>  Same length-এর নতুন array দেয়

9.  map() with index
        let nums = [1, 2, 3, 4];
        nums.map((value, index) => {
        return index + ": " + value;
        });

10. filter() — বাছাই করে নতুন Array বানায়
    =>  filter ব্যবহার হয় যখন
    =>  কিছু element রাখবো, কিছু বাদ দেবো
        let ages = [12, 18, 25, 15, 30];
        let adults = ages.filter(age => age >= 18);
        console.log(adults); // [18,25,30]
    =>  Condition true হলে রাখে
    =>  Length ছোট বা সমান হতে পারে
    =>  Example
        let users = [
            { name: "A", active: true },
            { name: "B", active: false }
        ];
        let activeUsers = users.filter(u => u.active);

11. reduce() — সব মিলিয়ে একটায় নামায়
    =>  reduce সবচেয়ে powerful।
        let nums = [1,2,3,4];
        let sum = nums.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
        console.log(sum); // 10

    =>  reduce parameters
        1.  acc → accumulator
        2.  cur → current value
        3.  0 → initial value

    =>  reduce() দিয়ে আরও কাজ
        1.  Max value
            let max = nums.reduce((a, b) => a > b ? a : b);

        2.  Average
            let avg = nums.reduce((a, b) => a + b, 0) / nums.length;

        3.  Count
            let count = nums.reduce(acc => acc + 1, 0);

=>  map vs filter vs reduce (Most Important)
    1.  map     প্রতিটা element পরিবর্তন
    2.  filter  কিছু element বাছাই
    3.  reduce  সব মিলিয়ে একটায়

=>  Practice Tasks (Must Do)
    1.  map দিয়ে salary +10% করো
    2.  filter দিয়ে failed student বাদ দাও
    3.  reduce দিয়ে total bill হিসাব করো
    4.  map + filter + reduce chain করে দেখো
        let nums = [1,2,3,4];
        .filter(n => n > 2)
        .map(n => n * 2)
        .reduce((a, b) => a + b, 0);
*/
const numbers = [1, 2, 3, 4, 5];

//  Array Index
console.log(numbers.indexOf(5));

//  Array Length
console.log(numbers.length);

//  Array push()
numbers.push(6);
console.log(numbers);

//  Array pop()
numbers.pop();
console.log(numbers);

//  Array unshift()
numbers.unshift(0);
console.log(numbers);

//  Array shift()
numbers.shift();
console.log(numbers);

//  Array sort()
const number = [5, 8, 6, 1, 9, 3, 2, 4, 7];
number.sort();
console.log(number);
