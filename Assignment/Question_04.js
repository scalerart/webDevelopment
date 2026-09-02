// Question 4: Dhaka CNG Fare Meter · 15 marks
// Hint: build the fare step by step in a let variable, then apply the night charge at the very end.

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare += fare * 0.2;
  }
  return fare;
};

console.log(getCngFare(2)); // Output: 50
console.log(getCngFare(1)); // Output: 50
console.log(getCngFare(5)); // Output: 95
console.log(getCngFare(10)); // Output: 170
console.log(getCngFare(5, false, 10)); // Output: 115
console.log(getCngFare(5, true)); // Output: 114
console.log(getCngFare(5, true, 10)); // Output: 138
