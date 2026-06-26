/*
6.  every

১.  মূল ধারণা (Definition)
    every() মেথডটি পরীক্ষা করে যে অ্যারের প্রতিটি উপাদান আপনার দেওয়া শর্ত (condition) পূরণ করে কি না।
        ১.  যদি সবগুলো উপাদান শর্ত পূরণ করে, তবে এটি true রিটার্ন করে।
        ২.  যদি একটি উপাদানও শর্ত পূরণ করতে ব্যর্থ হয়, তবে এটি সাথে সাথে false রিটার্ন করে।

    এটি একটি Boolean মেথড।

২.  সিনট্যাক্স (Syntax)
    JavaScript
        const result = array.every((element, index, array) => {
            return condition;
        });

৩.  উদাহরণের মাধ্যমে বুঝা
    ক)  সব সংখ্যা কি ১০-এর চেয়ে বড়?
        JavaScript
            const numbers = [12, 15, 20, 30];

            const allAboveTen = numbers.every(num => num > 10);
            console.log(allAboveTen); // আউটপুট: true

            const numbers2 = [5, 12, 20];
            const allAboveTen2 = numbers2.every(num => num > 10);
            console.log(allAboveTen2); // আউটপুট: false (কারণ ৫ শর্ত পূরণ করেনি)

    খ)  রিয়েল লাইফ সিনারিও (যেমন: সকল স্টুডেন্ট কি পাস করেছে?):
        JavaScript
            const results = [
                { name: 'Rahim', score: 80 },
                { name: 'Karim', score: 75 },
                { name: 'Sakib', score: 40 } // ফেল!
            ];

            const allPassed = results.every(student => student.score >= 50);
            console.log(allPassed); // আউটপুট: false

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  শর্ট সার্কিট (Short-circuiting):
        every() মেথডটি লুপ চালানোর সময় যখনই প্রথম কোনো এলিমেন্ট পায় যা শর্ত পূরণ করছে না (ফালস), তখনই এটি লুপ থামিয়ে false রিটার্ন করে। এটি পারফরম্যান্সের জন্য দারুণ।

    ২.  খালি অ্যারে:
        যদি অ্যারেটি খালি হয়, তবে every() সবসময় true রিটার্ন করবে (একে বলা হয় "Vacuous Truth")।

    ৩.  তুলনা:
        ১.  some(): অন্তত একটি শর্ত পূরণ করলেই true।
        ২.  every(): সবগুলোই শর্ত পূরণ করতে হবে, তবেই true।
*/