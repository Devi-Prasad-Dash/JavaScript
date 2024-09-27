function setUsername(username) {
    this.username = username
    console.log("Called")
}

function setUser(username, email, age) {
    setUsername.call(this, username);

    this.email = email
    this.age = age
}

const devi = new setUser("Devi Prasad", "deviprasddash2003@gmail.com", 23)
console.log(devi)