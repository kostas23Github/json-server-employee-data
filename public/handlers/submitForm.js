import { poster } from '../fetchers/poster.js'
import { validateForm } from './validateForm.js'
import { patcher } from '../fetchers/patcher.js'


// This function handles which function to call when the form is submitted, the one that posts a new entry or the one that updated and entry.
// The submit event is a different event, there is no e.target. There are different properties such as the submitter which has information about the element responsible for the submitting of the form(i.e. the button)
function submitForm(e) {
    if (e.submitter.id === "submit-changed-entry") {
        // e.path[0] is the from elem
        e.path[0].style.display = "none"
        return patcher(e.path[0].querySelector("input[name='id']").value)
    } else if (e.submitter.id === "submit-new-entry") {
        if (validateForm(document.querySelector("form"))) {
            e.path[0].style.display = "none"
            return poster()
        }
    }
    return;
}

export { submitForm }