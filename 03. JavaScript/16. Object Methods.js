/*
JavaScript Object Methods Checklist
Core 7 (Must Know)
    1.  Object.keys
    2.  Object.values
    3.  Object.entries
    4.  Object.assign
    5.  Object.freeze
    6.  Object.seal
    7.  Object.hasOwn

Important Advanced
    1.  Object.create
    2.  Object.defineProperty
    3.  Object.getPrototypeOf
    4.  Object.setPrototypeOf
    5.  Object.is

Deep Interview Level
    1.  Object.getOwnPropertyDescriptor(s)
    2.  Object.preventExtensions
    3.  Object.isFrozen
    4.  Object.isSealed
    5.  Object.isExtensible

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

16. Object.getOwnPropertyDescriptor()
    ✔  একটি নির্দিষ্ট property-এর পুরো configuration দেয়
        let user = { name: "Rahim" };
        Object.getOwnPropertyDescriptor(user, "name");

    ✔  Output:
        {
        value: "Rahim",
        writable: true,
        enumerable: true,
        configurable: true
        }

17. Object.getOwnPropertyDescriptors()
    ✔  সব property-এর descriptor একসাথে দেয়
        Object.getOwnPropertyDescriptors(user);

18. Object.preventExtensions()
    ✔  নতুন property add করা যাবে না
    ✔  কিন্তু update / delete করা যাবে
        let obj = { a: 1 };
        Object.preventExtensions(obj);
        obj.b = 2; // কাজ করবে না

    ✔  Freeze > Seal > preventExtensions
    ✔  Freeze সবচেয়ে শক্ত।

19. Object.isExtensible()
    ✔  object-এ নতুন property add করা যাবে কিনা check
        Object.isExtensible(obj);

20. Object.isFrozen()
    ✔  object freeze করা হয়েছে কিনা check
        Object.isFrozen(obj);

21. Object.isSealed()
    ✔  object seal করা হয়েছে কিনা check
        Object.isSealed(obj);        
    ✔  Interview-এ খুব গুরুত্বপূর্ণ।

22. hasOwnProperty() (Old way)
    user.hasOwnProperty("name");

    ✔  Modern way:
        Object.hasOwn(user, "name");

23. toString()
    user.toString();

24. valueOf()
    Primitive value return করে।    

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
myInfromation.name = "Abdullah";
myInfromation.age = 25;
console.log(myInfromation);