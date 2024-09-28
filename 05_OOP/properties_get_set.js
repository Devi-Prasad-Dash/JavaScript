function user(username, email) {
    this._username = username;
    this._email = email

    Object.defineProperty(this, 'username', {
        get: function() {
            return this._username.toUpperCase();
        },
        set: function(value) {
            this._username = value
        }
    })

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email
        },
        set: function(value) {
            this._email = value
        }
    })
}

const devi = new user("devi", "devi@gmail.com")
console.log(devi._username)