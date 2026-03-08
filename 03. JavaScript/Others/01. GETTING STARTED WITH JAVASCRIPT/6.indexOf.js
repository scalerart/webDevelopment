var promise = "I promise i will work hard to become a programmer";
console.log (promise.indexOf('hard'))
console.log (promise.toLocaleLowerCase());
console.log (promise.toLocaleUpperCase())
console.log (promise.split(' '))
/*
JavaScript এ indexOf() হচ্ছে একটি method, যা কোনো String বা Array এর ভেতরে নির্দিষ্ট মানটি আছে কিনা খুঁজে বের করে।
এটি প্রথম পাওয়া অবস্থানের index (position) রিটার্ন করে।
যদি মানটি না পায় তাহলে -1 রিটার্ন করে।
১.  String এ indexOf()
    কোনো টেক্সট (string) এর ভেতরে substring খুঁজতে ব্যবহার হয়।*/
    let text = "I love JavaScript";
    console.log(text.indexOf("love"));   // Output: 2
    console.log(text.indexOf("Java"));   // Output: 7
    console.log(text.indexOf("Python")); // Output: -1 (মিলে নাই)
/*
২.  Array এ indexOf()
    কোনো Array এর মধ্যে কোনো element এর position খুঁজতে ব্যবহার হয়।*/
    let numbers = [10, 20, 30, 40, 50];
    console.log(numbers.indexOf(30));  // Output: 2
    console.log(numbers.indexOf(100)); // Output: -1 (পাওয়া যায়নি)
/*
৩.  কখন ব্যবহার করবেন?
    1.  যখন কোনো string এ একটি শব্দ/অক্ষর আছে কিনা জানতে হবে।
    2.  যখন array থেকে কোনো মানের index খুঁজে বের করতে হবে।
    3.  কোনো element আছে কিনা চেক করতে চাইলে (indexOf(...) !== -1) ব্যবহার করা যায়।

৪.  সুবিধা ও সীমাবদ্ধতা
    সুবিধা → সহজভাবে খোঁজার জন্য খুবই কার্যকর।
    সীমাবদ্ধতা → সবসময় প্রথম মিল পাওয়া index দেয়।
    (যদি একাধিক থাকে তবে শুধু প্রথমটিই পাওয়া যাবে)।

সমাধান হিসেবে lastIndexOf() আছে, যা শেষ থেকে খুঁজে index দেয়। */