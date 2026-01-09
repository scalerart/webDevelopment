// 1.  Number to String
// Rule-1
var number = 15;
number = ''+number;
console.log(typeof number)

// 2.  String to Number
// Rule-1
var number1 = "30";
number1 = parseInt(number1);
console.log(typeof number1);

// Rule-2
var number2 = "40";
number2 = +number2;
console.log(typeof number2);

// Rule-3
var number3 = "45.5"
number3 = parseFloat(number3)
console.log(typeof number3)

/*
১.  Integer (পূর্ণসংখ্যা)
    Integer মানে হলো পূর্ণ সংখ্যা – যেগুলোর মধ্যে কোনো দশমিক থাকে না।
    যেমন:
    let a = 10;
    let b = -25;
    let c = 0;
    এগুলো whole number (পূর্ণসংখ্যা)।

বৈশিষ্ট্য:
    1.  ধনাত্মক (positive) হতে পারে → 5, 10, 100
    2.  ঋণাত্মক (negative) হতে পারে → -1, -20
    3.  শূন্য (zero) ও integer ধরা হয় → 0

২.  Float (দশমিক সংখ্যা)
    Float মানে হলো দশমিক ভগ্নাংশযুক্ত সংখ্যা।
    যেমন:    
    let x = 3.14;
    let y = -7.5;
    let z = 0.99;
    এগুলোকে floating point number বলা হয় কারণ এগুলোর মধ্যে দশমিক বিন্দু (.) "ভেসে" থাকতে পারে যেকোনো জায়গায়।

বৈশিষ্ট্য:
    1.  ধনাত্মক বা ঋণাত্মক হতে পারে।
    2.  দশমিক বিন্দুর পর অনেক digit থাকতে পারে।

সারসংক্ষেপ:
    1.  Integer = পূর্ণসংখ্যা (… -3, -2, -1, 0, 1, 2, 3 …)
    2.  Float = দশমিক সংখ্যা (1.5, 3.14, -7.25) */