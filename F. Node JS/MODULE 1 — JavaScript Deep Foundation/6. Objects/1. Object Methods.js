/*
1.  Object Methods

১.  Object Methods
    সংজ্ঞা: যখন একটি অবজেক্টের কোনো প্রপার্টির ভ্যালু হিসেবে একটি ফাংশন রাখা হয়, তখন সেই ফাংশনটিকে বলা হয় Object Method। এটি অবজেক্টের ভেতরের ডেটা নিয়ে কোনো কাজ করতে বা অ্যাকশন পারফর্ম করতে ব্যবহৃত হয়।

২.  কিভাবে কাজ করে?
    একটি অবজেক্টের ভেতরে মেথড ডিফাইন করার সময় আমরা function কিওয়ার্ড বা ES6-এর সংক্ষিপ্ত পদ্ধতি ব্যবহার করতে পারি। মেথডের ভেতর this ব্যবহার করে আমরা ওই অবজেক্টেরই অন্য কোনো প্রপার্টিকে এক্সেস করতে পারি।

৩.  কোড উদাহরণ:
    JavaScript
        const user = {
            firstName: "Rahim",
            lastName: "Ahmed",
            
            // Method 1: প্রথাগত পদ্ধতি
            getFullName: function() {
                return this.firstName + " " + this.lastName;
            },

            // Method 2: ES6 সংক্ষিপ্ত পদ্ধতি (এটিই বর্তমানে বেশি জনপ্রিয়)
            sayHi() {
                console.log(`Hello, I am ${this.firstName}`);
            }
        };

        console.log(user.getFullName()); // আউটপুট: "Rahim Ahmed"
        user.sayHi();                    // আউটপুট: "Hello, I am Rahim"

৪.  মেথড ও this-এর গুরুত্ব
    ১.  this কিওয়ার্ড:
        মেথডের ভেতরে this সব সময় সেই অবজেক্টকে নির্দেশ করে যা মেথডটিকে কল করেছে।

    ২.  পার্থক্য:
        যদি আপনি মেথডের ভেতরে একটি Arrow Function ব্যবহার করেন, তবে this আর অবজেক্টকে খুঁজে পাবে না (কারণ Arrow Function-এর নিজস্ব this নেই)। তাই অবজেক্ট মেথড লেখার সময় সাধারণ ফাংশন (Regular Function) ব্যবহার করাই উত্তম।

৫.  Key Points
    ১.  পদ্ধতিভেদ:
        কেন ES6 মেথড সিনট্যাক্স (sayHi() {}) ভালো? কারণ এটি দেখতে পরিষ্কার এবং এতে this নিয়ে বিভ্রান্তি কম হয়।

    ২.  মেথড বনাম ফাংশন:
        মনে রাখবেন, ফাংশন স্বাধীনভাবে থাকে, কিন্তু মেথড সব সময় একটি অবজেক্টের অধীনে (Property হিসেবে) থাকে।

সহজ মনে রাখার উপায়: একটি অবজেক্ট হলো একটি "মানুষের পরিচয়পত্র" (ডেটা), আর মেথড হলো তার "কাজ" (যেমন—কথা বলা, হাঁটা)। পরিচয়পত্রের ভেতরেই যেহেতু কাজের নিয়ম লেখা থাকে, তাই মেথড সব সময় অবজেক্টের ভেতরেই থাকে।
*/

const user = {
    firstName: "Rahim",
    lastName: "Ahmed",

    // Method 1: প্রথাগত পদ্ধতি
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    // Method 2: ES6 সংক্ষিপ্ত পদ্ধতি (এটিই বর্তমানে বেশি জনপ্রিয়)
    sayHi() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName}`);
    }
};

console.log(user.getFullName()); // আউটপুট: "Rahim Ahmed"
user.sayHi();