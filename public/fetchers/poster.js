import { gatherFormInputs } from "../handlers/AddEntry.js"
import { fetchy } from "./fetchy.js"

async function poster() {
    fetch("employees", {
        method: "POST",
        body: JSON.stringify(
            gatherFormInputs(document.querySelector("form"), "POST")
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => fetchy())
}

export { poster }