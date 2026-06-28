/*
5.  Microtask vs Macrotask

১.  মূল ধারণা (Definition)
    ইভেন্ট লুপ যখন Callback Queue-এর দিকে তাকায়, তখন সে সব কাজকে সমান চোখে দেখে না। সে Microtask Queue-এর কাজগুলোকে সব সময় আগে শেষ করে, তারপর Macrotask Queue-এর দিকে হাত দেয়।

    Microtask: এগুলো অত্যন্ত উচ্চ অগ্রাধিকারের কাজ। বর্তমান কোড রান হওয়ার সাথে সাথেই (Stack খালি হওয়ার পরপরই) এগুলো রান হতে চায়।

    Macrotask: এগুলো তুলনামূলক কম অগ্রাধিকারের কাজ। ইভেন্ট লুপ এগুলোকে পর্যায়ক্রমে রান করে।

২.  কোনগুলো Microtask আর কোনগুলো Macrotask?
    Macrotasks                  Microtasks
    setTimeout                  Promise.then()
    setInterval                 Promise.catch()
    setImmediate (Node.js-এ)    process.nextTick (Node.js-এ)
    I/O অপারেশন                queueMicrotask

৩.  কেন এটি গুরুত্বপূর্ণ?
    যদি কোনো প্রমিজ (Microtask) এবং setTimeout (Macrotask) একসাথে থাকে, তবে setTimeout কখনোই প্রমিজের আগে রান হবে না। কারণ ইভেন্ট লুপ প্রতিটি Macrotask রান করার পর চেক করে যে Microtask Queue-তে কিছু বাকি আছে কি না।

    একটি উদাহরণ:
    JavaScript
        console.log("Start");

        setTimeout(() => console.log("Macrotask (setTimeout)"), 0);

        Promise.resolve().then(() => console.log("Microtask (Promise)"));

        console.log("End");

        আউটপুট:
        1. Start
        2. End
        3. Microtask (Promise)
        4. Macrotask (setTimeout)

    দেখুন, setTimeout আগে কোড করা সত্ত্বেও, প্রমিজ (Microtask) আগে আউটপুট দিয়েছে।

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  Priority:
        Microtask সবসময় Macrotask-এর আগে রান হয়।

    ২.  Blocking issue:
        যদি আপনি Microtask Queue-তে অসীম লুপ বা খুব ভারী কাজ রাখেন, তবে আপনার Macrotask (যেমন: টাইমার বা এপিআই কল) কখনোই রান হওয়ার সুযোগ পাবে না। তাই Microtask-এ ভারী কাজ করা থেকে বিরত থাকতে হয়।

    ৩.  process.nextTick (Node.js স্পেশাল):
        এটি Microtask-এর চেয়েও শক্তিশালী। এটি সব ধরণের Microtask-এর আগে রান হয়।

৫.  ইন্টারভিউ টিপস:
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "কেন প্রমিজগুলো সাধারণ টাইমারের আগে রান হয়?"

    উত্তর: "এটি জাভাস্ক্রিপ্টের ডিজাইন চয়েস। প্রমিজগুলো যাতে দ্রুত রেসপন্স করতে পারে এবং অসিঙ্ক্রোনাস কাজের চেইনিং দ্রুত শেষ হয়, সেজন্যই সেগুলোকে Microtask হিসেবে রাখা হয়েছে, যাদের অগ্রাধিকার Macrotask-এর চেয়ে বেশি।"
*/