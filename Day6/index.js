//! Loops
//#region for loop
/*
//? for loop
for (let i = 0; i <= 5; i++) {
  console.log(i)
}
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"]
let newArr = []
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// adding all elements in an array
let numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}
console.log(sum)
// creating a new array based on the existing array
newArr = []
sum = 0
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2)
}
console.log(newArr)

//? for of loop
console.log("//? for of loop")
numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
  console.log(num)
}
for (const num of numbers) {
  console.log(num * num)
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]

for (const tech of webTechs) {
  console.log(tech[0])
}

// adding all the numbers in the array
console.log("// adding all the numbers in the array")
sum = 0
for (const num of numbers) {
  sum = sum + num
  // can also be shorten to sum += num
}
console.log(sum)
*/
//#endregion

//#region while loop
/*
//? while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
//? do while loop
i = 0
do {
  console.log(i)
  i++
} while (i <= 5)*/
//#endregion

//#region break, continue
/*
//? break
for (let i = 0; i <= 5; i++) {
  if (i == 3) break // code stops if 3 is reached in the for loop
  console.log(i)
}
//? continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) continue // code skips a iteration
  console.log(i)
}
*/
//#endregion

//#region Exercise Level 1
//! Exercise Level 1
/*
console.log("//! Exercise Level 1")
//*1.
console.log("for")
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
console.log("while")
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
console.log("do while")
i = 0
do {
  console.log(i)
  i++
} while (i <= 10)
//*2.
console.log("for")
for (let i = 10; i >= 0; i--) {
  console.log(i)
}
console.log("while")
i = 10
while (i >= 0) {
  console.log(i)
  i--
}
console.log("do while")
i = 10
do {
  console.log(i)
  i--
} while (i >= 0)
//*3.
let n = 1
for (let i = 0; i <= n; i++) {
  console.log(i)
}
//*4.
let line = ""
for (let j = 0; j < 7; j++) {
  line += "#"
  console.log(line)
}
//*5.
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}
//*6.
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`)
}
//*7.
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) === num) console.log(i)
  else continue
}
//*8.
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) !== num) console.log(i)
  else continue
}
//*9.
let isPrime = true
for (let number = 0; number <= 100; number++) {
  if (number === 1) console.log("1 is neither prime nor compsite number.")
  else if (number > 1) {
    for (let j = 2; j < number; j++) {
      if (number % j == 0) {
        isPrime = false
        break
      }
      isPrime = true
    }
    if (isPrime) {
      console.log(number)
    }
  } else console.log("Number isnt a prime")
}
//*10.
let sum = 0
for (let i = 0; i <= 100; i++) {
  sum += i
}
console.log(sum)
//*11.
let sumEven = 0,
  sumOdd = 0
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) === num) sumEven += i
  else continue
}
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) !== num) sumOdd += i
  else continue
}
console.log(`THe even sum is ${sumEven}, the odd sum is${sumOdd}`)
//*12.
let sumArr = []
sumEven = 0
sumOdd = 0
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) === num) sumEven += i
  else continue
}
for (let i = 0; i <= 100; i++) {
  num = i / 2
  if (Math.floor(num) !== num) sumOdd += i
  else continue
}
sumArr.push(sumEven)
sumArr.push(sumOdd)
console.log(sumArr)
//*13.
let ranArr = []
for (let i = 0; i < 5; i++) {
  ranArr.push(Math.floor(Math.random() * 100))
}
console.log(ranArr)
//*14.
let ranUnArr = [],
  ran = 0
for (let i = 0; i < 5; i++) {
  ran = Math.floor(Math.random() * 100)
  ranUnArr.includes(ran) ? i-- : ranUnArr.push(ran)
}
console.log(ranUnArr)
//*15.
// Create an array to store characters
let char = [],
  code = ""

// Add numbers 0-9 to the array
for (let i = 0; i < 10; i++) {
  char.push(i.toString())
}

// Add lowercase letters a-z to the array
for (let i = 97; i < 123; i++) {
  char.push(String.fromCharCode(i))
}

for (let i = 0; i < 6; i++) {
  code += char[Math.floor(Math.random() * char.length)]
}
console.log(code)
*/
//#endregion

//#region Exercise Level 2
/*
//! Exercise Level 2
console.log("//! Exercise Level 2")
//*1.
// Create an array to store characters
let char = [],
  code = "",
  n = 12

// Add numbers 0-9 to the array
for (let i = 0; i < 10; i++) {
  char.push(i.toString())
}

// Add lowercase letters a-z to the array
for (let i = 97; i < 123; i++) {
  char.push(String.fromCharCode(i))
}

for (let i = 0; i < n; i++) {
  code += char[Math.floor(Math.random() * char.length)]
}
console.log(code)

//*2.
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
//*3.
let rgbCode = []
for (let i = 0; i < 3; i++) {
  rgbCode.push(Math.floor(Math.random() * 256))
}
console.log(`rbg(${rgbCode.join(",")})`)
//*4.
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ],
  newCountries = []
for (country in countries) {
  newCountries.push(countries[country].toUpperCase())
}
// console.log(newCountries)
//*5.
const length = []
for (index in countries) {
  length.push(countries[index].length)
}
console.log(length)
//*6.
let weird = []
for (word in countries) {
  let country = []
  country.push(countries[word])
  country.push(countries[word].slice(0, 3).toUpperCase())
  country.push(countries[word].length)
  weird.push(country)
}
console.log(weird)
//*7.
const lands = []
for (land in countries) {
  if (countries[land].includes("land")) lands.push(countries[land])
}
lands.length != 0
  ? console.log(lands)
  : console.log("All these countries are without land")
//*8.
const ia = []
for (land in countries) {
  if (countries[land].endsWith("ia")) ia.push(countries[land])
}
ia.length != 0
  ? console.log(ia)
  : console.log("All these countries dont end with ia")
//*9.
const lengthie = []
for (index in countries) {
  let value = []
  value.push(countries[index].length)
  value.push(parseInt(index))
  lengthie.push(value)
}
lengthie.sort()
console.log(countries[lengthie[lengthie.length - 1][1]])
//*10.
const five = []
for (index in countries) {
  if (countries[index].length === 5) five.push(countries[index])
}
console.log(five)
//*11.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]

const longest = []
for (index1 in webTechs) {
  let value = []
  value.push(webTechs[index1].length)
  value.push(parseInt(index1))
  longest.push(value)
}
longest.sort()
console.log(longest)
console.log(webTechs[longest[0][1]])
//*12.
const längen = []
for (item in webTechs) {
  let language = []
  language.push(webTechs[item])
  language.push(webTechs[item].length)
  längen.push(language)
}
console.log(längen)
//*13.
let mernStack = ["MongoDB", "Express", "React", "Node"],
  acronym = ""
for (index in mernStack) {
  acronym += mernStack[index].toUpperCase().charAt(0)
}
console.log(acronym)
//*14.
let techs = []
for (let i = 0; i < webTechs.length; i++) {
  techs.push(webTechs[i])
}
console.log(techs)
techs = []
for (i of webTechs) {
  techs.push(i)
}
console.log(techs)
//*15.
const fruit = ["banana", "orange", "mango", "lemon"]
for (let i = 0; i < Math.floor(fruit.length / 2); i++) {
  const temp = fruit[i]
  fruit[i] = fruit[fruit.length - 1 - i]
  fruit[fruit.length - 1 - i] = temp
}
console.log(fruit)
//*16.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
]
for (item in fullStack) {
  for (i in fullStack[item]) {
    console.log(fullStack[item][i])
  }
}
*/
//#endregion
