/*
//* undefined and null
let firstname;
console.log(firstname);
let empty = null;
console.log(empty);
*/

//! Operators
/*
//* Arithmetic Operations
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(firstname, empty, sum, diff, mult, div, remainder, powerOf);

const PI = Math.PI;
let radius = 100;

//Calculate a area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

const gravity = 9.81;
let mass = 72;

// Calculate weight of an object
const weight = mass * gravity;
console.log(weight); // N(Newton)

const boilingPoint = 100;
const bodyTemp = 37;

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperatur is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m/s2`
);

//* Comparison Operators
console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

//* Logical Operators
// && ampersand operator example
const check1 = 4 > 3 && 10 > 5;
const check2 = 4 > 3 && 10 < 5;
const check3 = 4 < 3 && 10 < 5;

console.log(check1, check2, check3);

// || pipe or operator example
const check4 = 4 > 3 || 10 > 5;
const check5 = 4 > 3 || 10 < 5;
const check6 = 4 < 3 || 10 < 5;

console.log(check4, check5, check6);

// "! Negation examples
let check7 = 4 > 3;
let check8 = !(4 > 3);
let isLightOn = true;
let isLightOff = !isLightOn;
let isMarried = !false;

//* Increment Operators
// Pre-increment
let count = 0;
console.log(++count);
console.log(count);
// Post-increment
count = 0;
console.log(count++);
console.log(count);
// Same goes for decrement

//* Ternary/Conditional Operators
let isRaining = true;
isRaining
  ? console.log("You need a raincoat")
  : console.log("No need for a rain coat");
isRaining = false;

isRaining
  ? console.log("You need a raincoat")
  : console.log("No need for a rain coat");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
*/

//! Window Methods
/*
//* Window alert()
//alert("message");
//* Window prompt()
//let number = prompt("Enter number", "number goes here");
//console.log(number);
//* Window confirm()
//const agree = confirm("Are you sure you like to delete? ");
*/

//! Date Object
/*
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); // Sunday is 0, Monday is 1 and Saturday is 6 (0-6)
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime()); // Number of seconds passed from January 1, 1970 till today

const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);

// Human readable time format
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
*/

//! Exercise: Level 1
console.log("Exercise: Level 1\n-----------");
// 1.
let firstName = "Kiara",
  lastName = "Hannig",
  country = "Germany",
  city = "Olching",
  age = 17,
  isMarried = false,
  year = 2024;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);
//2.
console.log(typeof "10" == 10);
//3.
console.log(parseInt == 10);
//4.
console.log(5 == 5, typeof "asd" == typeof "", true);
console.log(5 < 4, typeof 4 == 4, false);
//5. true, true, false, false, true, true, false, false, false, true, false,
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4"
);
console.log("python".length != "jargon".length);
//6. true, false, true, true, false, true, true, false, true, true
console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4")
);
console.log(!("python".includes("on") == "dragon".includes("on")));
//7.
let now = new Date();
const month = now.getMonth() + 1;
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate() + " " + month + " " + now.getFullYear());

//! Level 2
console.log("Exercise: Level 2\n-----------");
//1.
let activeTriangle = false;
let area, base, height;
if (activeTriangle) {
  base = prompt("Enter base: ");
  height = prompt("Enter height: ");
}
area = 0.5 * base * height;
console.log(area);
//2.
let activePerimeter = false;
let a, b, c;
if (activePerimeter) {
  a = parseInt(prompt("Enter a:"));
  b = parseInt(prompt("Enter b:"));
  c = parseInt(prompt("Enter c:"));
}
let perimeter = a + b + c;
console.log(perimeter);
//3.
let activeRectangle = false;
let length, width, areaR, perimeterR;
if (activeRectangle) {
  length = parseInt(prompt("Enter length: "));
  width = parseInt(prompt("Enter height"));
}
console.log((areaR = length * width));
console.log((perimeterR = 2 * (length + width)));
//4.
let activeCircle = false;
let radius, areaC, circumference;
if (activeCircle) {
  radius = parseInt(prompt("Enter radius"));
}
console.log((areaC = Math.PI * radius ** 2));
console.log((circumference = 2 * Math.PI * radius));
//5.  y = 2x-2
const slope = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope;

console.log("Slope:", slope);
console.log("Y-intercept:", yIntercept);
console.log("X-intercept:", xIntercept);
//6.
let x1 = 2,
  y1 = 2,
  x2 = 6,
  y2 = 10;
const m = (y2 - y1) / (x2 - x1);
console.log("Slope: ", m);
//7.
console.log(slope == m);
//8.
let x = -3;
console.log(x ** 2 + 6 * x + 9);
//9.
let activeCalculate = false;
let hours, rate;
if (activeCalculate) {
  hours = parseInt(prompt("Enter Hours"));
  rate = parseInt(prompt("Enter rate"));
}
console.log("You earned: ", hours * rate);
//10.
let name =
  "Kiara".split("").length > 7
    ? console.log("Your name is long")
    : console.log("Your name is short");
//11.
let lettersF = "Kiara".split(""),
  lettersN = "Hannig".split("");
lettersF.length > lettersN.length
  ? console.log(
      `Your firstname ${lettersF.join()} is longer then your Familyname ${lettersN.join(
        ""
      )}`
    )
  : console.log(
      `Your Familyname ${lettersN.join(
        ""
      )} is longer then your Firstname ${lettersF.join("")}`
    );
//12.
let myAge = 25,
  yourAge = 250;
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you`)
  : console.log(`You are ${yourAge - myAge} years older then me`);
//13.
let activeDrive = false,
  dob;
if (activeDrive) dob = parseInt(prompt("Enter DOB"));
let yearD = now.getFullYear();
yearD - dob >= 18
  ? console.log(`You are ${yearD - dob} years old. You are allowd to drive`)
  : console.log(
      `You are ${yearD - dob} years old. You will be allowed to drive in ${
        18 - (yearD - dob)
      } years`
    );
//14.
let activeSeconds = false,
  years;
if (activeSeconds) years = parseInt(prompt("Enter your years"));
console.log(`You lived ${years * 365 * 24 * 60 * 60} seconds`);
//15.
// i
console.log(
  now.getFullYear(),
  "-",
  parseInt(now.getMonth()) + 1,
  "-",
  now.getDate(),
  " ",
  now.getHours(),
  ":",
  now.getMinutes()
);
// ii
console.log(
  now.getDate(),
  "-",
  parseInt(now.getMonth()) + 1,
  "-",
  now.getFullYear(),
  " ",
  now.getHours(),
  ":",
  now.getMinutes()
);
// iii
console.log(
  now.getDate(),
  "/",
  parseInt(now.getMonth()) + 1,
  "/",
  now.getFullYear(),
  " ",
  now.getHours(),
  ":",
  now.getMinutes()
);

//! Level 3
console.log("Exercise: Level 3\n-----------");
let minutes, hours3;
now.getMinutes() < 10
  ? (minutes = "0" + now.getMinutes())
  : (minutes = now.getMinutes());
now.getHours() < 10
  ? (hours3 = "0" + now.getHours())
  : (hours3 = now.getHours());

console.log(
  now.getFullYear(),
  "-",
  parseInt(now.getMonth()) + 1,
  "-",
  now.getDate(),
  " ",
  hours3,
  ":",
  minutes
);
