/*
ES6+ Features Checklist:
    ✔ Template literals
    ✔ Destructuring
    ✔ Spread operator
    ✔ Default parameter
    
1.  Template Literals (``)
    =>  কেন দরকার?
        Old way–এ string + variable messy হয়ে যায়।

    1.  Old Way
        let name = "Abdul";
        let age = 25;
        console.log("My name is " + name + " and I am " + age);

    2.  ES6 Way (Template Literal)
        console.log(`My name is ${name} and I am ${age}`);

    =>  Multi-line string
        let text = `
        Hello ${name},
        Welcome to JavaScript
        `;

    =>  Use Case
        ✔ dynamic text
        ✔ HTML generate
        ✔ message / alert

2.  Destructuring
    =>  Object / Array থেকে value বের করা সহজ করে

    1.  Object Destructuring
        let user = { name: "Abdul", age: 25 };
        let { name, age } = user;

    2.  Rename variable
        let { name: userName } = user;

    3.  Default value
        let { country = "BD" } = user;

    4.  Array Destructuring
        let arr = [10, 20, 30];
        let [a, b] = arr;

    5.  Skip value
        let [ , , c] = arr;

3.  Spread Operator (...)
    =>  Array / Object expand করা

    1.  Array copy
        let a = [1, 2];
        let b = [...a];

    2.  Array merge
        let x = [1, 2];
        let y = [3, 4];
        let z = [...x, ...y];

    3.  Object copy
        let user2 = { ...user };

    4.  Object merge
        let user3 = { ...user, age: 30 };

    5.  Shallow copy
        Nested object deep copy হয় না

4.  Default Parameter
    Function-এ default value দেওয়া

    1.  Old way
        function greet(name) {
            name = name || "Guest";
        }

    2.  ES6 way
        function greet(name = "Guest") {
            console.log(name);
        }

    3.  Multiple default
        function calc(a = 0, b = 0) {
            return a + b;
        }

=>  Common Mistakes
    1.  template literal এ backtick না ব্যবহার
    2.  destructuring key mismatch
    3.  spread দিয়ে deep copy আশা করা
    4.  default parameter-এ undefined vs null confuse

=>  Practice Tasks (Must Do)
    1.  dynamic message বানাও (template literal)
    2.  object destructure করো
    3.  array merge করো
    4.  function default parameter test
    5.  spread দিয়ে state update practice
*/