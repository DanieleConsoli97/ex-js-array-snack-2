import Books from "./data.js";
const authors = Books.map(book => book.author)
console.log(authors)
const areAuthorsAdults = authors.every(author => author.age >= 18)
console.log(areAuthorsAdults)


if (areAuthorsAdults === true) {
    console.log(authors.sort((a, b) => a.age - b.age))
} else {
    console.log(authors.sort((a, b) => b.age - a.age))
}

