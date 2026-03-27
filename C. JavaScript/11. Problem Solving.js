//  Problem_01:  Even or Odd
//  =>  একটি সংখ্যা even না odd তা বের করো।
let number = 4;
if (number % 2 === 0) {
    console.log('This is even number');
} else {
    console.log('This is odd number');
}

//  Problem_02:  Positive, Negative, or Zero
//  =>  একটি সংখ্যা positive, negative নাকি zero তা চেক করো।
let num = -5;
if (num > 0) {
    console.log('This is a positive number');
} else if (num < 0) {
    console.log('This is a nagative number');
} else {
    console.log('This number is Zero');
}

//  Problem_03: Largest of Two Numbers
//  =>  দুইটা সংখ্যার মধ্যে বড় সংখ্যাটা বের করো।
let num1 = 99;
let num2 = 99;
if (num1 > num2) {
    console.log('num1 is a big number');
} else if (num1 < num2) {
    console.log('num2 is a big number');
} else {
    console.log('Both numbers are equal');
}

//  Problem 4:
//  ১ থেকে N পর্যন্ত সংখ্যার যোগফল বের করো (loop দিয়ে)
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

//  Problem 5:
//  যেকোনো একটি সংখ্যার multiplication table প্রিন্ট করো
let multiplication = 10;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplication} X ${i} = ${multiplication * i}`);
}

//  Problem 6:
//  ১–৫০ এর মধ্যে কয়টা even সংখ্যা আছে তা বের করো
let count = 0;
for (let i = 2; i <= 50; i += 2) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(count);

//  Problem 7:
//  ১ থেকে ১০০ পর্যন্ত শুধু even সংখ্যাগুলোর যোগফল বের করো।
let evenSum = 0;
for (let i = 2; i <= 100; i += 2) {
    evenSum += i;
}
console.log(evenSum);

//  Problem 8:
//  তুমি নিজের নাম বা অন্য string reverse করবে loop ব্যবহার করে।
let name = "ABDUL KADIR";
let reversed = "";
for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
}
console.log(reversed);

//  Problem 9:
//  একটি array থেকে সবচেয়ে বড় সংখ্যা বের করো
let numbers = [23, 56, 12, 89, 34, 67];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

//  Problem 10:
//  matrix এর সব সংখ্যার যোগফল বের করা।
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let add = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        add += matrix[i][j];
    }
}
console.log(add);


//  Problem 11: Factorial
function fact(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
const result = fact(10);
console.log(result);

//  Problem 12: Remove Duplicate
const friendList = ["Rohim", "Rakib", "Rony", "Ratul", "Sujon", "Kamrul", "Roton", "Rakib", "Ratul", "Kamrul", "Rohim"]

function remobeDuplicate(friendName) {
    newList = [];
    for (let i = 0; i < friendName.length; i++) {
        const name = friendName[i];
        if (newList.includes(name) === false) {
            newList.push(name);
        }
    }
    return newList
}
const newFriendList = remobeDuplicate(friendList);
console.log(newFriendList);
