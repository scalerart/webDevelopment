for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log("I Love JavaScript");
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Total:", sum);

let multipalication = 1;
for (let i = 1; i <= 5; i++) {
    multipalication *= i;
}
console.log("Mul:", multipalication);

for (let i = 1; i <= 30; i++) {
    if (i % 6 === 0) {
        console.log(i);
    }
}

let fruits = ["Mango", "Banana", "Apple"];
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}

let name = "ABDUL KADIR";
let reversed = "";
for (let i = name.length-1; i >= 0; i--) {
    reversed += name[i];
}
console.log(reversed);

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

let Total = 0;
for (let i = 1; i <= 100; i++) {
    Total += i;
}
console.log("==",Total);

let numbers = [10, 20, 30, 40, 50];
let sumarr = 0;
for (let i = 0; i < numbers.length; i++) {
    sumarr += numbers[i];
}
console.log("Total:",sumarr);

let nums = [12, 56, 89, 34];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log(max);

let n = 8;
for (let i = 1; i <= 10; i++) {
    console.log (`${n} X ${i} = ${i * n}` ) 
}