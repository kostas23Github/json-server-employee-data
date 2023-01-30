// This is the db file, as declared in the package.json file.

// https://github.com/boo1ean/casual
const casual = require('casual');

// Generate random city name
const depts = ['marketing', 'human resources', 'IT', 'customer service', 'accounting']

function generateSalary(dept) {
  let result = []
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
        from = 200
        to = 200
        break
    }
    result.push(casual.integer(from = from, to = to) * 1000)
  }
  return result
}

const generateData = () => {

  const data = { employees: [] }

  // Create 10 employees
  for (let i = 0; i < 100; i++) {

    data.employees.push({
      id: i,
      fullName: casual.full_name,
      email: casual.email,
      city: casual.city,
      address: casual.address,
      phone: casual.phone,
      yearsEmployed: casual.integer(from = 0, to = 50),
      card_data: casual.card_data,
      department: casual.random_element(depts),
      salary: 100
    })

      data.employees[i].salary = casual.random_element(generateSalary(data.employees[i].department))

  }
  return data
}

module.exports = generateData, depts, generateSalary