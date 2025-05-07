import Books from "./data.js";
const areThereAvailableBooks = Books.some(b => b.available) 
console.log(areThereAvailableBooks)
const booksByPrice = Books.sort((a,b)=>parseInt(a.price.replace("€","")) - parseInt(b.price.replace("€","")))
console.log(booksByPrice)