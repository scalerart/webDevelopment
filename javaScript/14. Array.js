/*
JavaScript Array Master Checklist
    ✔ push / pop
    ✔ shift / unshift
    ✔ map / filter / reduce
    ✔ forEach
    ✔ slice / splice
    ✔ sort / reverse
    ✔ find / includes
    ✔ some / every    

=>  Array কী? (Array Basic)
    =>  Array হলো এমন একটি ডেটা স্ট্রাকচার যেখানে একসাথে অনেকগুলো ডেটা রাখা যায়।
        let fruits = ["apple", "banana", "mango"];

    =>  কেন Array দরকার?
        1.  আলাদা আলাদা variable না বানিয়ে
            এক জায়গায় অনেক ডেটা রাখা
        2.  Loop, function দিয়ে সহজে কাজ করা যায়

    =>  let fruits = ["apple", "banana", "mango"];

=>  BASIC ARRAY METHODS    
    1.  push() – শেষে যোগ
        fruits.push("orange");

    2.  pop() – শেষ থেকে বাদ
        fruits.pop();

    3.  unshift() – শুরুতে যোগ
        fruits.unshift("grape");

    4.  shift() – শুরু থেকে বাদ
            fruits.shift();
        =>  shift / unshift slow (index change হয়)
    
    5.  length
        fruits.length;

=>  SEARCH & CHECK METHODS
    1.  includes()
        fruits.includes("apple"); // true

    2.  indexOf()
        fruits.indexOf("banana"); // 1

    3.  find()
        let numbers = [5, 10, 15];
        numbers.find(n => n > 8); // 10

    4.  findIndex()
        numbers.findIndex(n => n > 8); // 1

=>  ITERATION METHODS  
    1.  forEach()
        =>  শুধু loop, return করে না
            fruits.forEach(fruit => {
                console.log(fruit);
            });

    2.  map()
        =>  নতুন array বানায়
            let prices = [100, 200, 300];
            let newPrices = prices.map(p => p + 50);
        =>  React / UI-তে সবচেয়ে বেশি লাগে

    3.  filter()
        =>  condition অনুযায়ী filter
            let nums = [10, 15, 20];
            let result = nums.filter(n => n > 15);

    4.  reduce()
        =>  সব value → একটায় convert
            let nums = [1,2,3,4];
            let sum = nums.reduce((acc, cur) => {
                return acc + cur;
                }, 0);
            console.log(sum); // 10

        =>  reduce parameters
            1.  acc → accumulator
            2.  cur → current value
            3.  0 → initial value

=>  MODIFY ARRAY
    1.  slice()
        fruits.slice(1, 3);
        =>  original change করে না

    2.  splice()
        fruits.splice(1, 1, "kiwi");
        =>  original array change করে add/remove দুটোই

    3.  concat()
        let a = [1, 2];
        let b = [3, 4];
        a.concat(b);

    4.  join()
        fruits.join(", ");

=>  SORT & REVERSE
    1.  sort()
        let nums = [10, 2, 5];
        nums.sort((a, b) => a - b);
        =>  string হিসাবে sort করে default-এ

    2.  reverse()
        fruits.reverse();

=>  CHECK CONDITION
    1.  some()
        nums.some(n => n > 10);

    2.  every()
        nums.every(n => n > 5);

=>  ADVANCED / INTERVIEW LEVEL
    1.  flat()
        [1, [2, [3]]].flat(2);

    2.  flatMap()
        ["hi", "bye"].flatMap(w => w.split(""));

=>  Common Mistakes
    1.  map দিয়ে filter করা
    2.  reduce ভয় পাওয়া
    3.  sort comparator না দেওয়া
    4.  splice / slice confuse করা
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  forEach
const result = numbers.forEach((number) => {
    if (numbers.length === 9) {
        console.log(number, "You are win");
    } else {
        console.log(number, "You are not win");
    }
})

//  map()
const total = numbers.map((number) => {
    return number + 1;
})
console.log(total);


const heroes = [
    {
        id: 1, name: "Shakib Khan", age: 44, profession: "Film Actor", country: "Bangladesh", married: true, movies: 250,
        popularMovies: ["Priyotoma", "Rajkumar", "Password"],
        awards: { national: 4, international: 2 },
        active: true
    },
    {
        id: 2, name: "Dev", age: 41, profession: "Actor & Politician", country: "India", married: false, movies: 120,
        popularMovies: ["Challenge", "Paglu", "Khoka 420"],
        awards: { national: 1, international: 1 },
        active: true
    },
    {
        id: 3, name: "Salman Khan", age: 59, profession: "Film Actor", country: "India", married: false, movies: 140,
        popularMovies: ["Dabangg", "Sultan", "Bajrangi Bhaijaan"],
        awards: { national: 0, international: 5 },
        active: true
    },
    {
        id: 4, name: "Shah Rukh Khan", age: 60, profession: "Film Actor", country: "India", married: true, movies: 100,
        popularMovies: ["DDLJ", "Pathaan", "Jawan"],
        awards: { national: 8, international: 12 },
        active: true
    },
    {
        id: 5, name: "Hrithik Roshan", age: 51, profession: "Film Actor", country: "India", married: false, movies: 60,
        popularMovies: ["Krrish", "War", "Dhoom 2"],
        awards: { national: 6, international: 4 },
        active: true
    }
];

//  filter()
const singleHero = heroes.filter((hero) => {
    return hero.age > 50
})
console.log(singleHero);

//  reduce()
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reduce = nums.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log(reduce);

//  slice() 
const slice = nums.slice(0, 5);
console.log(slice);

//  splice()
const splice = nums.splice(0, 9, 11, 12, 13, 14, 15);
console.log(splice);
console.log(nums);