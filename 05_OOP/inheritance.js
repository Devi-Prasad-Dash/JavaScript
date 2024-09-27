class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`)
    }
}

const devi = new Teacher("Devi Prasad", "devi@gmail.com", "abc@123")
devi.logMe()

const chai = new Teacher("chai", "chai@gmail.com", "chai123")
chai.logMe()

console.log(chai instanceof user)
console.log(devi instanceof Teacher)