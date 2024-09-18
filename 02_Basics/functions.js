/*

function addTwoNumbers(num1, num2) {
    console.log(num1+num2)
}

addTwoNumbers(5,6)


function addTwoNumbers(num1, num2) {
    return num1+num2
}

const result = addTwoNumbers(5,10)
console.log(result)


function loginMessage(username) {
    if (!username) {
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginMessage("Devi"))
console.log(loginMessage())


function loginMessage(username = "John") {
    return `${username} just logged in`
}

console.log(loginMessage("Devi"))
console.log(loginMessage())


function add(num1, num2, ...num) {
    return num
}

console.log(add(1,2,3,4,5,6,7,8))


const user = {
    name : "Devi",
    age : 21
}

function handleOnject(object) {
    return `Your name is ${object.name} and your age is ${object.age}`
}

console.log(handleOnject(user))


function handleArray(arr1) {
    return arr1[0]
}

console.log(handleArray([1,2,3,4]))


const user = {
    username : "Devi",
    age : 21,
    wishMessage : function() {
        console.log(`${this.username} just logged in`)
        console.log(this)
    }
}
console.log(this)
user.wishMessage()
user.username = "Prasad"
user.wishMessage()


function chai() {
    let username = "Devi"
    console.log(this);
}

chai()


const chai = () => {
    console.log(this)
}

chai()


const add = (num1, num2) => {
    return num1+num2
}

console.log(add(5,6))


const add = (num1, num2) => num1 + num2
console.log(add(5,6))

const details = () => ({name : "Devi", age: 23})
console.log(details())

*/


const msg = ((name) => (`DB Connected for ${name}`))("Devi");
console.log(msg);

(function chai(){
    console.log("Hello world")
})();