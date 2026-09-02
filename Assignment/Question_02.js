// Question 2: Bangladesh Weekend Machine · 10 marks
// Hint: two case lines can share one result if you do not put break between them. And a string method can fix the letter case before the switch starts.

const getDayType = (day) => {
  const lowerCaseDay = day.toLowerCase();

  switch (lowerCaseDay) {
    case 'friday':
    case 'saturday':
      return 'Weekend';

    case 'sunday':
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
      return 'Working Day';

    default:
      return 'Invalid Day';
  }
};

console.log(getDayType('Friday')); // Output: Weekend
console.log(getDayType('friday')); // Output: Weekend
console.log(getDayType('MONDAY')); // Output: Working Day
console.log(getDayType('Bandarban')); //Output: Invalid Day
