// This is the equivalent to index.js

/**
 * The casual.js file is generating the data for the database(it is watched by json-server in the package.json file). To see the db data i go to /db in the browser. The fetchy function according to the url fetches the appropriate data. It can accept query params. The populateTable function adds those data to the HTML. This function can handle only the /cities in from the db.
 */

import { toggleForm } from "./handlers/toggleForm.js"
import { submitForm } from "./handlers/submitForm.js"
import { fetchy } from "./fetchers/fetchy.js"

/*** DOM Listeners ***/
const input = document.getElementById('query')
document.querySelector('form').style.display = 'none'
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(e)
})
document.getElementById('toggle-NewEntryForm').addEventListener('click', (e) => toggleForm(e, document.querySelector('form')))
document.getElementById('toggle-changeEntryForm').addEventListener('click', (e) => toggleForm(e, document.querySelector('form')))
input.addEventListener('input', () => fetchy(input.value.trim()))

// fetchy is an an async function-takes some miliseconds to fetch the data so the listener on the fetched table and the delete function also on the table needs to wait for the promise to fullfil.
// new Promise((resolve, reject) => resolve(fetchy(input.value)))
//     .then(() => {
//     })