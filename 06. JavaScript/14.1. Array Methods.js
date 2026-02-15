/*
JavaScript Array Methods – Complete Guide

সবচেয়ে গুরুত্বপূর্ণ ৮টা Array Methods
    1.  map
    2.  filter
    3.  reduce
    4.  find
    5.  some
    6.  every
    7.  sort
    8.  splice

আমরা ৪ ভাগে শিখবো:
    1.  Looping Methods                 : forEach(), map(), filter(), reduce(), 
    2.  Search & Check Methods          : find(), findIndex(), some(), every(), includes(), 
    3.  Modify Methods                  : push(), pop(), shift(), unshift(), splice(), slice(), 
    4.  Transform & Advanced Methods    : concat(), join(), reverse(), sort(), flat(), flatMap(),

1.  Looping Methods (সবচেয়ে বেশি ব্যবহার হয়)
    1.  forEach()
        ✔  শুধু লুপ করবে, কিছু return করবে না।

            let numbers = [1, 2, 3];
            numbers.forEach((num) => {
                console.log(num);
            });

        ✔ ব্যবহার: যখন শুধু কাজ করতে হবে (console, DOM update ইত্যাদি)

    2.  map()
        ✔  নতুন array return করে।

            let numbers = [1, 2, 3];
            let doubled = numbers.map(num => num * 2);
            console.log(doubled); // [2,4,6]

        ✔ ব্যবহার: data transform করার জন্য
        ✔ React-এ খুব বেশি ব্যবহার হয়

    3.  filter()
        ✔  শর্ত অনুযায়ী নতুন array দেয়।

            let numbers = [10, 20, 30, 40];
            let big = numbers.filter(num => num > 20);
            console.log(big); // [30,40]

        ✔ ব্যবহার: active user, expensive product ইত্যাদি

    4.  reduce() (সবচেয়ে শক্তিশালী)
        ✔  সব value একটায় পরিণত করে।

            let numbers = [1, 2, 3, 4];
            let sum = numbers.reduce((acc, num) => acc + num, 0);
            console.log(sum); // 10

        ✔ sum
        ✔ total salary
        ✔ object বানানো
        ✔ group করা

2.  Search & Check Methods
    5.  find()
        ✔  প্রথম matching value দেয়।

            let numbers = [5, 10, 15];
            let result = numbers.find(num => num > 8);
            console.log(result); // 10

    6.  findIndex()
        ✔  matching index দেয়।
            numbers.findIndex(num => num > 8);

    7.  some()
        ✔  অন্তত একটি মিললে true
            numbers.some(num => num > 10); // true

    8.  every()
        ✔  সব মিললে true
            numbers.every(num => num > 0); // true

    9.  includes()
        ✔  value আছে কিনা চেক করে
            numbers.includes(10); // true

3.  Modify Methods (Array পরিবর্তন করে)
    10. push()
        ✔  শেষে যোগ করে
            numbers.push(50);

    11. pop()
        ✔  শেষ থেকে remove

    12. shift()
        ✔  শুরু থেকে remove

    13. unshift()
        ✔  শুরুতে যোগ

    14. splice() (Dangerous)
        ✔  remove বা insert দুটোই পারে
            numbers.splice(1, 1); // index 1 থেকে 1টা remove

    15. slice()
        ✔  copy করে, original বদলায় না
            let newArr = numbers.slice(1,3);

4.  Transform & Advanced Methods
    16. concat()
        ✔  দুই array যুক্ত করে

            let a = [1,2];
            let b = [3,4];
            let all = a.concat(b);

    17. join()
        ✔  array → string
            ["A","B"].join("-"); // "A-B"

    18. reverse()
        ✔  উল্টায় (original বদলায়)

    19. sort() (Important)
            numbers.sort((a,b) => a - b);
        ✔  সংখ্যা sort করতে compare function লাগবে।

    20. flat()
        ✔  nested array সমান করে
            [1, [2,3]].flat(); // [1,2,3]

    21. flatMap()
        ✔  map + flat একসাথে


=>  Bonus Methods (Modern JS)
    ✔ at()
    ✔ toSorted()
    ✔ toReversed()
    ✔ toSpliced()
    ✔ with()
    এগুলো original array modify করে না।

Basic Methods
    1.  forEach
    2.  map
    3.  filter
    4.  reduce
    5.  find
    6.  findIndex
    7.  some
    8.  every
    9.  includes

Transform & Modify
    1.  push
    2.  pop
    3.  shift
    4.  unshift
    5.  splice
    6.  slice
    7.  concat
    8.  join
    9.  reverse
    10. sort

const numbers = [5, 10, 15, 20, 25, 30];
এটা দিয়ে:
    1.  sum
    2.  max
    3.  min
    4.  even filter
    5.  odd filter
    6.  square map
    7.  average
    8.  sort
    9.  reverse
*/

const users = [
    {
        id: 1,
        name: "Rahim",
        age: 22,
        salary: 25000,
        isActive: true,
        skills: ["HTML", "CSS", "JavaScript"],
        address: { city: "Dhaka", country: "Bangladesh" }
    },
    {
        id: 2,
        name: "Karim",
        age: 30,
        salary: 40000,
        isActive: false,
        skills: ["React", "Node.js"],
        address: { city: "Chittagong", country: "Bangladesh" }
    },
    {
        id: 3,
        name: "Sumi",
        age: 27,
        salary: 35000,
        isActive: true,
        skills: ["Python", "Django"],
        address: { city: "Rajshahi", country: "Bangladesh" }
    },
    {
        id: 4,
        name: "Ayesha",
        age: 19,
        salary: 20000,
        isActive: false,
        skills: ["Graphics Design"],
        address: { city: "Khulna", country: "Bangladesh" }
    }
];

/*
//  1.  সব user এর নাম বের করো: map
const name = users.map((user) => user.name);
console.log(name);

//  2.  শুধু active user বের করো: filter
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers);

//  3.  মোট salary বের করো: reduce
const totalSalary = users.reduce((acc, user) => acc + user.salary, 0);
console.log(totalSalary);

//  4.  age 25 এর বেশি এমন user বের করো
const age = users.filter(user => user.age > 25);
console.log(age);

//  5.  Dhaka শহরের user বের করো
const dhakaUsers = users.filter(user => user.address.city === 'Dhaka');
console.log(dhakaUsers);

// 6.   সব skills একসাথে এক array বানাও: flat() বা reduce
const skills = users.reduce((acc, user) => [...acc, ...user.skills], [])
console.log(skills);

// 7.   সবচেয়ে বেশি salary কার? reduce
const maxSalary = users.reduce((max, user) => user.salary > max.salary ? user : max);
console.log(maxSalary.name, maxSalary.salary);
*/

// Challenge 1: Average Salary বের করা
const totalSalary = users.reduce((acc, user) => acc + user.salary, 0);
const averageSalary = totalSalary / users.length;
console.log(averageSalary);

// Challenge 2: Active user কয়জন?
const activeUser = users.filter(user => user.isActive).length;
console.log(activeUser);

// Challenge 3: salary 50000 এর বেশি কেউ আছে?
const highSalary = users.some(user => user.salary > 50000);
console.log(highSalary);

// Challenge 4: সবাই কি Bangladesh এর?
const allFromBD = users.every(
    user => user.address.country === "Bangladesh"
);
console.log(allFromBD);

// Challenge 5: salary অনুযায়ী descending sort
const sortedBySalary = [...users].sort(
    (a, b) => b.salary - a.salary
);
console.log(sortedBySalary);

// Challenge 6: name: salary object বানানো (reduce)
const salaryObject = users.reduce((acc, user) => {
    acc[user.name] = user.salary;
    return acc;
}, {});
console.log(salaryObject);

// Challenge 7: শুধু name + city array বানাও
const nameCity = users.map(user => ({
    name: user.name,
    city: user.address.city
}));
console.log(nameCity);

// Challenge 8: Unique skills বানাও
const allSkills = users.flatMap(user => user.skills);
const uniqueSkills = [...new Set(allSkills)];
console.log(uniqueSkills);

// Challenge 9: salary 30000 এর বেশি user-এর name
const highEarners = users
    .filter(user => user.salary > 30000)
    .map(user => user.name);
console.log(highEarners);