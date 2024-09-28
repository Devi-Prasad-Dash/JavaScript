const user = {
    _email: "CHAI@gmail.com",
    _password : "chai123",

    get email() {
        return this._email.toLowerCase()
    }, 
    set email(value) {
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email)