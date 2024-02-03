//! If
/*//* if
let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat");
}
//* if else
let num = 3;
if (num > 0) {
  console.log(`${num} is positiv`);
} else {
  console.log(`${num} is negativ`);
}
//* if elseif else
let a = 3;
if (a > 0) {
  console.log(`${a} is positiv`);
} else if (a < 0) {
  console.log(`${a} is negativ`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}*/

//! Switch
/*let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("Rainy");
    break;
  case "cloudy":
    console.log("cloudy");
    break;
  case "sunny":
    console.log("sunny");
    break;
  default:
    console.log("No need for a raincoat");
}
// let dayUserInput = prompt("Day");
let dayUserInput = "monday";
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}
//* Examples ot use conditions in the cases
//num = prompt("Enter numebr");
switch (true) {
  case num > 0:
    console.log("Number is pos");
    break;
  case num == 0:
    console.log("number is zero");
    break;
  case num < 0:
    console.log("number is negati");
    break;
  default:
    console.log("NaN");
}*/

//! Ternary Operators
/*isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
*/

//! Exercise: Level 1
console.log("Exercise: Level 1\n-----------");
//1.
let acitveAge = false,
  age;
if (acitveAge) age = parseInt(prompt("Enter your age:"));
age >= 18
  ? console.log("You are old enough to drive")
  : console.log(`You are left with ${18 - age} years to drive`);
//2.
let myAge = 17,
  yourAge = 250;
if (myAge > yourAge)
  console.log(`I am ${myAge - yourAge} years older then you`);
else if (myAge == yourAge) console.log("We are the same age");
else console.log(`You are ${yourAge - myAge} years older then me`);
//3.
let a = 4,
  b = 3;
// i
if (a > b) console.log("a is greater than b");
else console.log("a is less than b");
// ii
a > b ? console.log("a is greater than b") : console.log("a is less than b");
//4.
a = 7;
num = a / 2;
Math.floor(num) === num
  ? console.log(`${a} is an even number`)
  : console.log(`${a} is an odd number`);

//! Exercise: Level 2
console.log("Exercise: Level 2\n-----------");
//1.
let grade = "asd";
switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70 && grade < 80:
    console.log("B");
    break;
  case grade >= 60 && grade < 70:
    console.log("C");
    break;
  case grade >= 50 && grade < 60:
    console.log("D");
    break;
  case grade < 50:
    console.log("F");
    break;
  default:
    console.log("Not in the system");
}
//2.
let month = "augusasd";
switch (true) {
  case month == "september" || month == "october" || month == "november":
    console.log("Autumn");
    break;
  case month == "december" || month == "january" || month == "february":
    console.log("Winter");
    break;
  case month == "march" || month == "april" || month == "may":
    console.log("Spring");
    break;
  case month == "june" || month == "july" || month == "august":
    console.log("Summer");
    break;
  default:
    console.log("Invalid month");
}
//3.
let day = "tuesday";
switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${day} is a working day`);
    break;
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend.`);
    break;
  default:
    console.log("Invalid day");
}

//! Exercise: Level 3
console.log("Exercise: Level 3\n-----------");
//1. and 2.
month = "april";
let gapYear = true;
switch (true) {
  case month == "january":
  case month == "march":
  case month == "may":
  case month == "july":
  case month == "august":
  case month == "october":
  case month == "december":
    console.log(`${month} has 31 days`);
    break;
  case month == "april":
  case month == "june":
  case month == "september":
  case month == "november":
    console.log(`${month} has 30 days`);
    break;
  case (month = "february" && gapYear):
    console.log(`${month} has 29 days`);
    break;
  case (month = "february" && !gapYear):
    console.log(`${month} has 28 days`);
    break;
  default:
    console.log("Not a month");
}
