import Books from "./data.js";

const age = Books.map(book => book.author.age)
console.log(age)

const agesSum = age.reduce((sum,age)=>{
    return sum + age
},0)

console.log(agesSum/age.length)