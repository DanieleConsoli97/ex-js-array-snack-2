import Books from "./data.js";

const BookIds = [2, 13, 7, 21, 19]

async function jsonPromise(url) {
    const promiseFetch = await fetch(url)
    const obj = await promiseFetch.json()
    return obj
}
async function getBooks(ids) {
    const PromiseArray = ids.map((id) => {
        const promise = jsonPromise(`http://localhost:5000/books/${id}`)
        return promise
    })

    console.log(PromiseArray)
    const promiseJson = await Promise.all(PromiseArray)
    return promiseJson

}


(async () => {
    const promise = await getBooks(BookIds)
    console.log(promise)
})()
