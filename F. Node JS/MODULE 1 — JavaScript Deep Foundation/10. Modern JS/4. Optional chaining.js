/*
4.  Optional Chaining (?.)

১.  সংজ্ঞা (Definition)
    যদি আমরা কোনো অবজেক্টের প্রপার্টি অ্যাক্সেস করতে যাই এবং অবজেক্টটি যদি null বা undefined হয়, তবে সাধারণ জাভাস্ক্রিপ্ট একটি এরর (TypeError) দিয়ে দেয়। Optional chaining আমাদের সেই এরর থেকে রক্ষা করে। এটি এরর দেওয়ার পরিবর্তে শান্তভাবে undefined রিটার্ন করে।

২.  কেন ব্যবহার করবেন? (Real-world Scenario)
    API থেকে ডাটা আসার সময় অনেক সময় ডাটা স্ট্রাকচার অসম্পূর্ণ থাকতে পারে। তখন এই অপারেটরটি সবচেয়ে বেশি প্রয়োজন হয়।

৩.  সিনট্যাক্স ও উদাহরণ
    ১.  সাধারণ অবস্থা (এরর হওয়ার ঝুঁকি):
        JavaScript
            const user = {
                name: 'Rahim'
                // এখানে 'address' প্রপার্টিটি নেই
            };

            console.log(user.address.city); // TypeError: Cannot read property 'city' of undefined

    ২.  Optional Chaining ব্যবহার করে (সেফ পদ্ধতি):
        JavaScript
            const user = {
                name: 'Rahim'
            };

            // এখানে ?. ব্যবহার করায় এটি এরর দিবে না, বরং 'undefined' রিটার্ন করবে
            console.log(user?.address?.city); // আউটপুট: undefined

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  কোড ক্লিননেস:
        আগে আমরা লিখতাম if (user && user.address && user.address.city). এটি অনেক বড় কোড হয়ে যেত। এখন শুধু user?.address?.city লিখলেই যথেষ্ট।

    ২.  ফাংশন কলের ক্ষেত্রেও ব্যবহার:
        শুধু প্রপার্টি নয়, কোনো ফাংশন কল করার সময়ও এটি ব্যবহার করা যায়। যেমন: user.sayHi?.()। যদি sayHi ফাংশনটি না থাকে, তবে কোডটি এরর না দিয়ে কিছুই করবে না।

    ৩.  অ্যারেতে ব্যবহার:
        const firstItem = list?.[0]; — এখানে যদি list খালি বা undefined হয়, তবে এরর হবে না।

৫.  ইন্টারভিউ টিপস:
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "Optional chaining এবং && (Logical AND) এর মধ্যে মূল পার্থক্য কী?"
    উত্তর: && অপারেটর শুধুমাত্র falsy ভ্যালু চেক করে (যেমন: 0, "", false)। কিন্তু Optional chaining বিশেষভাবে শুধুমাত্র null বা undefined চেক করে। ফলে 0 বা false থাকলে এটি নির্ভুলভাবে কাজ করে, যেখানে && অনেক সময় ভুল আউটপুট দিতে পারে।
*/