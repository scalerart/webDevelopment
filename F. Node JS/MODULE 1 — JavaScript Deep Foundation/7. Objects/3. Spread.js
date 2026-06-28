/*
3.  Spread

১.  Spread (স্প্রেড অপারেটর)
    সংজ্ঞা: Spread Operator (...) কোনো অবজেক্ট বা অ্যারোর ভেতরের সব ডেটাকে "ছড়িয়ে" বা "কপি" করে নতুন কোনো অবজেক্ট বা অ্যারোতে বসিয়ে দেওয়ার জন্য ব্যবহৃত হয়। এটি মূলত ডেটার ইমিউটেবিলিটি (Immutability) বজায় রেখে অবজেক্ট আপডেট বা মার্জ করতে সাহায্য করে।

২.  কিভাবে কাজ করে?
    এটি একটি অবজেক্টের সব কি-ভ্যালু (key-value) জোড়াকে বাইরে বের করে আনে এবং নতুন অবজেক্টের ভেতরে ছড়িয়ে দেয়। এটি মূলত অবজেক্টের একটি শ্যালো কপি (Shallow copy) তৈরি করে।

৩.  কোড উদাহরণ:
    JavaScript
        const userBase = { name: "Rahim", age: 25 };
        const userSettings = { theme: "dark", notifications: true };

        // অবজেক্ট মার্জ করা
        const finalUser = { ...userBase, ...userSettings };

        console.log(finalUser); 
        // আউটপুট: { name: "Rahim", age: 25, theme: "dark", notifications: true }

        // অবজেক্ট আপডেট করা (আসল অবজেক্ট অপরিবর্তিত রেখে)
        const user = { name: "Rahim", role: "user" };
        const adminUser = { ...user, role: "admin" };

        console.log(adminUser); 
        // আউটপুট: { name: "Rahim", role: "admin" }

৪.  উন্নত ফিচারসমূহ:
    ১.  অ্যারো কপি করা: অবজেক্টের পাশাপাশি এটি অ্যারোতেও একইভাবে কাজ করে:
        JavaScript
            const fruits = ['apple', 'banana'];
            const moreFruits = [...fruits, 'orange', 'mango']; 
            // আউটপুট: ['apple', 'banana', 'orange', 'mango']

    ২.  ওভাররাইডিং (Overriding): যদি কোনো কি (key) নতুন অবজেক্টে পুনরায় লিখেন, তবে সেটি পুরনো মানকে রিপ্লেস করে দিবে।
        JavaScript
            const obj = { x: 1, y: 2 };
            const newObj = { ...obj, x: 10 }; 
            console.log(newObj); // { x: 10, y: 2 }

৫.  Key Points:
    ১.  কেন ব্যবহার করবেন?
        আধুনিক জাভাস্ক্রিপ্টে ডেটা মিউটেশন না করে স্টেট আপডেট করার জন্য এটি অপরিহার্য। বিশেষ করে রিয়েক্ট (React) এবং রিডাক্স (Redux)-এ স্টেট পরিবর্তনের সময় এটি সবথেকে বেশি ব্যবহৃত হয়।

    ২.  সতর্কতা (Shallow Copy):
        Spread অপারেটর শুধু ফার্স্ট-লেভেলের ডেটা কপি করে। অবজেক্টের ভেতরে যদি আরেকটি অবজেক্ট থাকে (Nested Object), তবে সেটির শুধু রেফারেন্স কপি হয়। গভীর কপি (Deep copy)-এর জন্য এটি যথেষ্ট নয়।

সহজ মনে রাখার উপায়: Spread মানে "ছড়িয়ে দেওয়া"। আপনি যখন ...user লিখছেন, আপনি অবজেক্টের ভেতরের সব প্রপার্টিকে বের করে নতুন প্যাকেটে ছড়িয়ে দিচ্ছেন।
*/