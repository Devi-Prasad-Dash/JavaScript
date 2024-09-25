/*

const promiseone = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async task is completed")
        resolve()
    }, 1000)
})

promiseone.then(function() {
    console.log("Promise consumed")
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is completed")
        resolve()
    }, 1000)
})
.then(function() {
    console.log("Promise resolved")
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 3 completed")
        resolve({name: "Devi", gmail: "devi12@gmail.com"})
    }, 2000)
})

promiseThree.then(function(response) {
    console.log(response)
})


const promiseFour = new Promise(function(resolve, reject) {
    let error = false
    setTimeout(function() {
        if (!error) {
        console.log("Async task 4 completed")
        resolve({name: "Devi Prasad", age: 21})
    }
    else {
        reject("ERROR : Something went wrong")
    }}, 2000)
})

promiseFour.then(function(response) {
    console.log("Promise resolved")
    return response.name
})
.then(function(name) {
    console.log("Name :", name)
})
.catch(function(err) {
    console.log(err)
})
.finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject) {
    let error = false
    if (!error) {
        console.log("Async task 5 completed")
        resolve({name: "Devi", age: 23})
    }
    else {
        reject('ERROR : Something went wrong')
    }
})

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch(error) {
        console.log(error)
    }
}

consumePromise();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

getAllUsers();

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    console.log("Data fetched")
    return response.json()
})
.then((data) => console.log(data))
.catch((err) => console.log(err))