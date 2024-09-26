/*

let myHeroes = ["Ironman", "Thor", "Hulk"]

let heroPower = {
    Thor: "Lightning",
    Spiderman: "Sling",

    spidyPower: function() {
        console.log(`Spiderman power : ${this.Spiderman}`)
    }
}

Object.prototype.devi = function() {
    console.log("Devi present in all objects")
}

Array.prototype.heyDevi = function() {
    console.log("Devi says hello to everyone")
}

myHeroes.devi()
myHeroes.heyDevi()

heroPower.devi()
// heroPower.heyDevi()

*/

const User = {
    name: "person",
    email: "person@gmail.com"
}

const Teacher = {
    teaching: true
}

const Support = {
    isAvailable: false
}

const TAStaffs = {
    makeAssignments: true,
    isAvailable: true,
    __proto__: Support
}

Teacher.__proto__ = User;

Object.setPrototypeOf(Support, Teacher)

console.log(Support.teaching)
console.log(TAStaffs.name)

let name = "ChaiAurCode    "

String.prototype.trueLength = function() {
    console.log(this)
    console.log(`True length is : ${this.trim().length}`)
}

name.trueLength()
"Devi Prasad Dash    ".trueLength()