/*

const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element)
}


const greetings = "Hello World"
for (const char of greetings) {
    if (char == ' ') {
        continue
    }
    console.log(char)
}


const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")

for (const [key, value] of map) {
    console.log(key+"  "+value)
}


const obj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in obj) {
    console.log(`${key} --> ${obj[key]}`)
}


const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")

for (const key in map) {
    console.log(`${key} --> ${map.get(key)}`)
}


const arr = [1,2,3,4,5]
for (const key in arr) {
    console.log(`${key} ---> ${arr[key]}`)
}


const arr = ["java", "c", "c++", "javascript", "html"]

arr.forEach( (val) => {console.log(val)} )
arr.forEach( function(val) { console.log(val) } )


function printMe(val) {
    console.log(val)
}


printMe = (val) => {console.log(val)}

const arr = ["java", "c", "c++", "javascript", "html"]
arr.forEach(printMe)


const arr = ["java", "c", "c++", "javascript", "html"]

arr.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


const obj = {
    name : "devi",
    age : 23
}

console.log(obj.age)
console.log(obj["name"])


*/

const myCoding = [
    {
        languagename : "java",
        code : "java"
    },
    {
        languagename : "javaScript",
        code : "js"
    },
    {
        languagename : "python",
        code : "py"
    }
]

myCoding.forEach( (item) => console.log(`${item["languagename"]} ---> ${item["code"]}`) )