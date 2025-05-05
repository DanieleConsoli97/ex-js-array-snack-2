import Books from "./data.js";
const longBooks = Books.filter((book)=>book.pages>300)
console.log(longBooks)
const longBooksTitle = longBooks.map((book)=> book.title)
console.log(longBooksTitle)
Books.forEach((book)=>console.log(book.title))