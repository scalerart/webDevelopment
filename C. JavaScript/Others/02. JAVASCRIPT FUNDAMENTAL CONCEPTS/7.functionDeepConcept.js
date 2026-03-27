function doubleIt(num) {
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);

function add(a, b) {
    var result = a + b;
    return result;
}
var sum = add(15, 17);
console.log(sum);
/*
Function এর Deep Concept
1.  Function Scope
    Scope মানে কোথায় কোন ভ্যারিয়েবল কাজ করবে।
        1.  Global Scope: বাইরে ডিফাইন করা ভ্যারিয়েবল সব জায়গায় কাজ করে।
        2.  Local Scope (Function Scope): ফাংশনের ভিতরে ডিফাইন করা ভ্যারিয়েবল শুধু ফাংশনের ভিতরে কাজ করে।

        👉 উদাহরণ:
    let globalVar = "I am Global";

    function test() {
        let localVar = "I am Local";
        console.log(globalVar); // কাজ করবে
        console.log(localVar);  // কাজ করবে
    }

    test();
    console.log(globalVar); // কাজ করবে
    console.log(localVar);  // Error: localVar is not defined

2.  Default Parameters
    যদি function call করার সময় argument না দাও, তাহলে default parameter ব্যবহার করা যায়।

    👉 উদাহরণ:
        function greet(name = "Guest") {
            console.log("Hello " + name);
        }

        greet("Kadir");  // Hello Kadir
        greet();         // Hello Guest

3.  Recursion (Function নিজের ভেতর থেকে নিজেকে কল করা)
    Recursion মানে function নিজেই নিজেকে কল করে।
    এটা সাধারণত গণিত বা লুপের মতো কাজ করার জন্য ব্যবহৃত হয়।

    👉 উদাহরণ (Factorial বের করা):
        function factorial(n) {
            if (n === 1) {
            return 1;
        }
            return n * factorial(n - 1);
        }
        console.log(factorial(5)); // 120

4.  Function Hoisting
    JavaScript এ normal function declaration আগে থেকেই অ্যাক্সেস করা যায় (hoisting হয়)।

    👉 উদাহরণ:
        sayHello(); // কাজ করবে

        function sayHello() {
            console.log("Hello!");
        }

কিন্তু function expression বা arrow function hoisting হয় না।
    sayHi(); // Error
    const sayHi = function() {
        console.log("Hi!");
    };

5.  Anonymous Function
    যে function এর কোনো নাম থাকে না, তাকে anonymous function বলে।
    👉 অনেক সময় event, callback এ ব্যবহার হয়।
        setTimeout(function() {
            console.log("This is anonymous function");
        }, 2000);
*/        