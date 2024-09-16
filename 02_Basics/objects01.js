/*

const mySymbol = Symbol("key1")

const JsUser = {
    name : "Devi",
    [mySymbol] : "key2",
    age : 23,
    isLoggedIn : false,
    location : "Bhadrak",
    email : "devi@gmail.com"
}

console.log(JsUser.name)
console.log(JsUser["age"])
console.log(JsUser[mySymbol])

JsUser.location = "Bhubaneswar"
Object.freeze(JsUser)
JsUser.location = "Cuttuck"
console.log(JsUser)

console.log(JsUser.greetings())
console.log(JsUser.greetings02)

JsUser.greetings = function () {
    console.log(`Hi ${this.name}`)
}

JsUser.greetings02 = function() {
    console.log("Hello World")
}

// Objects creation using constructor 

const obj1 = new Object()
console.log(obj1)


const regularUser = {
    email : "devi@gmail.com",
    username : {
        firstName : "Devi",
        lastName : "Prasad"
    }
}

console.log(regularUser.username.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {obj1, obj2}
const obj3 = {...obj1, ...obj2}

console.log(obj3)


const user = [
    {name : "Devi"},
    {name : "Prasad"},
    {name : "Dash"}
]

console.log(user[1].name)


console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

*/

const regularUser = {
    email : "devi@gmail.com",
    username : {
        firstName : "Devi",
        lastName : "Prasad"
    },
    age : 23,
    location : "BBSR"
}

console.log(regularUser.hasOwnProperty('emails'))