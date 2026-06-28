/*
১.  Object Destructuring
    অবজেক্ট থেকে প্রপার্টিগুলোকে তাদের নামের সাথে মিলিয়ে বের করার প্রক্রিয়া।
    
    উদাহরণ:
    JavaScript
        const user = {
            name: 'Rahim',
            age: 25,
            city: 'Dhaka'
        };

    সাধারণ পদ্ধতি
        // const name = user.name;
        // const age = user.age;

    ডিস্ট্রাকচারিং পদ্ধতি
        const { name, age, city } = user;
        console.log(name); // Rahim
        console.log(age);  // 25

    ১.  কেন ব্যবহার করবেন?
        বারবার user.name, user.age না লিখে সরাসরি ভেরিয়েবল হিসেবে ব্যবহার করা যায়, যা কোডকে অনেক ক্লিন করে।

    ২.  Aliases (নাম পরিবর্তন):
        আপনি চাইলে ভেরিয়েবলের নাম পরিবর্তন করতে পারেন: const { name: userName } = user; এখন userName ভেরিয়েবলে নাম থাকবে।

২.  Array Destructuring
    অ্যারে থেকে ভ্যালুগুলো তাদের পজিশন বা ইনডেক্স অনুযায়ী বের করার প্রক্রিয়া।

    উদাহরণ:
    JavaScript
        const colors = ['red', 'green', 'blue'];

    পজিশন অনুযায়ী ভেরিয়েবল অ্যাসাইন করা
        const [first, second] = colors;

        console.log(first);  // red
        console.log(second); // green

    টিপস: যদি কোনো ভ্যালু স্কিপ করতে চান, তবে কমা (,) ব্যবহার করুন: const [first, , third] = colors; (এটি 'green' কে স্কিপ করবে)।

৩.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  Default Values:
        যদি অবজেক্ট বা অ্যারেতে কোনো প্রপার্টি না থাকে, তবে ডিফল্ট ভ্যালু সেট করে রাখা যায়।

        const { name, isAdmin = false } = user;

    ২.  Nested Destructuring:
        অবজেক্টের ভেতরে অবজেক্ট থাকলে তার ভেতরেও ডিস্ট্রাকচার করা সম্ভব। এটি ইন্টারভিউতে খুব বেশি জিজ্ঞেস করা হয়।

        JavaScript
            const person = { name: 'Rahim', info: { age: 25 } };
            const { info: { age } } = person;
            console.log(age); // 25

    ৩.  ফাংশন প্যারামিটারে ব্যবহার:
        সরাসরি ফাংশনের আর্গুমেন্ট হিসেবে অবজেক্ট ডিস্ট্রাকচারিং করা যায়, যা API রেসপন্স হ্যান্ডেল করার সময় দারুণ কাজে লাগে।

        JavaScript
            function displayUser({ name, age }) {
                console.log(`${name} is ${age} years old`);
            }

আপনার জন্য ছোট্ট চ্যালেঞ্জ:
    নিচের অবজেক্টটি থেকে id এবং email ডিস্ট্রাকচার করে বের করুন এবং role এর ডিফল্ট ভ্যালু হিসেবে 'guest' সেট করুন:
    const userData = { id: 101, email: 'test@example.com' };
*/