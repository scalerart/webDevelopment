/*
JavaScript Function Master Checklist
    ✔ Function declaration
    ✔ Function call
    ✔ Parameter & Argument
    ✔ Return value
    ✔ Default parameter
    ✔ Function expression
    ✔ Arrow function
    ✔ One-line arrow return

=>  Function কী?
    Function হলো কিছু কোডের একটি ব্লক, যেটা আমরা বারবার ব্যবহার করতে পারি।
    একবার লিখো, বহুবার ব্যবহার করো – এটাই Function এর শক্তি।

=>  কেন Function দরকার?
    1.  কোড বারবার লিখতে হয় না
    2.  কোড পরিষ্কার (Clean) থাকে
    3.  Bug কম হয়
    4.  বড় প্রজেক্ট manage করা সহজ

1.  Function Declaration
    =>  Syntax
        function functionName() {
            code
        }

    =>  Example
        function sayHello() {
            console.log("Hello JavaScript");
        }
        sayHello(); function call
    =>  Function নিজে থেকে চলে না → call করতে হয়

2.  Function Parameter
    =>  Parameter কী?
        Function–এর ভিতরে যেসব value পাঠানো হয়—সেগুলোই parameter।
        function greet(name) {
            console.log("Hello " + name);
        }
        greet("Abdul");
        greet("Rahim");
        =>  name = parameter
        =>  "Abdul" = argument

3.  Multiple Parameters
    function add(a, b) {
        console.log(a + b);
    }
    add(5, 3); 8

4.  Function Return
    =>  return কী?
        return দিয়ে function থেকে value ফেরত পাঠানো হয়।
        function sum(a, b) {
            return a + b;
        }
        let result = sum(10, 20);
        console.log(result); 30
    =>  return এর পরে function থেমে যায়

5.  Default Parameter
    function greet(name = "Guest") {
        console.log("Hello " + name);
    }
    greet();
    greet("Abdul");

6.  Function Expression
    const sayHi = function () {
        console.log("Hi");
    };
    sayHi();
    =>  Variable এর ভিতরে function রাখা

7.  Arrow Function (Modern JavaScript)
    1.  Arrow Function কী?
        Function লেখার short & modern style।
    =>  Basic Syntax
        const functionName = () => {
            code
        };

    =>  Example
        const hello = () => {
            console.log("Hello Arrow Function");
        };
        hello();

    2.  Arrow + Parameter
        const greet = (name) => {
            console.log("Hello " + name);
        };
        greet("Abdul");

    3.  Arrow + Return (One line)
        const add = (a, b) => a + b;
        console.log(add(5, 7)); // 12
        =>  One line হলে {} ও return লাগবে না        
*/

function addNumbers(a, b) {
    let add = a + b;
    return add
};
let sum = addNumbers(12, 15);
console.log(sum);

const add = (a, b) => {
    let sum = a + b;
    return sum;
}
let total = add(30, 60);
console.log(total);


function myFunction(name, country) {
    console.log("My name is " + name + " and I'm From " + country);
};
myFunction('ABDUL KADIR', 'BANGLADESH');
myFunction('ABDUR RAHMAN', 'SAUDI ARABIA');


//  Arguments
function argument() {
    if (arguments.length === 0) {
        console.log("Arguments Not Found");
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}
const argumentSum = argument(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(argumentSum);
