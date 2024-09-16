const mySymbol = Symbol("key1")

const JsUser = {
    name : "Devi",
    [mySymbol] : "key2",
    age : 23,
    isLoggedIn : false,
    location : "Bhadrak",
    email : "devi@gmail.com"
}

/*

console.log(JsUser.name)
console.log(JsUser["age"])
console.log(JsUser[mySymbol])

JsUser.location = "Bhubaneswar"
Object.freeze(JsUser)
JsUser.location = "Cuttuck"
console.log(JsUser)

console.log(JsUser.greetings())
console.log(JsUser.greetings02)

*/

JsUser.greetings = function () {
    console.log(`Hi ${this.name}`)
}

JsUser.greetings02 = function() {
    console.log("Hello World")
}