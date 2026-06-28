/*
১.  সংজ্ঞা (Definition)
    Template Literals হলো ব্যাকটিক (`) চিহ্ন ব্যবহার করে স্ট্রিং লেখার একটি আধুনিক পদ্ধতি। এটি স্ট্রিংয়ের ভেতরে সরাসরি ভেরিয়েবল বা এক্সপ্রেশন যুক্ত করার সুবিধা দেয়, যা কোডকে আরও পড়ার যোগ্য (Readable) এবং পরিচ্ছন্ন করে তোলে।

২.  কেন ব্যবহার করবেন? (Advantages)
    ১.  String Interpolation: স্ট্রিংয়ের ভেতরে সহজে ভেরিয়েবল বসানো যায়।
    ২.  Multi-line Strings: এন্টার চাপ দিয়ে সহজেই একাধিক লাইনে স্ট্রিং লেখা যায়।
    ৩.  Expression Evaluation: স্ট্রিংয়ের ভেতরেই গাণিতিক বা লজিক্যাল অপারেশন করা যায়।

৩.  সিনট্যাক্স ও উদাহরণ
    ক)  ভেরিয়েবল যুক্ত করা (Interpolation):
        আগে স্ট্রিং জোড়া দিতে + চিহ্ন ব্যবহার করতে হতো, যা ছিল বেশ ঝামেলার। এখন ব্যবহার করি ${ }।
        JavaScript
            const name = "Rahim";
            const age = 25;

        পুরাতন পদ্ধতি
            const messageOld = "My name is " + name + " and I am " + age + " years old.";

        Template Literal (আধুনিক)
            const messageNew = `My name is ${name} and I am ${age} years old.`;
            console.log(messageNew); // আউটপুট: My name is Rahim and I am 25 years old.

    খ)  মাল্টি-লাইন স্ট্রিং (Multi-line Strings):
        আগে নতুন লাইন নিতে \n ব্যবহার করতে হতো। এখন সরাসরি এন্টার চাপ দিলেই হয়।
        JavaScript
            const bio = `Name: Rahim
            Profession: Developer
            Location: Dhaka`;

            console.log(bio);

    গ)  এক্সপ্রেশন ব্যবহার করা:
        ${ } এর ভেতরে আপনি সরাসরি ফাংশন কল বা ক্যালকুলেশন করতে পারেন।
        JavaScript
            const a = 10;
            const b = 20;

            console.log(`Sum of a and b is: ${a + b}`); // আউটপুট: Sum of a and b is: 30

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  কী-বোর্ড শর্টকাট:
        এটি সিঙ্গেল কোট বা ডাবল কোট নয়, এটি Backtick (`) যা সাধারণত কিবোর্ডের ১-এর বাম পাশে (Esc-এর নিচে) থাকে।

    ২.  পঠনযোগ্যতা:
        ইন্টারভিউয়ার যদি জিজ্ঞেস করেন কেন এটি ব্যবহার করবেন, বলবেন—"এটি কোডকে ক্লিন রাখে এবং কনক্যাটিনেশন (concatenation) এর সময় + চিহ্নের খিচুড়ি পাকানো থেকে মুক্তি দেয়।"
*/