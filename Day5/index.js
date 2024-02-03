//! Arrays
/*//? How to create an array
// Array constructor
const arr = Array();
console.log(arr);
// square braktets
const array = [];
console.log(array);

//? How to create an array with values
let numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
let countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length
console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);
//* Arrays can have items of diffrent data types
const diff = [
  "Kiara",
  17,
  true,
  { country: "Germany", city: "Olching" },
  { skills: ["HTML", "CSS", "C#", "Python", "JS"] },
];
console.log(diff);

//? Creating an array using split
let js = "JavaScript";
const charsInJavaScirpt = js.split("");
console.log(charsInJavaScirpt);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python";
const words = txt.split(" ");
console.log(words);

//? Accesing array items using index
let firstFruit = fruits[0];
console.log(firstFruit);
let secondFruit = fruits[1];
console.log(secondFruit);

// Last index of an array
let lastIndex = fruits.length - 1;
let lastFruit = fruits[lastIndex];
console.log(lastFruit);

console.log(numbers.length);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[5]);

//? Modifiying array element
numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);

countries = [
  "Albania",
  "Bolivia",
  "canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "japan",
  "Kenya",
];

countries[0] = "Afghanistan";
lastIndex = countries.length - 1;
countries[lastIndex] = "Korea";
console.log(countries);*/

//? Methods to manipulate array
// creating static values with fill
const arr = Array()
console.log(arr)
const eightEmptyValues = Array(8)
console.log(eightEmptyValues)
const eightXvalues = Array(8).fill("X")
console.log(eightXvalues)
const eight0values = Array(8).fill(0)
console.log(eight0values)
const four4values = Array(4).fill(4)
console.log(four4values)
// concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

let fruits = ["banana", "orange", "mango", "lemon"] // array of fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables) // concatenate the two arrays
console.log(fruitsAndVegetables)
// getting array length and checking the index of objects in an array
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)
console.log(numbers.indexOf(5))
console.log(numbers.indexOf(0)) // returns -1 because not in arary
console.log(numbers.indexOf(1))
console.log(numbers.indexOf(6)) // returns -1 because not in arary
// check if item exists in array
fruits = ["banana", "orange", "mango", "lemon"]
let index = fruits.indexOf["orange"]

if (index === -1) console.log("This fruit does not exist in this array")
else console.log("This fruit does exist in the array")

index !== -1 ? console.log("Exists") : console.log("Not existent")
// getting the last index of an element in array
numbers = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0)) // -1 not in array
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(4))
console.log(numbers.lastIndexOf(6)) // -1 not in array
// check if element exists in array
numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(5))
console.log(numbers.includes(0))
console.log(numbers.includes(1))
console.log(numbers.includes(6))

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]
console.log(webTechs.includes("Node"))
console.log(webTechs.includes("C"))
// checking if is an array

