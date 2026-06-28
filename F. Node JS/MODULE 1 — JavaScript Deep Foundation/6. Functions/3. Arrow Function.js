/*
3.  Arrow Function

১.  Arrow Function (এরো ফাংশন)
    সংজ্ঞা: Arrow Function হলো ES6-এ প্রবর্তিত ফাংশন লেখার একটি সংক্ষিপ্ত ও আধুনিক পদ্ধতি। এর সিনট্যাক্স সাধারণ ফাংশন থেকে অনেক ছোট এবং এটি কোডকে পরিষ্কার (clean) রাখে।

২.  মূল বৈশিষ্ট্যসমূহ
    ১.  সংক্ষিপ্ত সিনট্যাক্স:
        function কিওয়ার্ড এবং { } বা return লেখার ঝামেলা নেই (যদি একটি মাত্র লাইন থাকে)।

    ২.  this কিওয়ার্ডের বিশেষ আচরণ:
        সাধারণ ফাংশনের সাথে এর সবচেয়ে বড় পার্থক্য হলো this কিওয়ার্ড। Arrow Function-এর নিজস্ব কোনো this নেই; এটি তার আশেপাশের (Lexical) এনভায়রনমেন্ট থেকে this-এর মান গ্রহণ করে।

    ৩.  Constructor হিসেবে ব্যবহার করা যায় না:
        Arrow Function-কে new কিওয়ার্ড দিয়ে অবজেক্ট তৈরি করার কাজে ব্যবহার করা যায় না।

৩.  কোড উদাহরণ
    JavaScript
        // সাধারণ ফাংশন এক্সপ্রেশন
            const add = function(a, b) {
                return a + b;
            };

        // Arrow Function (একই কাজ)
            const addArrow = (a, b) => a + b;
            console.log(addArrow(5, 3)); // 8

৪.  Key Points
    ১.  "কেন Arrow Function ব্যবহার করবো?"
        উত্তর: যখন আমাদের এমন ফাংশন দরকার যা তার বাইরের স্কোপের this-কে ধরে রাখবে (যেমন: setTimeout বা DOM ইভেন্ট হ্যান্ডলারে), তখন Arrow Function জাদুর মতো কাজ করে। সাধারণ ফাংশনে this বদলে যায়, কিন্তু Arrow Function-এ তা স্থির থাকে।

৫.  Revision
    ১.  সিনট্যাক্স
        () => { ... }
        function() { ... }

    ২.  this কিওয়ার্ড
        Lexical (বাইরের স্কোপ থেকে আসে)
        ডাইনামিক (কল করার ওপর নির্ভর করে)

    ৩.  Constructor
        ব্যবহার করা যায় না
        ব্যবহার করা যায়

    ৪.  Node.js-এ ব্যবহার
        বহুল ব্যবহৃত (Callback/Promises)
        মডুলাস বা অবজেক্ট মেথডের জন্য

সহজ মনে রাখার উপায়: Arrow Function হলো ছোট এবং চটপটে। এটি জটিল this-এর ঝামেলা এড়ায় এবং খুব দ্রুত ছোট ছোট কাজ (যেমন: অ্যারো ফিল্টার বা ম্যাপ) করার জন্য উপযুক্ত।
*/

/*
this মানে হলো সেই অবজেক্ট, যে এই মুহূর্তে ফাংশনটিকে কল করছে বা মালিকানা বহন করছে।

১.  this কেন বিভ্রান্তিকর? (Common Problem)
    যখন আমরা সাধারণ ফাংশনের ভেতরে this ব্যবহার করি এবং সেই ফাংশনটিকে কোনো ইভেন্ট বা setTimeout-এ কল করি, তখন this তার আসল অবজেক্টকে হারিয়ে ফেলে।

    সমস্যাযুক্ত কোড:
    JavaScript
        const user = {
            name: "Rahim",
            greet: function() {
                console.log("Hello, " + this.name);
            }
        };

    // ঠিকমতো কাজ করছে
        user.greet(); // আউটপুট: Hello, Rahim

    // সমস্যা: যদি আমরা ফাংশনটিকে আলাদা করে ফেলি
        const sayHello = user.greet;
        sayHello(); // আউটপুট: Hello, undefined (এখানে this আর user-কে চেনে না!)

    ব্যাখ্যা: sayHello() যখন কল করা হয়েছে, তখন এটি কোনো অবজেক্টের অধীনে নেই। তাই ব্রাউজারে এটি window অবজেক্টকে রেফার করছে, যেখানে name বলে কিছু নেই।

২.  সমাধান: কীভাবে this-কে ঠিক রাখা যায়?
    পদ্ধতি ১: Arrow Function ব্যবহার করা (সবচেয়ে আধুনিক)
        Arrow Function-এর নিজস্ব কোনো this নেই। এটি তার বাইরের স্কোপ (Lexical Scope) থেকে this-কে ধার করে।

        JavaScript
            const user = {
                name: "Rahim",
                greet: function() {
                    setTimeout(() => {
                        console.log("Hello, " + this.name); // এখানে this মানে user অবজেক্ট
                    }, 1000);
                }
            };
            user.greet(); // ১ সেকেন্ড পর আউটপুট: Hello, Rahim

    পদ্ধতি ২: bind() মেথড ব্যবহার করা
        আপনি চাইলে bind() ব্যবহার করে জোর করে this-এর মান সেট করে দিতে পারেন।

        JavaScript
            const sayHello = user.greet.bind(user); 
            sayHello(); // আউটপুট: Hello, Rahim (এখন আর ভুল হবে না)

৩.  this বোঝার একটি সহজ চার্ট
    ১.  কল করার ধরন: this কাকে রেফার করে?
    ২.  Object Method: ওই অবজেক্টকে (যেমন: user.greet())
    ৩.  Simple Function Call: window অবজেক্টকে (Node.js-এ global)
    ৪.  Arrow Function: বাইরের স্কোপকে (Lexical this)
    ৫.  Event Listener: যে এলিমেন্টে ইভেন্টটি ঘটেছে (DOM Element)

৪.  Key Points    
    ১.  Rule of Thumb:
        সবসময় মনে রাখবেন, ফাংশনের ডিক্লেয়ারেশনের সময় this নির্ধারিত হয় না, বরং ফাংশনটি কীভাবে কল করা হচ্ছে (Invocation) তার ওপর this-এর মান নির্ভর করে।

    ২.  Strict Mode:
        যদি আপনি 'use strict'; ব্যবহার করেন, তবে সাধারণ ফাংশন কল করলে this এর মান undefined হয়ে যায় (গ্লোবাল অবজেক্ট হয় না), যা কোডের নিরাপত্তা বাড়ায়।

সহজ মনে রাখার উপায়: this হলো একটি "আইডেন্টিটি কার্ড"। ফাংশনটি যখন যার অধীনে কাজ করে, সে তার আইডেন্টিটি কার্ডটি পরে নেয়। Arrow Function ব্যবহার করলে সে তার আগের মালিকের কার্ডটিই ধরে রাখে, তাই সে বিভ্রান্ত হয় না।    
*/