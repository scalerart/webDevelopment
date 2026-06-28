/*
4.  Fetch

Fetch API হলো আধুনিক জাভাস্ক্রিপ্টের একটি বিল্ট-ইন মেথড, যা দিয়ে আমরা সার্ভার থেকে ডাটা রিকোয়েস্ট (Network Request) করতে পারি। এটি প্রমিজ (Promise) ভিত্তিক এবং এটি XMLHttpRequest-এর একটি আধুনিক বিকল্প।

১.  Fetch কীভাবে কাজ করে?
    fetch() ফাংশনটি একটি রিকোয়েস্ট পাঠায় এবং একটি Promise রিটার্ন করে। সেই প্রমিজ সফল (resolve) হলে আমরা ডাটা পাই।

২.  কোড উদাহরণ (GET রিকোয়েস্ট)
    JavaScript
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            // রেসপন্সটি JSON কি না তা চেক করা
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // ডাটা পার্স করা
        })
        .then(data => console.log(data)) // ডাটা পাওয়া গেল
        .catch(error => console.error('Error:', error)); // এরর হ্যান্ডলিং

৩.  Async/Await (আধুনিক পদ্ধতি)
    বর্তমানে async/await ব্যবহার করা অনেক বেশি ক্লিন এবং সহজ।

    JavaScript
        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Fetch vs Axios)
    ইন্টারভিউতে এটি সবথেকে জনপ্রিয় প্রশ্ন।
    0.  বৈশিষ্ট্য
        Fetch API
        Axios

    ১.  লাইব্রেরি
        ব্রাউজারে ইন-বিল্ট (কোনো ইন্সটল লাগে না)।
        বাইরের লাইব্রেরি (ইন্সটল করতে হয়)।

    ২.  JSON ডাটা
        response.json() নিজে লিখতে হয়।
        অটোমেটিক JSON ডাটা কনভার্ট করে দেয়।

    ৩.  Error Handling
        HTTP এরর (যেমন 404/500) কে এরর হিসেবে গণ্য করে না।
        সব ধরনের এরর (status code >= 400) ক্যাচ করে।

    ৪.  Request Timeout
        বিল্ট-ইন ফিচার নেই।
        বিল্ট-ইন টাইমআউট ফিচার আছে।

৫.  ইন্টারভিউ টিপস
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "Fetch ব্যবহার করার সময় কেন আমাদের response.json() আলাদা করে কল করতে হয়?"

    উত্তর: "Fetch সরাসরি সম্পূর্ণ ডাটা রিটার্ন করে না। প্রথম ধাপে এটি শুধুমাত্র HTTP রেসপন্স অবজেক্টটি পায় (যেখানে হেডার এবং স্ট্যাটাস থাকে)। বডিটি একটি 'ReadableStream' হিসেবে থাকে। তাই response.json() মেথডটি ব্যবহার করে সেই স্ট্রিম থেকে ডাটাটি বের করে JSON অবজেক্টে রূপান্তর করতে হয়।"    
*/