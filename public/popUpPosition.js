// These functions handle the position of the popUp-delete div. On the edge cases where the click happens close to the edge of the document(whole page with overflow) the function displays the div so that it will always be on screen.
// document.body.clientWidth gets the full with of the document with the overflow.
// e.page(X|Y) that both functions get as parameters are the exact positions of the click event(not only the that of the visible page)

function popUpPositionX(ePosX) {

    switch (true) {
        case (ePosX < 120):
            return '20'
        case (ePosX > document.body.clientWidth - 470):
            return `${document.body.clientWidth - 440}` 
        default:
            return `${ePosX - 100}`
    }
}

function popUpPositionY(ePosY) {

    switch (true) {
        case (ePosY > document.body.clientHeight - 100):
            return `${document.body.clientHeight - 100}`
        default:
            return `${ePosY + 30}`
    }
}

export { popUpPositionX, popUpPositionY}