import { fetchy } from "./fetchy.js"

async function deleter(index) {
    fetch(`employees/${index}`, {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((json) => fetchy())
}

export { deleter }