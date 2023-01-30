// This function adds to the DOM the table body

function populateTBody(dbData) {
    const table = document.querySelector('table')
    table.querySelector('tbody') && table.querySelector('tbody').remove()
    const tbody = document.createElement('tbody')
    dbData.forEach(employee => {
        const entry = document.createElement('tr')
        Object.values(employee).forEach(value => {
            const td = document.createElement('td')
            if (typeof value === 'object') {
                // In this case only the card data is an obj.
                Object.entries(value).forEach((innerKey, innerValue) => {
                    // innerKey['type', 'Mastercard'] is an obj, innerKey[0] holds the type of the entry
                    if (innerKey[0] !== 'holder_name') {
                        // Stack them
                        td.innerHTML += innerKey + '<br>'
                    }
                })
                // By default adds a comma, so i replace it with an arrow for style
                td.innerHTML = td.innerHTML.replaceAll(',', ' -> ')
            } else {
                td.innerHTML = value
            }
            entry.appendChild(td)
        })
        tbody.appendChild(entry)
    })
    table.appendChild(tbody)
}

export { populateTBody }