// Question 3: Username Gatekeeper · 10 marks
// Hint: .length, .includes(), and .toLowerCase().

const validateUsername = (username) => {
  const lowerCaseUsername = username.toLowerCase();

  if (lowerCaseUsername.length < 4) {
    return 'Too Short';
  } else if (lowerCaseUsername.includes(' ')) {
    return 'No Space Allowed';
  } else if (lowerCaseUsername.includes('admin')) {
    return 'Reserved Word';
  } else {
    return 'Available';
  }
};

console.log(validateUsername('rahim123')); // Output: Available
console.log(validateUsername('ab')); // Output: Too Short
console.log(validateUsername('a b')); // Output: Too Short
console.log(validateUsername('abcd')); // Output: Available
console.log(validateUsername('rahim islam')); // Output: No Space Allowed
console.log(validateUsername('superadmin99')); // Output: Reserved Word
console.log(validateUsername('Admin_Rahim')); // Output: Reserved Word
