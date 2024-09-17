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

*/

function loginMessage(username = "John") {
    if (!username) {
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage("Devi"))
console.log(loginMessage())