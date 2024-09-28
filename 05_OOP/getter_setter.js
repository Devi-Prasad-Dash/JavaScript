class user {
    constructor(username, email) {
        this.username = username
        this.email = email
    }

    get username() {
        return this._username.toUpperCase()
    }

    set username(value) {
        this._username = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }
}

const devi = new user("deviprasad", "devi@gmail.com")
console.log(devi.username)