/*
6.  Fetch API

Fetch API হলো জাভাস্ক্রিপ্টের একটি আধুনিক এবং শক্তিশালী মেকানিজম, যার মাধ্যমে আমরা নেটওয়ার্ক রিকোয়েস্ট (Network Request) পাঠাতে পারি এবং সার্ভার থেকে ডাটা রিট্রিভ (Retrieve) করতে পারি। এটি পুরনো XMLHttpRequest (AJAX)-এর আধুনিক বিকল্প।


১. সংজ্ঞা (Definition)
    Fetch API একটি প্রমিজ-ভিত্তিক (Promise-based) ইন্টারফেস, যা খুব সহজে সার্ভার থেকে ডাটা আনা বা পাঠানো যায়। এটি কোডকে পরিষ্কার রাখে এবং অসিঙ্ক্রোনাস ডাটা হ্যান্ডেল করতে প্রমিজ চেইনিং ব্যবহার করে।

২.  কেন এটি ব্যবহার করব?
    ১.  প্রমিজ-ভিত্তিক: এটি সরাসরি প্রমিজ রিটার্ন করে, তাই async/await এর সাথে এটি দারুণভাবে কাজ করে।
    ২.  সহজ সিনট্যাক্স: এর কোড অনেক ছোট এবং রিডেবল।
    ৩.  ফ্লেক্সিবল: এটি JSON, টেক্সট, বা ব্লব (Blob) ডাটা টাইপ সহজে প্রসেস করতে পারে।

৩.  সিনট্যাক্স ও উদাহরণ
    সাধারণ ব্যবহার:

    JavaScript
        fetch('https://api.example.com/data')
        .then(response => response.json()) // ডাটাটিকে JSON ফরম্যাটে কনভার্ট করা
        .then(data => console.log(data))   // ডাটা নিয়ে কাজ করা
        .catch(error => console.error('Error:', error)); // এরর হ্যান্ডলিং
        async / await ব্যবহার করে (বেশি জনপ্রিয়):

    JavaScript
        async function getData() {
            try {
                const response = await fetch('https://api.example.com/data');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    ১.  HTTP Error Handling:
        এটি একটি কমন ভুল। fetch() তখনই রিজেক্ট (reject) হয় যদি নেটওয়ার্ক ফেইল করে। সার্ভার থেকে 404 বা 500 এরর আসলে কিন্তু fetch রিজেক্ট হয় না। সেজন্য response.ok চেক করা বাধ্যতামূলক।

    ২.  Default Method:
        ডিফল্টভাবে fetch একটি GET রিকোয়েস্ট পাঠায়। অন্য মেথড (POST, PUT, DELETE) পাঠানোর জন্য কনফিগারেশন অবজেক্ট দিতে হয়।

    ৩.  CORS:
        ব্রাউজারে Fetch ব্যবহার করলে CORS (Cross-Origin Resource Sharing) পলিসি মাথায় রাখতে হয়।

৫.  ইন্টারভিউ টিপস:
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "fetch() এবং Axios-এর মধ্যে পার্থক্য কী?"

    উত্তর: "Fetch হলো জাভাস্ক্রিপ্টের বিল্ট-ইন ব্রাউজার এপিআই, এর জন্য আলাদা কিছু ইনস্টল করতে হয় না। অন্যদিকে, Axios একটি থার্ড-পার্টি লাইব্রেরি। Axios স্বয়ংক্রিয়ভাবে JSON ডাটা কনভার্ট করে দেয় এবং এটি HTTP এররগুলোকে (যেমন 404) সরাসরি catch ব্লকে পাঠাতে পারে, যা fetch নিজে থেকে পারে না।"
*/