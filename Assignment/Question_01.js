// Question 1: Value Detective · 10 marks
// Hint: you do not need a long if chain to find the type. typeof gives it to you. And a value can be put straight inside an if to test truthy or falsy.
const describeValue = (value) => {
  const type = typeof value;
  const checkValue = value ? 'truthy' : 'falsy';
  return `${type} | ${checkValue}`;
};

console.log(describeValue('hello')); // Output: string | truthy
console.log(describeValue('')); // Output: string | falsy
console.log(describeValue(25)); // Output: number | truthy
console.log(describeValue(0)); // Output: number | falsy
console.log(describeValue(true)); // Output: boolean | truthy
console.log(describeValue(null)); // Output: object | falsy
console.log(describeValue(undefined)); // Output: undefined | falsy
