/*
3.  Modules(import/export)

১.  সংজ্ঞা (Definition)
    মডিউল হলো এমন একটি ফাইল যা তার ভেতরের ফাংশন, অবজেক্ট বা ভেরিয়েবলগুলোকে বাইরের বিশ্বের জন্য Export (পাঠাতে) করতে পারে এবং অন্য ফাইল থেকে প্রয়োজনীয় কোড Import (নিজেদের ফাইলে আনতে) করতে পারে।

২.  দুই ধরণের এক্সপোর্ট পদ্ধতি
    জাভাস্ক্রিপ্টে মডিউল এক্সপোর্ট করার প্রধানত দুটি উপায় আছে:

    ক)  Named Export (নাম ধরে এক্সপোর্ট):
        একটি ফাইল থেকে একাধিক জিনিস এক্সপোর্ট করতে এটি ব্যবহৃত হয়। ইমপোর্ট করার সময় অবশ্যই একই নাম ব্যবহার করতে হয়।

        math.js ফাইলে:
        JavaScript
            export const PI = 3.1416;
            export function add(a, b) { return a + b; }

        main.js ফাইলে:
        JavaScript
            import { PI, add } from './math.js';
            console.log(add(10, 20));

    খ)  Default Export (ডিফল্ট এক্সপোর্ট):
        একটি ফাইলে শুধুমাত্র একটি জিনিসকে ডিফল্ট হিসেবে এক্সপোর্ট করা যায়। ইমপোর্ট করার সময় আপনি নিজের পছন্দমতো নাম দিতে পারেন।

        user.js ফাইলে:
        JavaScript
            export default function getUser() {
                return "Rahim";
            }

        main.js ফাইলে:
        JavaScript
            import myUserFunction from './user.js'; // নাম নিজের পছন্দমতো দেওয়া যায়

৩.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  কেন ব্যবহার করবেন?
        কোডকে আলাদা আলাদা ফাইলে রাখার ফলে 'Global Scope Pollution' রোধ করা যায় এবং বড় প্রজেক্ট মেইনটেইন করা সহজ হয়।

    ২.  Node.js এর ক্ষেত্রে:
        Node.js-এ ডিফল্টভাবে CommonJS (require/module.exports) ব্যবহৃত হয়। তবে আধুনিক Node.js-এ "type": "module" প্যাকেজ জেসন ফাইলে সেট করে আপনি এই import/export (ES Modules) ব্যবহার করতে পারেন।

    ৩.  পারফরম্যান্স:
        ব্রাউজারে Modules ডিফল্টভাবে defer হিসেবে কাজ করে, অর্থাৎ এটি HTML ফাইল লোড হওয়াকে ব্লক করে না।

৪.  ইন্টারভিউ টিপস (Common Interview Question):
    ১.  ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন, "Named Export এবং Default Export এর মধ্যে পার্থক্য কী?"

        উত্তর: Named Export দিয়ে একটি ফাইল থেকে একাধিক ফাংশন বা ভেরিয়েবল পাঠানো যায় এবং ইমপোর্ট করার সময় curly braces {} ব্যবহার করতে হয়। অন্যদিকে, Default Export দিয়ে ফাইল থেকে মেইন ফিচারটি পাঠানো হয় এবং ইমপোর্ট করার সময় কোনো curly braces প্রয়োজন হয় না।
*/