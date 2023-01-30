// If the new entry button is clicked the form appears with the new entry submit button. If the change entry button is clicked instead, the other submit button is displayed and the id input as well(it is needed to know which entry to update(the fetch patch method needs it))

function toggleForm(e, form) {
    if (e.target.id === "toggle-NewEntryForm") {
        if (form.style.display !== "none" && document.getElementById("submit-new-entry").style.display === "block") {
            // In this if the toggle-NewEntryForm btn is pressed twice so the form is hidden
            form.style.display = "none"
            return
        }
        document.getElementById("submit-changed-entry").style.display = "none"
        document.querySelector("input[name='id']").style.display = "none"
        document.getElementById("submit-new-entry").style.display = "block"
    } else if (e.target.id === "toggle-changeEntryForm") {
        if (form.style.display !== "none" && document.getElementById("submit-changed-entry").style.display === "block") {
            // In this if the toggle-changeEntryForm btn is pressed twice so the form is hidden
            form.style.display = "none"
            return
        }
        document.getElementById("submit-new-entry").style.display = "none"
        document.querySelector("input[name='id']").style.display = "block"
        document.getElementById("submit-changed-entry").style.display = "block"
    }

    form.style.display = "flex"

}

export { toggleForm }