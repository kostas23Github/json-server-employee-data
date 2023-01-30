import { populateTable } from "../populateTable.js";

async function sorty(button, order) {
    try {
        // The fetch url is the relevant url from the site. The part http://localhost:3000 is ommitted. I can append to the url the query params.
        let res = await fetch(`employees?_sort=${button}&_order=${order}`)
        let data = await res.json()
        return populateTable(data)
    } catch (err) {
        console.log(err)
    }
}

export { sorty }