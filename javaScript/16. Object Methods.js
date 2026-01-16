/*
JavaScript Object Methods Checklist

=>  Object methods দুই ভাগে ভাবলে সহজ হয়
    1.  Object constructor methods
    2.  Object instance / utility methods

1.  Object.keys()
    =>  Object-এর সব key নিয়ে array দেয়
        let user = { name: "Rahim", age: 25 };
        Object.keys(user);
        ["name", "age"]
    =>  Loop / validation-এ খুব কাজে লাগে

2.  Object.values()
    =>  Object-এর সব value নিয়ে array দেয়
        Object.values(user);
        ["Rahim", 25]

3.  Object.entries()
    =>  key + value pair array বানায়
        Object.entries(user);
        [["name","Rahim"], ["age",25]]
    =>  for...of loop-এ perfect
        for (let [key, value] of Object.entries(user)) {
            console.log(key, value);
        }

4.  Object.fromEntries()
    =>  entries array থেকে আবার object বানায়
        let arr = [["a",1], ["b",2]];
        Object.fromEntries(arr);
        { a:1, b:2 }

5.  Object.assign()
    =>  এক বা একাধিক object merge করে
    =>  shallow copy তৈরি করে
        let a = { x: 1 };
        let b = { y: 2 };
        let result = Object.assign({}, a, b);
        { x:1, y:2 }

6.  Object.freeze()
    =>  Object lock করে দেয়
    =>  change / add / delete করা যায় না
        let user = { name: "A" };
        Object.freeze(user);
        user.name = "B"; // কাজ করবে না

7.  Object.seal()
    =>  Update করা যাবে
    =>  add / delete করা যাবে না
        let user = { age: 20 };
        Object.seal(user);
        user.age = 25;   // OK
        user.city = "Dhaka"; //

8.  Object.hasOwn()
    =>  Object-এ property আছে কিনা check
        user.hasOwn("name"); // true
        (পুরোনো alternative: hasOwnProperty)

9.  Object.getOwnPropertyNames()
    =>  সব property (including non-enumerable)
        Object.getOwnPropertyNames(user);

10. Object.getPrototypeOf()
    =>  Object কোন prototype থেকে এসেছে
        Object.getPrototypeOf(user);

11. Object.setPrototypeOf()
    =>  Prototype set করা (rarely used)
        Object.setPrototypeOf(obj, proto);

12. Object.create()
    =>  অন্য object কে prototype বানিয়ে নতুন object
        let person = {
            greet() {
            console.log("Hello");
            }
        };
        let user = Object.create(person);
        user.greet();

13. Object.is()
    =>  Strict comparison (=== থেকেও strict)
        Object.is(NaN, NaN); // true
        Object.is(0, -0);   // false

14. Object.defineProperty()
    =>  Property-র control set করা
        Object.defineProperty(user, "id", {
            value: 1,
            writable: false
        });

15. Object.defineProperties()
    =>  একসাথে অনেক property define
        Object.defineProperties(user, {
            age: { value: 25 },
            city: { value: "Dhaka" }
        });

=>  Most Used (তোমার জন্য Must-Know)
    ✔ Object.keys
    ✔ Object.values
    ✔ Object.entries
    ✔ Object.assign
    ✔ Object.freeze
    ✔ Object.seal
    ✔ Object.hasOwn

=>  Summary
    1.  Key বের করা       Object.keys
    2.  Value বের করা     Object.values
    3.  Key+Value         Object.entries
    4.  Merge             Object.assign
    5.  Lock              Object.freeze
    6.  Partial lock	  Object.seal
    7.  Check	          hasOwn
*/

const myInfromation = {
    name: "ABDUL KADIR",
    fatherName: "NUR ALAM",
    motherName: "Sopna",
    age: 25,
    address: "Raipu, Lakshmipur"
}

//  Object.keys()
const objectKeys = Object.keys(myInfromation);
// console.log(objectKeys);

//  Object.values()
const objectValues = Object.values(myInfromation);
// console.log(objectValues);

//  Object.entries()
const objectEntries = Object.entries(myInfromation);
// console.log(objectEntries);

//  Object.assign()
const objectAssign = Object.assign(myInfromation);
console.log(objectAssign);

//  Object.freeze()
const objectFreeze = Object.freeze(myInfromation);
console.log(objectFreeze);

myInfromation.name = "abdur rahman"
console.log(myInfromation);

//  Object.seal()
const objectSeal = Object.seal(myInfromation);
myInfromation.name ="Abdullah";
myInfromation.age = 25;
console.log(myInfromation);