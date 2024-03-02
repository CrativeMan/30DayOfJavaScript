//#region objects
/*
//! Objects
const rectangle = {
  length: 20,
  width: 20,
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
}
console.log(person)

//? getting values from an object
const person = {
  firstName: "Kiara",
  lastName: "Hannig",
  age: 17,
  country: "Germany",
  city: "Olching",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  "phone number": "+4915152249137",
}
// accesing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

// value can be accessed using square brackets and key name
console.log(person["firstName"])
/// etc.

//? Creating object methods
console.log(person.getFullName())

//! setting new key for an object
person.nationality = "German"
person.country = "Austria"
person.title = "Student"
person.skills.push("Meteor")
person.skills.push("SasS")
person.isMarrieed = true

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ")
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  return `${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}.`
}
console.log(person)
console.log(person.getPersonInfo())

//! Object Methods
const person = {
  firstName: "Kiara",
  age: 17,
  country: "Germany",
  city: "Olching",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", "Python"],
  title: "Student",
  address: {
    street: "Heinrich.Kaspar.Schmid Str",
    postLeitZahl: 82140,
    city: "Olching",
  },
  getPersonInfo: function () {
    return `${this.firstName} lives in ${this.city}, ${this.country}. I am ${this.age} years old.`
  },
}
// Object methods: Object.assign, Object.keys, Object.values, Object.entries
// hasOwnProperty

//* Object.assign
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//* Object.keys
const keys = Object.keys(copyPerson)
console.log(keys)
const address = Object.keys(copyPerson.address)
console.log(address)

//* Object.values
const values = Object.values(copyPerson)
console.log(values)

//* Object.entries
const entries = Object.entries(copyPerson)
console.log(entries)

//* hasOwnProperty
console.log(copyPerson.hasOwnProperty("name")) // false
console.log(copyPerson.hasOwnProperty("firstName")) // true
*/
//#endregion objects

//#region Exercise: Level 1
/*
console.log("Exercise: Level 1:")
//! Exercise Level 1:
// 1
const dog = {}
// 2
console.log(dog)
// 3
dog.name = "Buddy"
dog.legs = 4
dog.color = "brown"
dog.age = 5
dog.bark = function () {
  return "woof woof"
}
// 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark)
// 5
dog.breed = false
dog.getDogInfo = function () {
  console.log(
    `This dog is called ${dog.name}, he has ${dog.legs} legs and is ${
      dog.color
    }. He is ${dog.age} years old and he goes ${dog.bark()}`
  )
}
dog.getDogInfo()
*/
//#endregion

//#region Exercise: Level 2
/*
console.log("Exercise: Level 2:")
//! Exercise Level 2:
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
}
// 1
const maxUser = ((users) => {
  let maxSkills = 0,
    userWithMostSkills = null
  for (let user in users) {
    if (users[user].skills.length > maxSkills) {
      maxSkills = users[user].skills.length
      userWithMostSkills = user
    }
  }

  console.log(userWithMostSkills)
})(users)
// 2
const loggdInUsers = ((users) => {
  const loggdInUsers = []
  for (let user in users) {
    if (users[user].isLoggedIn) loggdInUsers.push(user)
  }
  console.log(loggdInUsers)
})(users)

const bestUsers = ((users) => {
  const usersWithGoodScore = []
  for (let user in users) {
    if (users[user].points >= 50) usersWithGoodScore.push(user)
  }
  console.log(usersWithGoodScore)
})(users)
// 3
const mernDevs = ((users) => {
  const devs = []
  for (let dev in users) {
    if (
      users[dev].skills.includes("MongoDB") &&
      users[dev].skills.includes("Express") &&
      users[dev].skills.includes("React") &&
      users[dev].skills.includes("Node")
    ) {
      devs.push(dev)
    }
  }
  console.log(devs)
})(users)
// 4
const copyUsers = Object.assign({}, users)
copyUsers.Kiara = {
  email: "hannig.kiara@gmail.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 17,
  isLoggedIn: true,
  points: 30,
}
console.log(users)
console.log(copyUsers)
// 5 & 6
console.log(Object.keys(users))
console.log(Object.values(users))
// 7
const countries = {
  Germany: {
    capital: "Berlin",
    population: 832000000,
    languages: ["German", "English"],
  },
}
for (countrie in countries) {
  console.log(countrie, countries[countrie])
}
*/
//#endregion

//#region Exercise: Level 3
console.log("Exercise: Level 3:")
//! Exercise Level 3:
// 1
const personAccount = {
  firstName: "Kiara",
  lastName: "Hannig",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    let total = 0
    this.incomes.forEach((element) => {
      total += element
    })
    return total
  },
  totalExpense: function () {
    let total = 0
    this.expenses.forEach((element) => {
      total += element
    })
    return total
  },
  accountInfo: function () {
    return `This account belongs to ${this.firstName} ${this.lastName}.`
  },
  addIncome: function (x) {
    this.incomes.push(x)
  },
  addExpense: function (x) {
    this.expenses.push(x)
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense()
  },
}

console.log(personAccount.accountInfo())
personAccount.addIncome(100)
personAccount.addExpense(40)
personAccount.addExpense(40)
console.log(personAccount.accountBalance())
// 2
//* Users DB
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
]
//* Products DB
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
]

let new_id = ""
const date = new Date()

//* Chars
const chars = []
for (let i = 0; i < 10; i++) {
  chars.push(i.toString())
}
for (let i = 97; i < 123; i++) {
  chars.push(String.fromCharCode(i))
}

//* Account functions
function signUp(username, email, password) {
  _generateId()
  if (!_checkIfUserAlreadyExists(username, email)) {
    users.push({
      _id: new_id,
      username: username,
      email: email,
      password: password,
      createdAt: _getDate(),
      isLoggedIn: false,
    })
    console.log(`Created user ${username}, ${email}, ${password}`)
  } else {
    console.error(
      `The user with the username: ${username}, and the email: ${email} already exists`
    )
  }
}

function signIn(usernameOrEmail, password) {
  if (_checkIfUserExists(usernameOrEmail)) {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == usernameOrEmail ||
        (users[i].email == usernameOrEmail && users[i].password == password)
      ) {
        users[i].isLoggedIn = true
        console.log(`Signd in user ${usernameOrEmail}, ${password}`)
      }
    }
  } else {
    console.error(
      `The user with the username or email: ${usernameOrEmail} doesnt exist`
    )
  }
}

function signOut(usernameOrEmail, password) {
  if (_checkIfUserExists(usernameOrEmail)) {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == usernameOrEmail ||
        (users[i].email == usernameOrEmail && users[i].password == password)
      ) {
        users[i].isLoggedIn = false
        console.log(`Signd out user ${usernameOrEmail}, ${password}`)
      }
    }
  } else {
    console.error(
      `The user with the username or email: ${usernameOrEmail} doesnt exist`
    )
  }
}

//* Product functions
function rateProduct(productName, userName, rating) {
  for (i in products) {
    if (products[i].name == productName) {
      products[i].ratings.push({
        userId: _getUserId(userName),
        rate: rating,
      })
      console.log(
        `${userName} rated product ${products[i].name}: ${products[i].ratings} `
      )
    }
  }
}

function averageRating(productName) {}

//* Helper functions
function _generateId() {
  new_id = ""
  let id = ""
  // genreate random id from chars array
  for (let i = 0; i < 6; i++) {
    id += chars[Math.round(Math.random() * 35)]
  }
  _checkIfIdExists(id)
}
function _checkIfIdExists(id) {
  for (i in users) {
    if (users[i][0] == id) {
      _generateId()
    } else new_id = id
  }
}
function _getDate() {
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${
    date.getHours() >= 12 ? "PM" : "AM"
  }`
}
function _checkIfUserAlreadyExists(username, email) {
  let exists = false
  for (i in users) {
    if (users[i].username == username) {
      exists = true
    } else if (users[i].email == email) {
      exists = true
    }
  }
  return exists
}
function _checkIfUserExists(usernameOrEmail) {
  let exists = false
  for (i in users) {
    if (
      (users[i].username == usernameOrEmail) ^
      (users[i].email == usernameOrEmail)
    )
      exists = true
  }
  return exists
}
function _getUserId(userName) {
  for (user in users) {
    if (users[user].username == userName) return users[user]._id
  }
}

signUp("Kiara", "hannig.sebi@gmail.com", "12345")
signIn("hannig.sebi@gmail.com", "12345")
signOut("hannig.sebi@gmail.com", "12345")
rateProduct("Laptop", "Kiara", "5")
rateProduct("TV", "Thomas", 4.5)
// 3
// 4
//#endregion
