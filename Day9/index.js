const countriesData = require("./countries_data.js")

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

//#region Exercise: Level
/*
console.log("Exercise: Level 1:")
//! Exercise Level 1:
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "EEEEE"]
const names = ["Asabeneh", "Mathias", "Elias", "Brook"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: 0 },
]
// 1
//? forEach iterates over an array and lets you perform actions on each element of the array
//? map creates a new array by applying a transformation to the original array, returns a new array with the same length as the original array
//? filter creates a new array with only the elemnts of the original array, that fit in the filter conditions
//? reduce applies a reducer function to each element of an array, it reduces the array by acumulating the results of each iteration
// 2
// 3
countries.forEach((country) => console.log(country))
// 4
names.forEach((name) => console.log(name))
// 5
numbers.forEach((num) => console.log(num))
// 6
const upperCountries = countries.map((country) => country.toUpperCase())
console.log(upperCountries)
// 7
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)
// 8
const square = numbers.map((num) => num ** 2)
console.log(square)
// 9
const upperNames = names.map((name) => name.toUpperCase())
console.log(upperNames)
// 10
const productsWithPrices = products.map(
  (product) => product.product + " " + product.price
)
console.log(productsWithPrices)
// 11
const withOutLand = countries.filter(
  (country) => !country.toLowerCase().includes("land")
)
console.log(withOutLand)
// 12
const withoutSix = countries.filter((country) => country.length !== 6)
console.log(withoutSix)
// 13
const lessTenSix = countries.filter((country) => country.length < 6)
console.log(lessTenSix)
// 14
const countriesNoStartWithE = countries.filter(
  (country) => !country.startsWith("E")
)
console.log(countriesNoStartWithE)
// 15
const productsWithPricesS = products.filter(
  (product) => typeof product.price === "number" && product.price !== 0
)
console.log(productsWithPricesS)
// 16
function getStringLists(arr) {
  return arr.filter((i) => typeof i === "string")
}
console.log(getStringLists([1, 2, "asd", 3, "putty", 4, 5]))
// 17
console.log(numbers.reduce((acc, num) => (acc += num)))
// 18
console.log(countries.reduce((acc, country) => acc + country + ", ", ""))
// 19
//? some means, that only some of the elements have to be right, every means every element
// 20
console.log(names.some((name) => name.length > 7))
// 21
console.log(
  countries.every((country) => country.toLowerCase().includes("land"))
)
// 22
//? find returns the first object in the array that meets the finding function
//? findIndex returns the first index of the found element that matches the function
// 23
console.log(countries.find((c) => c.length === 6))
// 24
console.log(countries.findIndex((c) => c.length === 6))
// 25
console.log(countries.find((c) => c === "Norway"))
// 26
console.log(countries.find((c) => c === "Russia"))
*/
//#endregion

//#region Exercise: Level 2
/*
console.log("Exercise: Level 2:")
//! Exercise Level 2:
const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Finland",
]
const names = ["Asabeneh", "Mathias", "Elias", "Brook"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
]
// 1
const totalPrice = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number")
  .reduce((acc, cur) => acc + cur)
console.log("1.", totalPrice)
// 2
const totalPriceReduce = products.reduce(
  (acc, cur) => (typeof cur.price === "number" ? acc + cur.price : acc + 0),
  0
)
console.log("2.", totalPriceReduce)
// 3
function categorizeCountries(commonDenominator) {
  let lowerCountries = countries.map((country) => country.toLowerCase())
  return lowerCountries.filter((country) =>
    country.includes(commonDenominator.toLowerCase())
  )
}
console.log("3.", categorizeCountries("land"))
// 4
function firstLettersOfCountryAnalysis() {
  let lowerCountries = countries.map((country) => country.toLowerCase())
  let allFirstLetters = lowerCountries.map((country) => country[0])
  let letters = []
  allFirstLetters.forEach((element) => {
    const foundLetter = letters.find((letter) => letter.element === element)
    if (foundLetter) {
      foundLetter.count++
    } else {
      letters.push({ element, count: 1 })
    }
  })
  return letters
}
console.log("4.", firstLettersOfCountryAnalysis())
// 5
function getFirstTenCountries() {
  const firstTenCountries = []
  for (let i = 0; i < 10; i++) {
    firstTenCountries.push(countriesData.countries[i].name)
  }
  console.log("5. ", firstTenCountries)
}
getFirstTenCountries()
// 6
function getLastTenCountries() {
  const firstTenCountries = []
  for (let i = 0; i < 10; i++) {
    firstTenCountries.push(
      countriesData.countries[countriesData.countries.length - 1 - i].name
    ).reverse
  }
  console.log("6. ", firstTenCountries)
}
getLastTenCountries()
// 7
function firstLettersOfCountryDataAnalysis() {
  let lowerCountries = countriesData.countries.map((country) =>
    country.name.toLowerCase()
  )
  let allFirstLetters = lowerCountries.map((country) => country[0])
  let letters = []
  allFirstLetters.forEach((element) => {
    const foundLetter = letters.find((letter) => letter.element === element)
    if (foundLetter) {
      foundLetter.count++
    } else {
      letters.push({ element, count: 1 })
    }
  })
  return letters
}
console.log("7.", firstLettersOfCountryDataAnalysis())
*/
//#endregion

//#region Exercise: Level 3
console.log("Exercise: Level 3:")
//! Exercise Level 3:
// 1
// console.log(
//   countriesData.countries.sort((a, b) => {
//     if (a.capital < b.capital) return -1
//     if (a.capital > b.capital) return 1
//     return 0
//   })
// )
// console.log(
//   countriesData.countries.sort((a, b) => {
//     if (a.population < b.population) return -1
//     if (a.population > b.population) return 1
//     return 0
//   })
// )
// 2
function mostSpokenLanguages(countries, numberOf) {
  const mostSpokenLanguages = []
  countries.forEach((country) => {
    country.languagess.forEach((element) => {
      
    })
  })
  return mostSpokenLanguages
}
console.log(mostSpokenLanguages(countriesData.countries, 10))
// 3
// 4

//#endregion
