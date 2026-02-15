/**
 * 1. const --> value not going to change
 * 2. let --> value might change
 * 3. var --> should not use (unless exceptional cases)
*/

const price = 1500; //number
// console.log(price);
const name = 'Kirkir ali khan'; //string
const isPoor = false; //boolean
const friends = ['Elon', 'Mark', 'Bill', 'Jeff']
const student = { class: 9, name: 'Tomi Khan', age: 17, address: 'kochu khet' }

// condition
if (price > 1000) {
    console.log('too expensive. not for me')
}
else if (price > 500) {
    console.log('May be i can buy this.')
}
else {
    console.log('within my budget')
}

// loop
let pushUp = 0;
while (pushUp < 10) {
    console.log('push up', pushUp);
    // pushUp = pushUp + 1;
    // pushUp += 1;
    pushUp++;
}

// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}