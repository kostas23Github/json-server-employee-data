import { deleter } from '../fetchers/deleter.js'
import { popUpPositionX, popUpPositionY } from '../popUpPosition.js'

function deleteBtn() {
    const tbody = document.querySelector('tbody')
    Array.from(tbody.querySelectorAll('tr')).forEach(row => {
        row.addEventListener('click', e => popUpAppears(e))
        row.addEventListener('dblclick', e => popUpDisappears(e))
    })
}
// 430, 40
function popUpAppears(e) {
    // Create only one div.
    if (document.getElementById('popUp')) return
    e.path[1].style.backgroundColor = '#7289dacd'
    const div = document.createElement('div')
    div.setAttribute('id', 'popUp')
    div.style.position = 'absolute'
    div.style.left = popUpPositionX(e.pageX) + 'px'
    div.style.top = popUpPositionY(e.pageY) + 'px'
    const button = document.createElement('button')
    button.setAttribute('class', 'button')
    button.innerHTML = 'Delete Entry'
    div.appendChild(button)
    div.append(document.createElement('p').innerHTML = 'Double click anywhere to close this popup!')
    document.querySelector('tbody').appendChild(div)
    button.addEventListener('click', () => {
        // This e is the event of the click on the row that displayed the popup. 
        popUpDisappears(e)
        // After selecting the target, i get its parent then its first child then its data.
        // event.path is the bubbling path of the event up the tree to the window obj.
        deleter(e.target.parentElement.querySelector('td').innerHTML)
    })
}

function popUpDisappears(e) {
    document.getElementById('popUp').remove()
    e.target.removeEventListener('click', popUpAppears)
    e.target.removeEventListener('dblclick', popUpDisappears)
    e.path[1].style.backgroundColor = 'unset'
}

export { deleteBtn }