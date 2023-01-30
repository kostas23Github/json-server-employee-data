
const depts = ["marketing", "human resources", "IT", "customer service", "accounting"]

function selectElem(name) {
    const select = document.createElement("select")
    select.setAttribute("name", name)
    const option = document.createElement("option")
    option.disabled
    option.selected
    option.innerText = "-department-" 
    select.appendChild(option)
    depts.forEach(dept => {
        const option = document.createElement("option")
        option.value = dept
        option.innerHTML = dept
        select.appendChild(option)
    })
    return select

}

export { selectElem, depts }