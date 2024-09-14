/*
let a = null
let b;
let c = "Devi"
let d = 23

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

let e = "Devi";
let f = Number(e)
console.log(typeof(f))
console.log(f)

console.log(+true)
console.log(+"")

let a = 10;
console.log(++a)

console.log("1" == 1)
console.log("1" === 1)
console.log(null >= 0)
console.log(null > 0)
console.log(null == 0)
console.log(undefined > 0)
*/

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2)

const heroes = ["Thor", "Iron man", "Hulk"];

console.log(typeof heroes)

let obj = {
    name : "Devi",
    age : 21
}

console.log(typeof obj)

let fun = function(){
    console.log("Hello world");
}

console.log(typeof fun)