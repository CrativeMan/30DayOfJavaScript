//#region funtion
/*
//! Function without a parameter and return
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}
square()

function addTwoNumbers() {
  let numOne = 10,
    numTwo = 20,
    sum = numOne + numTwo
  console.log(sum)
}
addTwoNumbers()

//! Function returning value
function printFullName() {
  let firstName = "Kiara",
    lastName = "Hannig",
    space = " ",
    fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName())
function addTwoNumbers() {
  let numOne = 2,
    numTwo = 3,
    total = numOne + numTwo
  return total
}
console.log(addTwoNumbers())

//! Function with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}
console.log(areaOfCircle(10))

//! Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}
console.log(sumTwoNumbers(10, 10))

//! Function with many parameters
// function with multiple parameters
// function functoinName(parm1, parm2, parm3) {
//   // code goes here
// }
// functoinName(parm1, parm2, parm3)

function sumArrayValues(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers))

//! function with unlimited parameters
//? Unlimited number of parameters in regular function
function sumAllNumbers() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNumbers(1, 2, 3, 4))
console.log(sumAllNumbers(10, 20, 30, 40, 50, 10))
console.log(sumAllNumbers(15, 29, 39, 25, 10, 33, 40))

//? unlimited number of parameters in arrow function
const sumAllNumbersArrow = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNumbersArrow(1, 2, 3, 4))

//! anonymous/expression/self invoking/etc. function
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  )
}

const square = function (n) {
  return n * n
}
console.log(square(2))

const pringSquare = (function (n) {
  console.log(n * n)
})(2)

let squareNum = (function (n) {
  return n * n
})(10)
console.log(squareNum)

//! Arrow functions
const square = (n) => {
  return n * n
}
console.log(square(2))

const square2 = (n) => n * n
console.log(square2(2))

const changeToUpperCase = (arr) => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
console.log(changeToUpperCase(countries))

const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}
console.log(printFullName("Kiara", "Hannig"))

const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullName("Larissa", "Hannig"))

//! Functions with default parameters
function greetings(name = "Peter") {
  return `${name}, welcome to 30 days of Javascript`
}
console.log(greetings())
console.log(greetings("Kiara"))
*/
//#endregion

const { add } = require("nodemon/lib/rules")

//#region Exercise: Level 1
console.log("Exercise: Level 1:")
//! Exercise Level 1:
//1
function fullName() {
  console.log("Kiara Hannig")
}
fullName()
//2
function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(fullName2("Larissa", "Hannig"))
//3
function addNumbers(a, b) {
  return a + b
}
console.log(addNumbers(3, 4))
//4
function areaOfRectangle(length, width) {
  return length * width
}
console.log(areaOfRectangle(10, 2))
//5
function preimeterOfRectangle(length, width) {
  return 2 * (length + width)
}
console.log(preimeterOfRectangle(10, 10))
//6
function volumOfRectPrism(width, length, height) {
  return length * width * height
}
console.log(volumOfRectPrism(4, 4, 10))
//7
const areaOfCircle = (r) => {
  return Math.PI * r ** 2
}
console.log(areaOfCircle(2))
//8
const circumfurenceCircle = (r) => {
  return 2 * Math.PI * r
}
console.log(circumfurenceCircle(2))
//9
const density = (function (mass, volume) {
  console.log(mass / volume)
})(3, 2)
//10
const speed = (function (meters, second) {
  console.log(meters / second)
})(10, 5)
//11
const weight = (function (mass, gravity) {
  console.log(mass * gravity)
})(30, 9.81)
//12
const convertCelsiusToFahrenheit = ((oC) => {
  console.log((oC * 9) / 5 + 32)
})(15)
//13
function bmi(weightBody, heightBody) {
  let bmi = weightBody / (heightBody / 100) ** 2
  console.log(bmi)
  switch (true) {
    case bmi < 18.5:
      console.log("Underweight")
      break
    case bmi >= 18.5 && bmi <= 24.9:
      console.log("Normal Weight")
      break
    case bmi >= 25 && bmi <= 29.9:
      console.log("Overweight")
      break
    case bmi >= 30:
      console.log("Obese")
      break
  }
}
bmi(60, 178)

//14
function checkSeason(month) {
  switch (month.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      console.log("Winter")
      break
    case "march":
    case "april":
    case "may":
      console.log("Spring")
      break
    case "june":
    case "july":
    case "august":
      console.log("Summer")
      break
    case "september":
    case "october":
    case "november":
      console.log("Autumn")
      break
    default:
      console.log("Invalid month")
  }
}
checkSeason("aUGUST")
//15
function findMax() {
  const arr = []
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i])
  }
  arr.sort((a, b) => a - b)
  console.log(arr)
}
findMax(1, 4, 6, 1, 4, 10, 5, 6, 17, 18)

//#endregion

//#region Exercise: Level 2
console.log("Exercise: Level 2:")
//! Exercise Level 2:
//1
function solveLinEquation(a, x, b, y, c) {
  let lin = a * x + b * y + c
  if (!isNaN(lin)) return lin
  else if (isNaN(lin)) return 0
  else return "Not a number"
}
console.log(solveLinEquation(4, 4, 6, 8, 5))
console.log(solveLinEquation())
//2
function solveQuadEquation(a, b, c) {
  // Calculate the discriminant
  let discriminant = b * b - 4 * a * c

  // Check if the discriminant is negative
  if (discriminant < 0) {
    return "No real solutions"
  } else if (discriminant === 0) {
    // If the discriminant is zero, there is one solution
    let x = -b / (2 * a)
    return `One solution: ${x}`
  } else if (isNaN(discriminant)) {
    return 0
  } else {
    // If the discriminant is positive, there are two solutions
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
    return `Two solutions: ${x1}, ${x2}`
  }
}
console.log(solveQuadEquation())
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
//3
const printArray = ((arr) => {
  for (i in arr) {
    console.log(arr[i])
  }
})(["Test", "asd", "putty"])
//4
const d = new Date()
const showDateTime = () => {
  return `${d.getDate()}/${
    d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}
console.log(showDateTime())
//5
const swapValues = ((x, y) => {
  let tempx = y,
    tempy = x
  console.log(tempx, tempy)
})(3, 4)
//6
const reverseArray = ((arr) => {
  const reArr = []
  arr.forEach((element) => {
    reArr.unshift(arr[element - 1])
  })
  console.log(reArr)
})([1, 2, 3, 4, 5])
//7
const capitalizedArray = ((arr) => {
  const tempArr = []
  arr.forEach((element) => {
    tempArr.push(element.toUpperCase())
  })
  console.log(tempArr)
})(["asd", "putty", "test"])
//8
const itemArr = []
const addItem = (item) => {
  itemArr.push(item)
  console.log(itemArr)
}
addItem("test")
addItem("asd")
addItem("banana")
//9
const removeItem = (item) => {
  itemArr.splice(item, 1)
  console.log(itemArr)
}
removeItem(1)
//10
const sumOfNumbers = ((num) => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  console.log(sum)
})(10)
//11
const sumOfOdds = ((num) => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    i % 2 !== 0 ? (sum += i) : (sum = sum)
  }
  console.log(sum)
})(10)
//12
const sumOfEven = ((num) => {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    i % 2 !== 0 ? (sum += i) : (sum = sum)
  }
  console.log("sum of even", sum)
})(10)
//13
const evensAndOdds = ((num) => {
  let evens = 0,
    odds = 0
  for (let i = 1; i <= num; i++) {
    i % 2 === 0 ? evens++ : odds++
  }
  console.log(`Evens: ${evens}, Odds: ${odds}`)
})(100)
//14
const sumArgs = ((...args) => {
  let sum = 0
  for (element in args) {
    sum += args[element]
  }
  console.log(sum)
})(1, 2, 3)
//15
const userIp = (() => {
  const nums = []
  for (let i = 0; i < 4; i++) {
    nums.push(Math.round(Math.random() * (999 - 111 + 1) + 111))
  }
  console.log(nums.join("."))
})()
//16
const userMac = (() => {
  let chars = [],
    hexcode = []

  for (let i = 0; i < 10; i++) {
    chars.push(i.toString())
  }
  for (let i = 97; i < 103; i++) {
    chars.push(String.fromCharCode(i))
  }
  for (let i = 0; i < 6; i++) {
    let current = ""
    for (let i = 0; i < 2; i++) {
      current += chars[Math.floor(Math.random() * 16)]
    }
    hexcode.push(current)
  }
  console.log(hexcode.join(":"))
})()
//17
const randomHexaNumberGenerator = (() => {
  let chars = [],
    hexcode = []

  for (let i = 0; i < 10; i++) {
    chars.push(i.toString())
  }
  for (let i = 97; i < 103; i++) {
    chars.push(String.fromCharCode(i))
  }
  for (let i = 0; i < 3; i++) {
    let current = ""
    for (let i = 0; i < 2; i++) {
      current += chars[Math.floor(Math.random() * 16)]
    }
    hexcode.push(current)
  }
  console.log(`#${hexcode.join("")}`)
})()
//18
// a asci = 97, z asci = 122
let chars = []
for (let i = 0; i < 10; i++) {
  chars.push(i.toString())
}
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i))
  chars.push(String.fromCharCode(i).toUpperCase())
}
const userIdGenerator = ((length) => {
  let id = ""
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)].toString()
  }
  console.log(id)
})(7)

//#endregion

//#region Exercise: Level 3
console.log('Exercise: Level 3:')
//! Exercise Level 3:

//#endregion