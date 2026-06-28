/*
2.  Custom errors

সাধারণত জাভাস্ক্রিপ্টের বিল্ট-ইন এরর (যেমন: SyntaxError, TypeError) অনেক সময় আমাদের নির্দিষ্ট বিজনেসের লজিকের জন্য যথেষ্ট হয় না। Custom Errors ব্যবহার করে আমরা আমাদের অ্যাপ্লিকেশনের জন্য অর্থবহ এবং সুনির্দিষ্ট এরর তৈরি করতে পারি।

১.  কেন কাস্টম এরর ব্যবহার করবেন?
    ১.  রিডিবিলিটি:
        এরর দেখে সহজেই বোঝা যায় সমস্যাটি কোথায় (যেমন: UserNotFoundError, InvalidPaymentError)।

    ২.  এরর হ্যান্ডলিং:
        আপনি নির্দিষ্ট এররের টাইপ অনুযায়ী ভিন্ন ভিন্ন ব্যবস্থা নিতে পারেন।

    ৩.  ডিবাগিং:
        স্টম এরর ব্যবহারের ফলে এরর লগার (Error Logger) থেকে দ্রুত বাগ খুঁজে বের করা যায়।

২.  তৈরির পদ্ধতি
    জাভাস্ক্রিপ্টের Error ক্লাসকে extends করে আমরা নিজের কাস্টম এরর ক্লাস তৈরি করতে পারি।
    JavaScript
            class ValidationError extends Error {
                constructor(message) {
                    super(message); // প্যারেন্ট Error ক্লাসের কনস্ট্রাক্টর কল
                    this.name = "ValidationError"; // এররের নাম সেট করা
                    this.statusCode = 400; // বাড়তি প্রপার্টি যোগ করা
                }
            }

            // ব্যবহারের নিয়ম
            function validateUser(user) {
                if (!user.name) {
                    throw new ValidationError("Username is required!");
                }
            }

            try {
                validateUser({});
            } catch (error) {
                if (error instanceof ValidationError) {
                    console.error(`${error.name}: ${error.message} (Status: ${error.statusCode})`);
                } else {
                    console.error("Unknown Error:", error);
                }
            }
৩.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  instanceof অপারেটর:
        কাস্টম এরর হ্যান্ডল করার সময় instanceof ব্যবহার করা খুব জরুরি। এটি নিশ্চিত করে যে ক্যাচ করা এররটি আপনার তৈরি করা নির্দিষ্ট ক্লাসের কি না।

    ২.  Error.captureStackTrace:
        নোড জেএস (Node.js)-এ কাস্টম এরর তৈরি করার সময় Error.captureStackTrace(this, this.constructor) ব্যবহার করা ভালো। এটি এররের ট্রেস থেকে আপনার কাস্টম ক্লাসের কনস্ট্রাক্টরকে বাদ দিয়ে সরাসরি সঠিক লাইনের এরর লোকেশন দেখায়।

    ৩.  পেশাদারিত্ব:
        বড় এন্টারপ্রাইজ লেভেলের অ্যাপ্লিকেশনে (যেমন: Express.js এপিআই) সব সময় কাস্টম এরর ক্লাস ব্যবহার করা হয় যাতে ক্লায়েন্টকে সুন্দরভাবে এরর মেসেজ পাঠানো যায়।

৪.  ইন্টারভিউ টিপস:
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "কেন আমি সাধারণ throw 'Error!' বা throw new Error('Something') ব্যবহার করব না?"

    উত্তর: "সাধারণ এরর ব্যবহার করলে এরর টাইপ ফিল্টার করা কঠিন হয়ে যায়। কিন্তু কাস্টম এরর ক্লাস তৈরি করলে আমরা এররের ধরণ (যেমন: Auth, DB, Validation) আলাদা করে শনাক্ত করতে পারি এবং সেই অনুযায়ী ভিন্ন ভিন্ন রেসপন্স (যেমন: HTTP স্ট্যাটাস কোড ৪০১, ৪০০, ৫০০) পাঠাতে পারি।"
*/