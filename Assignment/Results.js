const describeValue = (value) => {
  const type = typeof value;
  const checkValue = value ? 'truthy' : 'falsy';
  return `${type} | ${checkValue}`;
};

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
