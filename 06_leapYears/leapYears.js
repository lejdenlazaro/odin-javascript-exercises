const leapYears = function (year) {
  const yearDivisibleByFour = year % 4 === 0;
  const yearDivisibleByOneHundred = year % 100 === 0;
  const yearDivisibleByFourHundred = year % 400 === 0;

  if (yearDivisibleByFour) {
    if (yearDivisibleByOneHundred) {
      if (yearDivisibleByFourHundred) return true;
      return false;
    }
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
