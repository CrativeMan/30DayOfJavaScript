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
/*
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
*/
//#endregion

//#region Exercise: Level 3
console.log("Exercise: Level 3:")
//! Exercise Level 3:
// 1
let chars = [],
  lengthOfIds = 7,
  numberOfIds = 1,
  ids = []
for (let i = 0; i < 10; i++) {
  chars.push(i.toString())
}
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i))
  chars.push(String.fromCharCode(i).toUpperCase())
}

const userIdGenerator = (() => {
  // lengthOfIds = prompt("How long should your Ids be")
  // numberOfIds = prompt("How many Ids do you want")
  for (let i = 0; i < numberOfIds; i++) {
    id = ""
    for (let i = 0; i < lengthOfIds; i++) {
      id += chars[Math.floor(Math.random() * chars.length)].toString()
    }
    ids.push(id)
  }
  console.log(ids.join(",\n"))
})()
// 2
const rgbColorGenerator = (() => {
  const color = []
  for (let i = 0; i < 3; i++) {
    color.push(parseInt(Math.random() * 256))
  }
  console.log(`rgb(${color.join(",")})`)
})()
// 3
chars = []
let hexcodes = []

for (let i = 0; i < 10; i++) {
  chars.push(i.toString())
}
for (let i = 97; i < 103; i++) {
  chars.push(String.fromCharCode(i))
}

const arrayOfHexaColors = ((length = 3) => {
  for (let i = 0; i < length; i++) {
    const hexcode = []
    for (let i = 0; i < 3; i++) {
      let current = ""
      for (let i = 0; i < 2; i++) {
        current += chars[Math.floor(Math.random() * 16)]
      }
      hexcode.push(current)
    }
    hexcodes.push(hexcode)
  }
  for (let i = 0; i < length; i++) {
    console.log(`${i + 1}. #${hexcodes[i].join("")}`)
  }
})()
// 4
const rgbColors = []
const arrayOfRgbCollors = ((length = 3) => {
  for (let i = 0; i < length; i++) {
    const temp = []
    for (let j = 0; j < 3; j++) {
      temp.push(Math.round(Math.random() * 256))
    }
    rgbColors.push(temp.join(","))
  }
  for (let i = 0; i < rgbColors.length; i++) {
    console.log(
      `${i + 1}. rbg(${rgbColors[i]
        .concat(",")
        .substring(0, rgbColors[i].concat(",").length - 1)})`
    )
  }
})()
// 5 und 6
const hexaTable = []

for (let i = 0; i < 10; i++) {
  hexaTable.push(i.toString())
}
for (let i = 97; i < 103; i++) {
  hexaTable.push(String.fromCharCode(i))
}

const convertHexaToRgb = ((color = "hexa", code = "255,255,255") => {
  let formatedHexCode = ""
  if (color == "rgb") {
    //* Convert to rgb
    // Format hexcode
    formatedHexCode = code.substring(1, code.length)
    // parse the individual codes to decimal
    let r = parseInt(formatedHexCode.substring(0, 2), 16)
    let g = parseInt(formatedHexCode.substring(2, 4), 16)
    let b = parseInt(formatedHexCode.substring(4, 6), 16)

    console.log(`rbg(${r},${g},${b})`)
  } else if (color == "hexa") {
    //* Convert to hexa
    // split rgb into r g and b
    let a = parseInt(code.substring(0, 3))
    let b = parseInt(code.substring(4, 7))
    let c = parseInt(code.substring(8, 11))
    let red = a.toString(16)
    let green = b.toString(16)
    let blue = c.toString(16)
    if (a < 16) red = "0" + red
    if (b < 16) green = "0" + green
    if (c < 16) blue = "0" + blue
    console.log(`#${red}${green}${blue}`)
  } else {
    console.log("Invalid input")
  }
})()
// 7
console.log("7.------------------")
const colors = [],
  hexaCodes = []

for (let i = 0; i < 10; i++) {
  hexaCodes.push(i.toString())
}
for (let i = 97; i < 103; i++) {
  hexcodes.push(String.fromCharCode(i))
}

const generateColors = ((type = "rgb", amount = 3) => {
  if (type == "rgb") {
    for (let i = 0; i < amount; i++) {
      const temp = []
      for (let j = 0; j < 3; j++) {
        temp.push(Math.round(Math.random() * 256))
      }
      colors.push(temp.join(","))
    }
    for (let i = 0; i < colors.length; i++) {
      console.log(
        `${i + 1}. rbg(${colors[i]
          .concat(",")
          .substring(0, colors[i].concat(",").length - 1)})`
      )
    }
  } else {
    for (let i = 0; i < amount; i++) {
      const hexcode = []
      for (let i = 0; i < 3; i++) {
        let current = ""
        for (let i = 0; i < 2; i++) {
          current += chars[Math.floor(Math.random() * 16)]
        }
        hexcode.push(current)
      }
      colors.push(hexcode)
    }
    for (let i = 0; i < amount; i++) {
      console.log(`${i + 1}. #${colors[i].join("")}`)
    }
  }
})()
// 8
const shuffledArray = ((arr) => {
  const newArray = [],
    usedRanIndicies = []
  for (let i = 0; i < arr.length; i++) {
    let ranIndex = Math.floor(Math.random() * arr.length)
    if (usedRanIndicies.includes(ranIndex)) {
      i--
      continue
    } else {
      newArray.push(arr[ranIndex])
      usedRanIndicies.push(ranIndex)
    }
  }
  console.log(newArray)
})(["A", "B", "C", "D", "E", "F"])
// 9
const factorial = ((num) => {
  let factorial = 1
  for (let i = 0; i < num; i++) {
    factorial *= num - i
  }
  console.log(factorial)
})(7)
// 10
const isEmpty = ((arg) => {
  if (arg !== undefined) {
    console.log("arg isnt empty")
  } else {
    console.log("arg is empty")
  }
})()
// 11
const sum = ((...args) => {
  let sum = 0
  for (const i of args) {
    sum += i
  }
  console.log(sum)
})(1, 2, 3, 4, 5, 6)
// 12
const sumOfArrayItems = ((arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
})([1, 2, 3, 4, 5, 6])
// 13
const average = ((arr = []) => {
  let sum = 0
  if (!arr.some((i) => !Number.isInteger(i))) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    console.log(sum)
    console.log(sum / arr.length)
  } else {
    console.log("not a number")
  }
})([1, 2, 3, 4, 5, 6, 7])
// 14
const modifyArray = ((arr = []) => {
  let newArr = []
  if (arr.length >= 5) {
    for (let i = 0; i < arr.length; i++) {
      if (i == 4) {
        newArr.push(arr[i].toUpperCase())
      } else {
        newArr.push(arr[i])
      }
    }
    console.log(newArr)
  } else {
    console.log("Not found")
  }
})(["abc", "abc", "abc", "abc", "abc", "abc"])
// 15
let prime = true
const isPrime = ((num) => {
  if (num === 1) console.log("1 is neither prime nor composite number.")
  else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false
        break
      }
    }
    prime ? console.log("Is prime") : console.log("Isnt prime")
  } else console.log("number is not a prime")
})(14)
// 16
const isUniqueArr = ((arr = []) => {
  let check = [],
    unique = true
  for (let i = 0; i < arr.length; i++) {
    if (check.includes(arr[i])) {
      unique = false
      break
    } else check.push(arr[i])
  }
  console.log(unique)
})([1, 2, 3, 4, 3])
// 17
const isSameType = ((arr = []) => {
  let check = [],
    sameType = true
  check.push(arr[0])
  console.log(check)
  //
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== typeof check[i - 1]) {
      sameType = false
      break
    } else check.push(arr[i])
  }
  //
  console.log(check)
  console.log(sameType)
})([1, 2, 3, 4, "5"])
// 18
let valid = true
let abc = ["$", "_"]
for (let i = 97; i < 123; i++) {
  abc.push(String.fromCharCode(i))
}
const isValidVariable = ((variable = "") => {
  const varr = variable.split("")
  console.log(varr)
  for (let i = 0; i < varr.length; i++) {
    if (!abc.includes(varr[i])) {
      valid = false
      break
    } else continue
  }
  console.log(valid)
})("abc")
// 19
const sevenRandomNumbers = (() => {
  const num = []
  for (let i = 0; i < 7; i++) {
    let ranNum = Math.floor(Math.random() * 10)
    if (num.includes(ranNum)) {
      i--
      continue
    } else num.push(ranNum)
  }
  console.log(num.join(","))
})()
// 20
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "test",
]
const reverseCountries = ((arr = []) => {
  const reversed = []
  for (let i = 1; i <= arr.length; i++) {
    reversed.push(arr[arr.length - i])
  }
  console.log(reversed)
})(countries)

//#endregion
