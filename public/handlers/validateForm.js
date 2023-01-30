// This function checks if any of the inputs is empty. If so it returns false, else true. In more detail, it initializes a boolean variable to true. Then iterates every input child of the form-but the submit button-if it finds an input which is empty the boolean variable is set to false. Finally it returns the boolean variable. If at least one of the inputs is empty the if statement is executed and the bool is set to false. It isn't form specific, it is valid for any form.

function validateForm(form, method) {
    let returnedBool = true;
    // form has all the elements of both forms all the time, hence i exclude the id 
    Array.from(form.children).forEach(child => {
        if (child.type !== 'submit') {
            if (method === 'add' && child.name !== "id") {
                child.required = true
            }
        }
        if (child.value === "" && child.type !== "submit" && child.name !== "id") {
            // child.validity.valueMissing === true
            returnedBool = false
        }
    })
    return returnedBool
}

export { validateForm }