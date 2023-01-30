// Creates an input DOM element with its attributes and appends it to the form DOM element.

import { validateForm } from "../handlers/validateForm.js"

function inputElem(name) {
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("name", name)
    input.setAttribute("placeholder", name)
    input.setAttribute("autocomplete", "off")
    
    return input
}

export { inputElem }