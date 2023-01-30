
// This function is executed when the Add button is clicked(listener at importToHTML.js). It posts the new data to the db, and then calls the fetchy function to fetch the new db.

// At the id i want to icrement the entry's id by one of the last entry. So i need to select the last id and add one to it.
// This is a valid selector but didn't work in the obj below.
// console.log(document.querySelector('tbody > tr:last-child > td'))


function gatherFormInputs(form, method) {
    let postBody = {}
    if (method === "POST") {
        postBody.id = Number(document.querySelector("tbody").lastChild.firstChild.innerHTML) + 1
        Array.from(form.children).forEach(child => {
            if (child.type !== "submit") {
                postBody[child.name] = child.value
            }
        })
    } else if (method === "PATCH") {
        Array.from(form.children).forEach(child => {
            if (child.value !== "" && child.type !== "submit") {
                postBody[child.name] = child.value
            }
        })
    }
    return postBody
}

export { gatherFormInputs }