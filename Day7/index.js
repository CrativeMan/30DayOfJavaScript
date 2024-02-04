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
*/
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