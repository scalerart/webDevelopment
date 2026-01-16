/*
=>  JavaScript Destructuring
    ✔ Array destructuring
    ✔ Object destructuring
    ✔ Spread operator
    ✔ Rest operator
    ✔ Object + Array combine
    ✔ map/filter/reduce + spread

1.  Destructuring (খুব গুরুত্বপূর্ণ)
    =>  Destructuring মানে হলো Array বা Object থেকে value বের করে variable-এ রাখা, সহজভাবে

    1.  Array Destructuring পুরোনো way
        let nums = [10, 20, 30];
        let a = nums[0];
        let b = nums[1];

    2.  Destructuring way
        let nums = [10, 20, 30];
        let [a, b, c] = nums;
        console.log(a, b, c); // 10 20 30
        1.  Skip value
            let [first, , third] = nums;

        2.  Default value
            let [x = 0, y = 0] = [5];
            console.log(x, y); // 5 0

    3.  Object Destructuring
        let user = {
            name: "Rahim",
            age: 25,
            city: "Dhaka"
        };
        let { name, age } = user;
        console.log(name, age);

        1.  Rename variable
            let { name: userName } = user;
            console.log(userName);

        2.  Default value
            let { country = "Bangladesh" } = user;

    4.  Destructuring in Function Parameter
        function printUser({ name, age }) {
            console.log(name, age);
        }
        printUser(user);
    =>  React / modern JS-এ এটা খুব বেশি ব্যবহার হয়।

2.  Spread Operator (...)
    =>  Spread মানে হলো Array বা Object কে ভেঙে আলাদা আলাদা করে দেওয়া

    1.  Array Spread
        let a = [1, 2];
        let b = [3, 4];
        let all = [...a, ...b];
        console.log(all); // [1,2,3,4]

        1.  Copy Array (Safe way)
            let copy = [...a];

        2.  Add new value
            let newArr = [...a, 99];

    2.  Object Spread
        let user = { name: "A", age: 20 };
        let info = { city: "Dhaka" };
        let full = { ...user, ...info };

        1.  Update property safely
            let updated = { ...user, age: 25 };

3.  Rest Operator (...)
    =>  Rest মানে হলো অনেকগুলো value এক জায়গায় জড়ো করা
    =>  Spread আর Rest দেখতে এক, কিন্তু কাজ আলাদা।

    1.  Rest in Function Parameter
        function sum(...numbers) {
            return numbers.reduce((a, b) => a + b, 0);
        }
        sum(1,2,3,4); // 10

    2.  Rest in Destructuring
        1.  Array Rest
            let [first, ...rest] = [1,2,3,4];
            console.log(rest); // [2,3,4]

        2.  Object Rest
            let { name, ...others } = user;
            console.log(others); // { age, city }

=>  Spread vs Rest (খুব গুরুত্বপূর্ণ)
    1.  Spread  ভেঙে ছড়িয়ে দেয়
    2.  Rest    জড়ো করে

4.  Object + Array Combine (Real Power)
    =>  এই অংশটাই তোমাকে real developer বানাবে।

    1.  Array of Objects
        let users = [
            { name: "A", age: 20 },
            { name: "B", age: 30 }
        ];

        1.  map + destructuring
            let names = users.map(({ name }) => name);

        2.  filter + object
            let adults = users.filter(u => u.age >= 25);

        3.  update object inside array
            let updatedUsers = users.map(u =>
                u.name === "A" ? { ...u, age: 22 } : u
            );

    2.  reduce with object
        let result = users.reduce((acc, user) => {
            acc[user.name] = user.age;
            return acc;
        }, {});

=>  Common Mistakes
    1.  Spread vs Rest গুলিয়ে ফেলা
    2.  Object copy না করে direct modify
    3.  Destructuring order ভুল করা
    4.  Nested destructuring না বোঝা

=>  Practice Tasks (Must Do)
    1.  Array destructuring দিয়ে first & last বের করো
    2.  Object destructuring দিয়ে name rename করো
    3.  Spread দিয়ে array merge করো
    4.  Rest দিয়ে unlimited parameter function বানাও
    5.  Array of object থেকে filter + map করো
*/

//  Destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [a, b, c, d, e, f, g, h, i] = numbers;
console.log(a, b, c, d, e, f, g, h, i);


//  Spread operator
const x = [7, 9, 10, 8, 6];
const y = [2, 3, 5, 4, 1];
const z = [...x, ...y];
console.log(z);

//  Object Destructuring

const myInfromation = {
    name: "ABDUL KADIR",
    fatherName: "NUR ALAM",
    motherName: "Sopna",
    age: 25,
    address: "Raipu, Lakshmipur"
}

const { name, fatherName, motherName, age, address } = myInfromation;
console.log(name, fatherName, motherName, age, address);
