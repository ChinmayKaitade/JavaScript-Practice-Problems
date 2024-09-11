// Advanced Level 🔥

// Random Exercise

// Create a function that takes the month and year (as integers) and returns the number of days in that month.

/*
days(2, 2018) --> 28
days(4, 656) --> 30
*/

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function days(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? "29" : "28";
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

console.log(days(2, 2018));
console.log(days(4, 2018));
console.log(days(12, 2018));
console.log(days(7, 2018));
