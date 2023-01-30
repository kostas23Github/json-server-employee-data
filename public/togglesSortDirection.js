import { sorty } from "./fetchers/sorter.js"

let order = "asc"

function togglesSortDirection(e) {
    const button = e.path[1].name
    order = order === "asc" ? "desc" : "asc"
    sorty(button, order)

}

export { togglesSortDirection }