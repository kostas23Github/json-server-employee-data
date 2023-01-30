import { populateTable } from "../populateTable.js";

async function fetchy(input = "") {
    try {
        // The fetch url is the relevant url from the site. The part http://localhost:3000 is ommitted. I can append to the url the query params.
        let res
        if (input) {
            res = await fetch(`employees?q=${input}`)
        } else {
            res = await fetch(`employees`)
        }
        const data = await res.json()
        return populateTable(data)
    } catch (err) {
        console.log(err)
    }
}

export { fetchy }