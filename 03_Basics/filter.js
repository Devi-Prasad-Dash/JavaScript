/*

const coding = ["java", "javaScript", "css", "html"]
const ans = coding.forEach( (element) => element )
console.log(ans)


const nums = [1,2,3,4,5,6,7,8,9,10]
const myNums = nums.filter( (ele) => ele > 5 )
console.log(myNums)


const books = [
    { title: "BookOne", genre: "History", publish: 2000, edition: 2010},
    { title: "BookTwo", genre: "Comic", publish: 2004, edition: 2012},
    { title: "BookThree", genre: "Science", publish: 2008, edition: 2014},
    { title: "BookFour", genre: "Fiction", publish: 2010, edition: 2018},
]

const ans = books.filter( (ele) => ele.genre === "History" && ele.publish > 1995 )

console.log(ans)


const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.map( (num) => num+10 )
console.log(newNums)


const nums = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums.map( (num) => num+10 )
                .map( (num) => num*2 )
                .filter( (num) => num % 5 == 0 )
console.log(newNums)


const nums = [10,20,30,40,50]

const newNums = nums.reduce( function(acc, num) {
    console.log("Acc : ", acc)
    console.log("Num : ", num)
    return acc + num
}, 0)

console.log(newNums)

const newNums = nums.reduce( (acc, num) => acc+num, 10)
console.log(newNums)

*/

const shoppingCart = [
    {
        course: "java",
        price: 3000
    },
    {
        course: "python",
        price: 2000
    },
    {
        course: "javaScript",
        price: 5000
    },
    {
        course: "aws",
        price: 1000
    },
] 

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log("Total price : ", total)