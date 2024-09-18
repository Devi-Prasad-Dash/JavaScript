/*

const temp = 40

if(temp <= 50) {
    console.log("Temperature is less than 50 degree")
} else {
    console.log("Temperature is greater than 50 degree")
}


const balance = 500
if(balance > 500) console.log("You've sufficient balance in your bank account")
else console.log("You've not sufficient balance in your bank account")


const res = 79
if(res >= 90) {
    console.log("Grade : A+")
}
else if (res >= 80) {
    console.log("Grade : A")
}
else {
    console.log("Okay")
}


const isuserLoggedIn = true
const isDebitCard = false

if (isuserLoggedIn && isDebitCard) {
    console.log("You can do your payment")
}
else console.log("You can't do your payment")

const loginFromGoogle = false
const loginFromEmail = true 

if (loginFromEmail || loginFromGoogle) {
    console.log("You can now do your work")
}


const monthName = "apr"

switch (monthName) {
    case "jan": console.log("Month number : 1")
        break;

    case "feb": console.log("Month number : 2")
        break;

    case "mar": console.log("Month number : 3")
        break;

    case "apr": console.log("Month number : 4")
        break;

    default: console.log("Enter a valid month name")
        break;
}


console.log("" == 0)
console.log(false == 0)


const usermail = []       // truthy value

if (usermail) {
    console.log("User have a mail")
}
else console.log("User haven't a mail")


const usermail = []

if (usermail.length === 0) {
    console.log("User have not a mail")
}
else console.log("User have a mail")


const obj = {1: "hi"}

if (Object.keys(obj).length === 0) {
    console.log("Empty object")
}
else {
    console.log("Object is not empty")
}


// Nullish coalenscing operator

let val1;
let val2;
val1 = null ?? 10
val2 = undefined ?? 20

console.log(val1)
console.log(val2)

*/

const price = 150

let msg = (price <= 100) ? "Price is low" : "Price is high"
console.log(msg)