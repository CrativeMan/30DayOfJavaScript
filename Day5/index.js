const countries = require("./countries")
const web_techs = require("./web_techs")

//#region training
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
console.log(countries);

//? Methods to manipulate array
// creating static values with fill
let arr = Array()
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
console.log(Array.isArray(numbers))
let number = 100
console.log(Array.isArray(number))
// converting an array to string
console.log(numbers.toString())
const names = ["Asabeneh", "Mathias", "Elias", "Brook"]
console.log(names.toString())
// joining array elements
console.log(numbers.join())
console.log(names.join())
console.log(names.join(""))
console.log(names.join(" "))
console.log(names.join(", "))
console.log(names.join(" # "))
// sliceing array elements
numbers = [1, 2, 3, 4, 5]
console.log(numbers.slice())
console.log(numbers.slice(0))
console.log(numbers.slice(0, numbers.length - 2))
// splice method in array
// Splice: It takes three parameters: Starting position, number of itemm to be removed and items to be added
numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers)
numbers.splice(0, 1) // removes first item
console.log(numbers)
numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers)
// adding item to an array using push
arr = ["item 1", "item 2", "item 3"]
arr.push("new item")
console.log(arr)
// removing last item in array using pop
numbers = [1, 2, 3, 4, 5]
numbers.pop()
console.log(numbers)
// removing first item in array using shift
numbers = [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers)
// add an element to the beginning in array using unshift
numbers = [1, 2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers)
// reversing an array order
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
console.log(numbers)
// sorting an array
console.log(webTechs)
webTechs.sort()
console.log(webTechs)

//? Array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]
const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(arrayOfArray[0])

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])*/
//#endregion training
//#region level 1
/*//! Exercise: Level 1
console.log("Exercise: Level 1\n-----------")
//1.
const arr = []
//2.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//3.
console.log(array.length)
//4.
let middelIndex = Math.floor((array.length - 1) / 2)
console.log(array[0], array[middelIndex], array[array.length - 1])
//5.
const mixedDataTypes = [
  "Kiara",
  18,
  "Olching",
  { country: "Germany", city: "Olching" },
  true,
  8.1,
]
console.log(mixedDataTypes.length)
//6.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]
//7.
console.log(itCompanies)
//8.
console.log("Number of companies: ", itCompanies.length)
//9.
console.log(
  "First company:",
  itCompanies[0],
  "Middlecompanie:",
  itCompanies[Math.floor((itCompanies.length - 1) / 2)],
  "Last Companie:",
  itCompanies[itCompanies.length - 1]
)
//10.
console.log(itCompanies.toString())
//11.
console.log(itCompanies.toString().toUpperCase())
//12.
console.log(`${itCompanies.toString()} are big IT companies.`)
//13.
let checkCompany = "Asd"
itCompanies.includes(checkCompany)
  ? console.log(checkCompany)
  : console.log("Company not found")
//14.
let companys = []
let filterdCompanies = []
//* split each company into its letters and add those to a array
itCompanies.forEach((element) => {
  let company = element.split("")
  companys.push(company)
})
//* check if companies contain more than one o and if so add them to an array
companys.forEach((element) => {
  let count = 0,
    letters = []
  element.forEach((letter) => {
    if (letters.includes(letter) && letter == "o") {
      count++
      filterdCompanies.push(element)
    } else {
      letters.push(letter)
    }
  })
})
console.log(filterdCompanies)
//15.
console.log(itCompanies.sort())
//16.
console.log(itCompanies.reverse())
//17.
const firstThreeCompanies = itCompanies.slice(0, 3)
console.log(firstThreeCompanies)
//18.
const lastThreeCompanies = itCompanies.slice(
  itCompanies.length - 3,
  itCompanies.length
)
console.log(lastThreeCompanies)
//19.
const middleCompany = itCompanies.slice(
  Math.floor(itCompanies.length / 2),
  Math.floor(itCompanies.length / 2) + 1
)
console.log(middleCompany)
//20.#regionanies)
//21.
*/
//#endregion level 1
//#region level 2
/*//! Exercise: Level 2
console.log("Exercise: Level 2\n-----------")
//1.
//2.
let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.",
  words,
  template = /[.,]/gi
text = text.replace(template, "")
words = text.split(" ")
console.log(words, words.length)
//3.
const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"]
console.log(shoppingCart)
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf("Tea")] = "Grean Tea"
console.log(shoppingCart)
//4.
const countryy = countries.countries
countryy.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.countries.push("Ethipoia"),
  console.log(countryy)
//5.
web_techs.webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : web_techs.webTechs.push("Sass"),
  console.log(web_techs.webTechs)
//6.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)*/
//#endregion level 2
//#region level 3
//! Exercise: Level 3
console.log("Exercise: Level 3\n-----------")
// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24].sort()
const min = ages[0],
  max = ages[ages.length - 1]
average =
  ages.reduce((a, b) => {
    return a + b
  }) / ages.length
console.log("min", min)
console.log("max", max)
console.log("median", ages[Math.floor((ages.length - 1) / 2)])
console.log("average", average)
console.log("range", max - min)
console.log(Math.abs(min - average) == Math.abs(max - average))
console.log(min - average, max - average)
// 2.
console.log("countries sliced", countries.countries.slice(0, 10))
// 3.
console.log(
  "middle country",
  countries.countries[Math.floor((countries.countries.length - 1) / 2)]
)
//4.
//num = a / 2
//Math.floor(num) === num
let countryyy = countries.countries,
  chunk1,
  chunk2
num = countryyy.length / 2
if (Math.floor(num) === num) {
  chunk1 = countryyy.slice(0, countryyy.length / 2)
  chunk2 = countryyy.slice(countryyy.length / 2, countryyy.length)
} else {
  chunk1 = countryyy.slice(0, countryyy.length / 2 + 1)
  chunk2 = countryyy.slice(countryyy.length / 2 + 1, countryyy.length)
}

console.log(chunk1, chunk2)

//#endregion level 3
