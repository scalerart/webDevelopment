const user = { name: "ABDUL KADIR", age: 23, city: "Lakshmipur" };

// প্রশ্ন: 1 একটা object থেকে সব key বের করো। Object.keys()
const keys = Object.keys(user);
console.log(keys);

// প্রশ্ন: 2 সব value বের করো। Object.values()
const values = Object.values(user);
console.log(values);

// প্রশ্ন: 3 for...of ব্যবহার করে key + value print করো। Object.entries()
for (let [key, value] of Object.entries(user)) {
    console.log(key, ":", value);
}

// প্রশ্ন:4 নিচের array থেকে object বানাও। Object.fromEntries()
const arr = [["a", 1], ["b", 2]];
const obj = Object.fromEntries(arr);
console.log(obj);

// প্রশ্ন: 5 দুইটা object merge করো। Object.assign()
let a = { x: 1 };
let b = { y: 2 };
const mergeObject = Object.assign(a, b);
console.log(mergeObject);

// প্রশ্ন: 6 Object freeze করে change করার চেষ্টা করো। Object.freeze()
Object.freeze(user);
user.name = "B";
console.log(user.name);

// প্রশ্ন: 7 Property update করা যাবে, কিন্তু add করা যাবে না — এমন করো। Object.seal()
Object.seal(user);
user.age = 25;
user.city = "Dhaka"; // কাজ করবে না

// প্রশ্ন: 8 "name" property আছে কিনা check করো। Object.hasOwn()
Object.hasOwn(user, "name");

// প্রশ্ন: 9 নতুন property add বন্ধ করো। Object.preventExtensions()
let object = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2; // কাজ করবে না

// প্রশ্ন: 10 "name" property-এর configuration দেখাও। Object.getOwnPropertyDescriptor()
console.log(
    Object.getOwnPropertyDescriptor(user, "name")
);

// প্রশ্ন: 11 একটা read-only property বানাও। Object.defineProperty()
Object.defineProperty(user, "id", {
    value: 1,
    writable: false
});

// প্রশ্ন: 12 Prototype থেকে নতুন object বানাও। Object.create()
let person = {
    greet() {
        console.log(user);
    }
};
let userObj = Object.create(person);
userObj.greet();

// প্রশ্ন: 13 user কোন prototype থেকে এসেছে বের করো। Object.getPrototypeOf()
console.log(Object.getPrototypeOf(user));

// প্রশ্ন: 14 NaN compare করো। Object.is()
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

// প্রশ্ন: 15 Object freeze হয়েছে কিনা check করো। Freeze / Seal / Extensible Check
Object.freeze(user);
console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));
console.log(Object.isExtensible(user));