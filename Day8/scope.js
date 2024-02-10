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
*/
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
person.title = "Stident"
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

//#endregion objects