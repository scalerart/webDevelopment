/*
📘  JavaScript Switch Statement
🔹  Switch কী?
    JavaScript-এ switch একটি decision making statement।
    এটি কোনো একটি expression-এর মান (value) একাধিক case এর সাথে মিলিয়ে দেখে।
    যে case মিলে যাবে, তার কোড execute হবে।

👉 সহজভাবে বললে:
    যখন একটি ভেরিয়েবলের জন্য অনেকগুলো শর্ত চেক করতে হয়, তখন if-else এর বদলে switch ব্যবহার করলে কোড পরিষ্কার ও সহজ হয়।

🔹 Switch এর গঠন
switch(expression) {
  case value1:
    // যদি expression === value1 হয়
    break;

  case value2:
    // যদি expression === value2 হয়
    break;

  default:
    // কোন case না মিললে এটা চলবে
}  

🔹  Switch কীভাবে কাজ করে?
    1.  expression → যেটার মান compare হবে।
    2.  প্রতিটি case → expression এর মানের সাথে মিলিয়ে দেখা হবে।
    3.  break → মিল পাওয়া গেলে case-এর কোড চালানোর পর switch থেমে যাবে।
    4.  default → কোন case না মিললে এটি চলবে (Optional)।

🔹  Switch কয় ধরনের?
    আসলে switch একটাই, তবে ব্যবহার ভিন্ন ভিন্নভাবে করা যায় 👇

1. Simple Switch
let day = 3;

switch(day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}
➡️ এখানে day = 3, তাই Output হবে "Tuesday"।

2.  Switch with Fall-through (break ছাড়া)
let fruit = "apple";

switch(fruit) {
  case "apple":
    console.log("Apple is red");
  case "banana":
    console.log("Banana is yellow");
  case "orange":
    console.log("Orange is orange");
  default:
    console.log("Unknown fruit");
}
➡️ এখানে fruit = "apple", তাই apple মিলে যাবে, কিন্তু break নাই, ফলে নিচের সব case ও execute হবে।

3. Multiple Cases একই কাজ করবে
let color = "crimson";

switch(color) {
  case "red":
  case "maroon":
  case "crimson":
    console.log("This is a red family color");
    break;
  default:
    console.log("Unknown color");
}
➡️ এখানে ৩টি case একই কাজ করছে।

🔹 Default Case
যদি কোনো case না মিলে, তখন default চালু হবে।

let grade = "E";

switch(grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid Grade");
}
➡️ এখানে grade = "E", তাই Output হবে "Invalid Grade"।

📝  সারসংক্ষেপ
*   Switch একটাই, তবে ব্যবহারের ধরন ভিন্ন হতে পারে।
*   মূলত তিনভাবে ব্যবহার হয়:
    1.  Simple switch
    2.  Fall-through (break ছাড়া)
    3.  Multiple cases একই কাজ করবে
*   default ব্যবহার করলে কোড নিরাপদ হয়।
*/