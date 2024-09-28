/*

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

console.log(Math.PI)
Math.PI = 4
console.log(Math.PI)

*/

const chai = {
    name: "Masala chai",
    price: 50,
    isAvailable: true,

    orderChai : function(){
        console.log("Chai is not ready")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}

// console.log(chai.name)

chai.name = 'green tea'
console.log(chai.name)