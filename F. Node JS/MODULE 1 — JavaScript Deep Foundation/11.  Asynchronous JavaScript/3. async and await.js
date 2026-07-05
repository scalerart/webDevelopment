/*
3.  async / await

১.  সংজ্ঞা (Definition)
    async: একটি ফাংশনের আগে async কিওয়ার্ড বসালে সেই ফাংশনটি সবসময় একটি Promise রিটার্ন করবে।

    await: এটি শুধুমাত্র একটি async ফাংশনের ভেতরে ব্যবহার করা যায়। এটি কোনো প্রমিজের ফলাফল আসার জন্য অপেক্ষা করে (Wait করে) এবং প্রমিজটি সমাধান (Resolve) না হওয়া পর্যন্ত পরের লাইনের কোড রান হতে দেয় না।

২.  কেন এটি ব্যবহার করব?
    প্রমিজে .then() এবং .catch() এর চেইন ব্যবহার করতে করতে কোড কিছুটা জটিল মনে হতে পারে। async/await ব্যবহার করলে আমরা সাধারণ try...catch ব্লকের মাধ্যমেই এরর হ্যান্ডেল করতে পারি এবং কোডটি একদম সিধা লাইনে লেখা যায়।

৩.  উদাহরণের মাধ্যমে বুঝা
    আগের প্রমিজ চেইনিং (পুরানো স্টাইল):
    JavaScript
        function fetchData() {
            return new Promise(resolve => setTimeout(() => resolve("Data Received"), 1000));
        }

        // প্রমিজ চেইনিং
        fetchData().then(data => console.log(data));

    async / await (আধুনিক স্টাইল):

    JavaScript
        async function getData() {
            console.log("Fetching...");
            const data = await fetchData(); // এখানে অপেক্ষা করবে যতক্ষণ ডাটা না আসে
            console.log(data);
        }

        getData();

৪.  ইন্টারভিউতে মনে রাখার মতো পয়েন্ট (Key Takeaways)
    এরর হ্যান্ডলিং: যেহেতু async/await সরাসরি try...catch সাপোর্ট করে, তাই এটি এরর হ্যান্ডেল করার জন্য সবচেয়ে আদর্শ।

    JavaScript
        async function getData() {
            try {
                const data = await fetchData();
                console.log(data);
            } catch (error) {
                console.log("Error:", error);
            }
        
            }
    একসাথে অনেক কাজ (Parallel): যদি একাধিক অসিঙ্ক্রোনাস কাজ থাকে, তবে await ব্যবহার করার সময় সতর্ক থাকতে হবে। প্রতিবার await দিলে আগেরটি শেষ হওয়ার জন্য অপেক্ষা করবে। একসাথে সব রান করতে Promise.all() ব্যবহার করতে হয়।

৫.  ইন্টারভিউ টিপস:
    ইন্টারভিউয়ার জিজ্ঞেস করতে পারেন— "async/await কি প্রমিজের বিকল্প?"

    উত্তর: "না, async/await প্রমিজের কোনো বিকল্প নয়; বরং এটি প্রমিজের ওপর ভিত্তি করেই তৈরি একটি 'Syntactic Sugar'। এর মানে হলো, এটি প্রমিজ ব্যবহারের একটি আরও সুন্দর এবং পরিষ্কার উপায়।"
*/