// Question 5: Run Chase Commentator · 15 marks
// Hint: build the fare step by step in a let variable, then apply the night charge at the very end.

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return 'Won';
  }

  if (ballsLeft <= 0) {
    return 'Lost';
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = '';

  if (requiredRate <= 6) {
    verdict = 'Comfortable';
  } else if (requiredRate <= 12) {
    verdict = 'Tough';
  } else {
    verdict = 'Almost Impossible';
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12)); // Output: "Won"
console.log(getChaseVerdict(200, 190, 0)); // Output: "Lost"
console.log(getChaseVerdict(100, 90, 12)); // Output: "Need 10 runs in 12 balls | Comfortable"
console.log(getChaseVerdict(100, 80, 12)); // Output: "Need 20 runs in 12 balls | Tough"
console.log(getChaseVerdict(100, 70, 12)); // Output: "Need 30 runs in 12 balls | Almost Impossible"
console.log(getChaseVerdict(150, 149, 1)); // Output: "Need 1 runs in 1 balls | Comfortable"
