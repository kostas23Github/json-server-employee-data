import { depts } from "./addsSelects.js"


function generateSalary(dept) {
    let result
    let from, to

    for (let i = 0; i < 10; i++) {
        switch (dept) {
            case depts[0]:
                from = 50
                to = 90
                break
            case depts[1]:
                from = 30
                to = 70
                break
            case depts[2]:
                from = 90
                to = 140
                break
            case depts[3]:
                from = 40
                to = 60
                break
            case depts[4]:
                from = 30
                to = 100
                break
            default:
                from = 0
                to = 0
                break
        }
        result = (Math.floor(Math.random() * (to - from)) + from) * 1000
    }
    return result
}

const salaryy = setTimeout(() => {
    const department = document.querySelector("select[name='department']")
    department.addEventListener("change", () => {
        document.querySelector("input[name='salary']").value = generateSalary(department.value)
    })
}, 200)

export { salaryy }