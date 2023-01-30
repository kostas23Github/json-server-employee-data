import { inputElem } from './formInputs/addsInputs.js'
import { selectElem } from './formInputs/addsSelects.js'

// This function adds to the DOM the table head, with all its data, and executes only once.

function populateTHead(dbData) {
    const form = document.querySelector('form')
    const table = document.querySelector('table')
    const colgroup = document.createElement('colgroup')
    const thead = document.createElement('thead')

    dbData.forEach(entry => {
        // Only one time this if is executed. The other times the table has thead and colgroup
        if (!thead.querySelector('tr')) {
            const tr = document.createElement('tr')
            Object.keys(entry).forEach(key => {
                const th = document.createElement('th')
                const col = document.createElement('col')
                const button = document.createElement('button')
                const img = document.createElement('img')
                button.classList.add("button", "sort-button")
                button.setAttribute('name', key)
                img.src = "./assets/icons8-sort-down-10.png"
                button.appendChild(img)
                colgroup.appendChild(col)
                th.textContent = key
                th.appendChild(button)
                tr.appendChild(th)
                // Forms children are table options - id + 2 submit btns. Object keys are table options(with id), so to i add two to make the form elements always fewer for the iterator to add all the table keys.
                if (form.children.length < Object.keys(entry).length + 2) {
                    if (key === 'department') {
                        form.appendChild(selectElem(key))
                    } else {
                        form.appendChild(inputElem(key))
                    }
                }
            })

            thead.appendChild(tr)
            table.appendChild(colgroup)
            table.appendChild(thead)
        }
    })
}

export { populateTHead }