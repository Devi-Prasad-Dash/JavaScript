class user {
    constructor(name, username, password) {
        this.name = name
        this.username = username
        this.password = password
    }

    encryptPassword() {
        return `${this.password}@$%901`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const devi = new user("Devi", "Devi@gmail.com", "abc@123")

console.log(devi.encryptPassword())
console.log(devi.changeUsername())


function user2(name, username, password) {
    this.name = name
    this.username = username
    this.password = password
}

user2.prototype.encryptPassword = function() {
    return  `${this.password}@$%901`
}

user2.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const chai = new user2("chai", "chai@gmail.com", "chai1234")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())