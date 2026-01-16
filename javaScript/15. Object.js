/*
JavaScript Object Checklist
    ✔ Object creation
    ✔ Property access
    ✔ Add / update / delete
    ✔ Object methods
    ✔ this (deep understanding)
    ✔ Loop object
    ✔ Nested object

1.  Object কী?
    =>  Object হলো key–value জোড়া দিয়ে ডেটা রাখা।
        let person = {
            name: "Rahim",
            age: 25,
            isStudent: true
        };
        name, age → key
        "Rahim", 25 → value
    =>  Object ব্যবহার হয় real-world data represent করতে।

2.  Object Creation (All Method)
    1.  Object Literal (সবচেয়ে common)
        let car = {
            brand: "Toyota",
            color: "Red"
        };

    2.  new Object()
        let user = new Object();
        user.name = "Karim";
        user.age = 30;

    3.  Constructor Function
        function Person(name, age) {
        this.name = name;
        this.age = age;
        }
        let p1 = new Person("A", 20);
    =>  Constructor function future-এ class বুঝতে সাহায্য করবে।

3.  Object Property Access
    1.  Dot notation
        person.name;

    2.  Bracket notation
        person["age"];

    =>  Bracket দরকার হয় যখন key dynamic হয়।
        let key = "name";
        person[key];

4.  Add / Update / Delete Property
    1.  person.city = "Dhaka";       add
    2.  person.age = 26;             update
    3.  delete person.isStudent;     delete

5.  Object Methods
    =>  Object-এর ভিতরে function থাকলে তাকে method বলে।
        let user = {
            name: "Rahim",
            greet: function() {
                console.log("Hello");
            }
        };
        user.greet();

6.  Method with Data Access
    let user = {
        name: "Karim",
        greet: function() {
            console.log("Hello " + this.name);
        }
    };
    user.greet(); // Hello Karim
    =>  এখানে this ব্যবহার হয়েছে।

7.  this কী?
    =>  this মানে হলো যে object থেকে function call হয়েছে, সেই object।
    1.  this inside Object Method
        let person = {
            name: "A",
            age: 20,
            info() {
                console.log(this.name + " is " + this.age);
            }
        };
        person.info();

    2.  this outside Object (Normal function)
        function show() {
            console.log(this);
        }
        show(); // browser → window | node → global

8.  this vs Arrow Function
    =>  Arrow function নিজের this বানায় না।
        let user = {
            name: "Rahim",
            greet: () => {
                console.log(this.name);
            }
        };
        user.greet(); // undefined

    =>  Correct way
        let user = {
            name: "Rahim",
            greet() {
                console.log(this.name);
            }
        };
    =>  Object method এ arrow function ব্যবহার করো না।

9.  Loop through Object
    1.  for...in
        for (let key in person) {
            console.log(key, person[key]);
        }

    2.  Object.keys / values / entries
        Object.keys(person);
        Object.values(person);
        Object.entries(person);

10. Nested Object
    let student = {
        name: "A",
        address: {
            city: "Dhaka",
            zip: 1200
        }
    };
    student.address.city;

11. Object Reference
    let a = { x: 10 };
    let b = a;
    b.x = 20;
    console.log(a.x); // 20
    =>  Object copy নয়, reference যায়।

12. Shallow Copy
    let copy = { ...person };

13. Object Method + Parameter
    let calculator = {
    add(a, b) {
        return a + b;
        }
    };
    calculator.add(2, 3);

=>  Common Mistakes
    1.  Arrow function দিয়ে method লেখা
    2.  this ভুল জায়গায় ব্যবহার
    3.  Object copy না বুঝে modify
    4.  Dot vs bracket confusion

=>  Practice Tasks (Must Do)
    1.  Person object বানাও
    2.  Method দিয়ে age increase করো
    3.  this ব্যবহার করে full name দেখাও
    4.  Nested object থেকে data read করো
    5.  for...in দিয়ে সব property print করো    
*/

const myDetails = {
    name: "ABDUL KADIR",
    moteherName: "SHOPNA",
    fatherName: "KALU MIA",
    age: 24,
    favouriteColor: "black",
    location: "Raipur"
}
console.log(myDetails);
console.log(myDetails["age"]);

