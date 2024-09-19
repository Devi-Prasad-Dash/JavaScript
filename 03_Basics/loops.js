/*

for (let i = 1; i <= 10; i++) {
    
    for (let j = 1; j <= 10; j++) {
        
        console.log(`${i} X ${j} = ${i*j}`)
    }
    console.log()
}


const arr = ["Apple", "Orange", "Mango"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected")
        break
    }
    console.log(i)
}


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected")
        continue
    }
    console.log(i)
}


let i = 1
while (i <= 10) {
    console.log(i)
    i = i + 1
}


const arr = ["Apple", "Orange", "Mango"]

let i = 0
while (i < arr.length) {
    console.log(arr[i])
    i++
}

*/

let score = 1

do {
    console.log(`Score is ${score}`)
    score = score + 1
} while (score <= 10)