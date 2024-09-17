/*

if (true) {
    let a = 10
    var b = 20
    const c = 30
}

// console.log(a)
// console.log(c)
console.log(b)


let a = 20

function outer() {
    let a = 10
    function inner() {
        console.log("Inner value of a : ", a)
        const val02 = 20
    }
    // console.log(val02)

    inner()
}

console.log("Outer value of a : ", a)
outer()

*/

console.log(addOne(5))

function addOne(num1) {
    return num1+1
}

// console.log(addTwo(5))

const addTwo = function (num2) {
    return num2+2
}

console.log(addTwo(5))