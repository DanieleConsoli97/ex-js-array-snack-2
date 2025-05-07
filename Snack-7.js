import Books from "./data.js";

const tagCounts = Books.reduce((acc, book) => {   
    book.tags.forEach((tag)=>{
                if (!acc[tag]) {
                  acc[tag] = 1
                } else {
                    acc[tag] = acc[tag] + 1 
                }
    }
)
return acc

}, {})

console.log(tagCounts)
