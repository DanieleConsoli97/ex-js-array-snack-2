
const BookIds = [2, 13, 7, 21, 19]

async function jsonPromise(url) {

    try {
        const promiseFetch = await fetch(url)
        const obj = await promiseFetch.json()
        return obj

    } catch (error) {
        throw new Error("errore durante la fatch", error.message);

    }

}
async function getBooks(ids) {
    try {
        const PromiseArray = ids.map((id) => {
            const promise = jsonPromise(`http://localhost:5000/books/${id}`)
            return promise
        })

        const promiseJson = await Promise.all(PromiseArray)
        return promiseJson
    
    } catch (error) {
        throw new Error ("errore durante l'elaborazione della promise",error.message)
    }
}

try {
    (async () => {
    const promise = await getBooks(BookIds)
    console.log(promise)
})()
} catch (error) {
    console.log( "errore durante l'elaborazione", error )
}

