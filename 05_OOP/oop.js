/*
const user = {
    username : "Devi",
    loginCount : 10,
    isLoggedIn : true,

    printDetails : function() {
        console.log(`Hello ${this.username}, welcome back`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.printDetails())
console.log(this)
*/

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Hello ${this.username}, welcome back`)
    }
}

const user1 = new user("Devi Prasad", 10, true)
const user2 = new user("Prasad Dash", 20, false)

console.log(user1)

user1.greeting()

console.log(user2.constructor)