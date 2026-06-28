/*
5.  some

১.  মূল ধারণা (Definition)
    some() মেথডটি পরীক্ষা করে যে, অ্যারের অন্তত একটি এলিমেন্ট আপনার দেওয়া শর্ত (condition) পূরণ করে কি না।
        ১.  যদি অন্তত একটি এলিমেন্ট শর্ত পূরণ করে, তবে এটি true রিটার্ন করে।
        ২.  যদি একটিও না করে, তবে এটি false রিটার্ন করে।

    এটি একটি Boolean মেথড।

২.  সিনট্যাক্স (Syntax)
    JavaScript
        const result = array.some((element, index, array) => {
            return condition;
        });

৩.  উদাহরণের মাধ্যমে বুঝা
    ক)  সংখ্যা পরীক্ষা করা:
        JavaScript
            const numbers = [1, 5, 8, 3, 10];

            // চেক করছি সংখ্যাগুলোর মধ্যে কোনোটি ১০-এর বড় কি না
            const hasLargeNumber = numbers.some(num => num > 10);
            console.log(hasLargeNumber); // আউটপুট: false

            // চেক করছি কোনোটি ৫-এর বড় কি না
            const hasNumberOverFive = numbers.some(num => num > 5);
            console.log(hasNumberOverFive); // আউটপুট: true

    খ)  রিয়েল লাইফ সিনারিও (যেমন: কোনো ইউজার অ্যাডমিন কি না):
        JavaScript
            const users = [
                { name: 'Rahim', isAdmin: false },
                { name: 'Karim', isAdmin: true },
                { name: 'Sakib', isAdmin: false }
            ];

            const hasAdmin = users.some(user => user.isAdmin);
            console.log(hasAdmin); // আউটপুট: true

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  শর্ট সার্কিট (Short-circuiting):
        some() মেথডটি লুপ চালানোর সময় যখনই প্রথমবার true পায়, তখনই এটি লুপ বন্ধ করে দেয় এবং সাথে সাথে true রিটার্ন করে। বাকি এলিমেন্টগুলো সে আর চেক করে না। এটি পারফরম্যান্সের জন্য খুবই কার্যকর।

    ২.  খালি অ্যারে: যদি অ্যারেটি খালি হয়, তবে some() সবসময় false রিটার্ন করবে।
    ৩.  find বনাম some: * find() পুরো এলিমেন্টটি রিটার্ন করে (অথবা undefined)।
    ৪.  some() শুধু নিশ্চিত করে যে এলিমেন্টটি আছে কি নেই (true/false)।
*/