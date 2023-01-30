import { gatherFormInputs } from "../handlers/AddEntry.js"
import { fetchy } from "./fetchy.js"

async function patcher(id) {
    fetch(`employees/${id}`, {
        method: "PATCH",
        body: JSON.stringify(
            gatherFormInputs(document.querySelector("form"), "PATCH")
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => fetchy())
}

export { patcher }