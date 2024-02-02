//! Data types
/*
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums === numbers); // false

let userOne = {
    name: "Asaheneh",
    role: "teaching",
    country: "Finland",
};

let userTwo = userOne;

console.log(userOne === userTwo); // false
*/
//! Math objects
/*
// Pi
const PI = Math.PI;
console.log(PI);

// Rounding, floor(round down), ceil(round up)
console.log(Math.round(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
// Min max
console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

// Random number
const randNum = Math.random();
console.log(randNum);

// Absolute value
console.log(Math.abs(-10));
// Square root
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
// Power
console.log(Math.pow(3, 2));
console.log(Math.E);

// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2));
console.log(Math.log(10));

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2);
console.log(Math.LN10);

// Trigonometry
console.log(Math.sin(0));
console.log(Math.cos(0));
*/

//! Random number generator
/*let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen);

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);
*/

//! Template literal strings
/*let name = "Kiara";
console.log(`Hello, ${name}!`);

let a = 13;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

console.log(`${a} is greater than ${b} is ${a > b}`);
*/

//! String methods
/*let string = "JavaScript";
console.log(string.length);
let firstName = "Kiara";
console.log(firstName.length);

// indexing
let firstLetter = string[0];

console.log(firstLetter);

let secondLetter = string[1];
let thirdLetter = string[2];
let lastLetter = string[string.length - 1];
console.log(lastLetter);

let lastIndex = string.length - 1;
console.log(lastIndex);
console.log(string[lastIndex]);

// toUpperCase() and toLowerCase()
console.log(string.toUpperCase());
console.log(firstName.toLowerCase());

// and substring()
console.log(string.substring(0, 4));

// split() and trim()
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(string.split(""));
console.log(countries.split(","));

let test = "            Javascript";
console.log(test.trim());

// includes() and startsWith() and endsWith()
console.log(string.includes("Script"));
console.log(string.startsWith("Java"));
console.log(string.endsWith("Script"));

// replace()
let stringTwo = "30 Days of Javascript";
console.log(stringTwo.replace("Javascript", "Python"));
let country = "Finland";
console.log(country.replace("Fin", "Lap"));

// charAt()
console.log(string.charAt(0));

// charCodeAt()
console.log(string.charCodeAt(0));

// indexOf() and lastIndexOf()
let stringThree =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.indexOf("S"));
console.log(stringThree.lastIndexOf("a"));

// concat(); joins substrings
let aaaa = "30";
console.log(aaaa.concat("Days", "Of", "JavaScript"));

// search() and match()
console.log(stringThree.search("Script"));
let stringFour = "love";
let patternOne = /love/; // without any flags
let patternTwo = /love/gi; // g means global search, i means case insensitive

console.log(stringThree.match(patternTwo));

let txt =
  "In 2019, I run 30 Days of Python. Now, in 2020, I super exited to start 30 Days of JavaScript.";
let regEx = /\d+/;
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers
// if there is a g after that it means global, search everywhere

console.log(txt.match(regEx));
console.log(txt.search(/\d+/g));

// repeat()
let txtTwo = "love";
console.log(txtTwo.repeat(10));
*/

//! Checking Data Types and Casting
/*
// String to int
let num = "10";
let numInt = parseInt(num);
console.log(numInt);

numINt = Number(num);
console.log(numInt);

numInt = 0;
numInt += num;
console.log(numInt);

// String to float
num = "10.5";
let numFloat = parseFloat(num);
console.log(numFloat);

numFloat = Number(num);
console.log(numFloat);

let numFloatTwo = +num;
console.log(numFloatTwo);

// float to int
num = 9.81;
numInt = parseInt(num);

console.log(numInt);
*/

//! Exercise: Level 1
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.split(" "));
let companys = "Facebook, Google, microsoft, Abble, IBM, Oracle, Amazon";
console.log(companys.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log("    30 Days of javascript    ".trim());
console.log(challenge.startsWith(3));
console.log(challenge.endsWith("t"));
console.log(challenge.match(/\a/g));
let a = "30 Days of",
  b = "Javascript";
console.log(a.concat(" ", b));
console.log(challenge.repeat(2));

//! Exercise: Level 2
console.log("---------------\nExercise: Level 2");
console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up'"
);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love  are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10" === 10);
console.log(parseFloat("9.8") + 0.2 == 10);
console.log(
  "python".search("on").toString() + "jargon".search("on").toString()
);
console.log("I hope this course is not full of jargon".search("jargon"));
let randNum = Math.random();
numbBetOneAndHundr = Math.floor(randNum * 101);
console.log(numbBetOneAndHundr);

let min = 50;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

min = 0;
max = 255;
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

let js = "JavaString";
min = 0;
max = js.length - 1;
console.log(js[Math.floor(Math.random() * (max - min + 1)) + min]);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 3 16 64\n5 1 5 25 125");
let txt =
  "You cannot end a sentence with because because because is a conjunction";
console.log(
  txt.substring(txt.indexOf("because"), txt.lastIndexOf("because") + 7)
);

//! Exercise: Level 3
// 1.
console.log("---------------\nExercise: Level 3");
let pattern = /love/gi;
txt =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(txt.match(pattern).length);
// 2.
pattern = /because/gi;
txt = "You cannot end a sentence with because because because is a conjunction";
console.log(txt.match(pattern).length);

// 3.
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleaned = sentence.replace(/[%$&@#]/g, "");
console.log(cleaned);
let words = cleaned.split(" ");
let wordFrequency = {};
for (let word of words) {
  if (wordFrequency.hasOwnProperty(word)) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
}
let mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) =>
  wordFrequency[a] > wordFrequency[b] ? a : b
);
console.log("Most frequent word: " + mostFrequentWord);

// 4.
txt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let income = 0;
let words2 = txt.split(" ");
for (let word of words2) {
  let number = parseInt(word);
  if (!isNaN(number)) income += number;
}
console.log(income);
