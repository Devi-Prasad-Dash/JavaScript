class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createId() {
        return `1290`
    }
}

const devi = new user("Devi Prasad")
// console.log(devi.createId())

class Teacher extends user {
    constructor(username, password) {
        super(username)
        this.password = password
    }
}

const chai = new Teacher("devi", "abc8080")
console.log(chai)
// console.log(chai.createId())