import Books from "./data.js";
const availableBooks = Books.filter(book => book.available === true)
console.log(availableBooks)
const discountedBooks = availableBooks.map((book) => {
    
    const price = parseFloat(book.price.replace('€', ''))
    const discountPrice = (Math.ceil(price * 20) / 100).toFixed(2)
    return {
        ...book,
        price: `${discountPrice} €`
    }
}
)
console.log(discountedBooks)
const  fullPricedBook = discountedBooks.find((book)=>{
    const price = parseFloat(book.price.replace('€', ''))
    return Number.isInteger(price) //  price % 1 === 0 
})

console.log(fullPricedBook)