/*
2.  Destructuring

১.  Objects: Destructuring (ডেস্ট্রাকচারিং)
    সংজ্ঞা: Destructuring হলো ES6-এর একটি শক্তিশালী ফিচার, যার মাধ্যমে আমরা কোনো অবজেক্ট (বা অ্যারো) থেকে খুব সহজে প্রপার্টি বা ভ্যালুগুলোকে বের করে আলাদা ভেরিয়েবলে রাখতে পারি। এটি কোডকে অনেক বেশি সংক্ষিপ্ত এবং রিডেবল করে তোলে।

২.  কিভাবে কাজ করে?
    আগে আমাদের অবজেক্টের প্রতিটি প্রপার্টি আলাদা লাইনে নিতে হতো, এখন এক লাইনেই তা সম্ভব।

৩.  কোড উদাহরণ:
    JavaScript
        const user = {
            name: "Rahim",
            age: 25,
            email: "rahim@example.com"
        };

        // প্রথাগত পদ্ধতি (পুরানো)
        // const name = user.name;
        // const age = user.age;

        // Destructuring (আধুনিক ও সহজ)
        const { name, age, email } = user;

        console.log(name); // "Rahim"
        console.log(age);  // 25

৪.  উন্নত ফিচারসমূহ
    ১.  Alias বা নতুন নাম দেওয়া: যদি আপনি প্রপার্টির নাম পরিবর্তন করে অন্য ভেরিয়েবল নামে রাখতে চান:
        JavaScript
            const { name: fullName } = user;
            console.log(fullName); // "Rahim"

    ২.  ডিফল্ট ভ্যালু (Default Value): যদি অবজেক্টে প্রপার্টি না থাকে, তবে ডিফল্ট ভ্যালু সেট করা যায়:
        JavaScript
            const { name, isAdmin = false } = user;
            console.log(isAdmin); // false

    ৩.  Nested Destructuring: অবজেক্টের ভেতরে যদি আরেকটি অবজেক্ট থাকে:
        JavaScript
            const user = { name: "Rahim", address: { city: "Dhaka" } };
            const { address: { city } } = user;
            console.log(city); // "Dhaka"

৫.  Key Points    
    ১.  কেন ব্যবহার করবেন?
        রিয়েক্ট (React) বা নোড (Node.js) ডেভেলপমেন্টে যখন আমরা props বা req.body থেকে ডেটা বের করি, তখন এটি সবচেয়ে বেশি ব্যবহৃত হয়।

    ২.  পার্থক্য:
        অ্যারো ডিস্ট্রাকচারিং-এ আমরা নাম নিয়ে চিন্তা করি না, পজিশন বা অবস্থান (Index) অনুযায়ী মান বের করি। কিন্তু অবজেক্ট ডিস্ট্রাকচারিং-এ প্রপার্টির নাম অবশ্যই মিল থাকতে হবে।

সহজ মনে রাখার উপায়: Destructuring হলো অবজেক্টকে "ভেঙে ফেলা"। আপনি একটি আস্ত প্যাকেট (অবজেক্ট) থেকে প্রয়োজনীয় জিনিসগুলো (কি-ভ্যালু) বের করে আলাদা আলাদা বাক্সে (ভেরিয়েবল) গুছিয়ে রাখছেন।
*/