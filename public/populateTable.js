import { populateTHead } from "./populateTHead.js"
import { populateTBody } from "./populateTBody.js"
import { deleteBtn } from "./handlers/deleterHandler.js"
import { togglesSortDirection } from "./togglesSortDirection.js"

// The salaryy works despite not being used anywhere. ??? 
import { salaryy } from "./formInputs/determineSalary.js"


function populateTable(dbData) {
    const table = document.querySelector("table")

    if (!table.querySelector("thead")) {
        populateTHead(dbData)
        Array.from(document.querySelectorAll(".sort-button")).forEach(button => button.addEventListener('click', (e) => togglesSortDirection(e)
        ))
    }

    populateTBody(dbData)
    deleteBtn()

}

export { populateTable }