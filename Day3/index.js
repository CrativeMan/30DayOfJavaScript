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
// 1.
console.log("Exercise: Level 1\n-----------");
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


console.log("Exercise: Level 3\n-----------");
