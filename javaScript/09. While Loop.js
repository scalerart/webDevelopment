/*
=>  While Loop কী?
    while loop হলো এমন একটা লুপ যা শর্ত (condition) true থাকা পর্যন্ত বারবার চলতে থাকে।
    মানে:
    1.  প্রথমে একটা শর্ত দেওয়া হয়।
    2.  যদি শর্ত সত্যি হয়, তাহলে লুপের ভিতরের কাজ (code block) চালু হবে।
    3.  আবার শর্ত পরীক্ষা করবে।
    4.  শর্ত false হয়ে গেলে লুপ বন্ধ হয়ে যাবে।

=>  Syntax (গঠন)
    while (condition) {
        বারবার চলতে থাকা কোড
    }

=>  সাধারণ উদাহরণ
    ধরি আমরা 1 থেকে 5 পর্যন্ত সংখ্যা print করতে চাই:
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
    এখানে কাজের ধাপ:
    1.  প্রথমে i = 1
    2.  i <= 5 → true (তাই কোড চালাবে)
    3.  console.log(i) → 1 দেখাবে
    4.  i++ → এখন i = 2
    5.  আবার শর্ত চেক করবে (২ <= ৫) → true
    6.  এভাবে চলতে থাকবে যতক্ষণ না i = 6 হয়।
    7.  6 <= 5 → false, তাই লুপ বন্ধ হবে।    

=>  Infinite Loop (ভুল করলে)
    যদি শর্ত কখনো false না হয়, তাহলে লুপ চলতেই থাকবে। একে বলে infinite loop।
    let x = 1;
    while (x <= 5) {
        console.log(x); // এটা কখনো থামবে না কারণ x এর মান বাড়াচ্ছি না
    }
    =>  তাই সবসময় নিশ্চিত হওয়া দরকার যে কোনো এক সময় condition false হবে।

=>  উদাহরণ ২: সংখ্যা যোগফল বের করা
    let sum = 0;
    let num = 1;
    while (num <= 5) {
        sum = sum + num;
        num++;
    }
    console.log("Total:", sum); // Output: 15
    =>  এখানে লুপ 1+2+3+4+5 = 15 হিসাব করেছে।

=>  ছোট গল্প দিয়ে বুঝি
    ভাবো তুমি একটা গেম খেলছো।
    1.  শর্ত হলো: যতক্ষণ তোমার Life > 0, তুমি খেলতে পারবে।
    2.  Life 0 হয়ে গেলে → গেম বন্ধ।
    3.  ঠিক সেভাবেই While loop চলে যতক্ষণ শর্ত true থাকে।

=>  সংক্ষেপে
    1.  While loop = condition true থাকা পর্যন্ত চালু থাকে।
    2.  condition false হলে থেমে যায়।
    3.  ভুল করলে infinite loop হয়ে যাবে।
*/

var i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

var sum = 0;
var num = 1;
while (num <= 10) {
    sum = sum + num;
    num++;
}
console.log("Total:", sum);