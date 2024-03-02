//#region higher order functions
/*
//! Higher order functions
//? Returning function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return ((2 * n) / 3) * m + t
    }
    return doWhatEver
  }
  return doSomething
}

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = (arr) => {
//   let sum = 0
//   const callback = function (element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum
// }
// console.log(sumArray(numbers))

const numbers = [1, 2, 3, 4, 5]
const sumArray = (arr) => {
  let sum = 0
  arr.forEach(function (element) {
    sum += element
  })
  return sum
}
console.log(sumArray(numbers))

//? Setting time
function sayHello() {
  console.log("Hello world")
}
//* Set interval
// setInterval(sayHello, 1000)
//* Set timeout
// setTimeout(sayHello, 2000)

//! Functional programming
//? forEach
let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))
console.log("1.", sum)

numbers.forEach((num) => (sum += num))
console.log("2.", sum)

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]
countries.forEach((element) => console.log(element.toUpperCase()))

//? map
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const names = ["Asabeneh", "Mathias", "Elias", "Brook"]
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries2 = [
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
]
const countriesToUpperCase = countries2.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries2.map((country) => {
  return country.toUpperCase().slice(0, 3)
})
console.log(countriesFirstThreeLetters)

//? filter
const countriesContainingLand = countries2.filter((country) =>
  country.includes("land")
)
console.log(countriesContainingLand)

const countriesEndsByia = countries2.filter((country) => country.endsWith("ia"))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries2.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

//? reduce
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//? every
const areAllStr = names.every((name) => typeof name === "string")
console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true)
console.log(areAllTrue)

//? find
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)

const result = names.find((name) => name.length > 7)
console.log(result)

const score = scores.find((user) => user.score > 80)
console.log(score)

//? findIndex
const result2 = names.findIndex((name) => name.length > 7)
console.log(result2)
const age2 = ages.findIndex((age) => age < 20)
console.log(age2)

//? some
const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue)

const areSomeNbr = names.some((name) => typeof name === "number")
console.log(areSomeNbr)

//? sort
//* sorting string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"]
console.log(products.sort())

//*sorting numeric values
const numbers3 = [9.81, 3.14, 100, 37]
console.log(numbers3.sort())
numbers3.sort(function (a, b) {
  return a - b
})
console.log(numbers3)

numbers3.sort(function (a, b) {
  return b - a
})
console.log(numbers3)

//* sorting object arrays
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return 1
  if (a.age > b.age) return -1
  return 0
})
console.log(users)
*/
//#endregion

//#region Exercise: Level 1
console.log('Exercise: Level 1:')
//! Exercise Level 1:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
//#endregion