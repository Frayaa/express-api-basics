const employeeData = [
  {
    id: 1,
    product_name: "seto",
    email: "seto@mail.com",
    password: "password123",
  },
]

const employeesController = {
  getAllEmployee: (req, res) => {
    const { employee_name } = req.query

    if (employee_name) {
      const filtered = []

      employeeData.forEach((val) => {
        if (val.employee_name === employee_name) {
          filtered.push(val)
        }
      })

      return res.status(200).json({
        message: "Get all employees",
        data: filtered,
      })
    }

    return res.status(200).json({
      message: "Get all employees",
      data: employeeData,
    })
  },
  createNewEmployee: (req, res) => {
    let newEmployee = {
      ...req.body,
      id: employeeData[employeeData.length - 1].id + 1,
    }

    employeeData.push(newEmployee)

    return res.status(200).json({
      message: "employee added!",
      // data: employeeData[employeeData.length - 1],
    })
  },
  getEmployeeById: (req, res) => {
    // req.params.id -> string

    for (let employee of employeeData) {
      if (employee.id == req.params.id) {
        return res.status(200).json({
          message: "Get employee by ID",
          data: employee,
        })
      }
    }

    return res.status(404).json({
      message: "employee not found",
    })
  },
  deleteEmployeeById: (req, res) => {
    const { id } = req.params

    for (let i = 0; i < employeeData.length; i++) {
      if (employeeData[i].id == id) {
        employeeData.splice(i, 1)
        return res.status(200).json({
          message: "employee deleted",
        })
      }
    }

    return res.status(404).json({
      message: "employee not found",
    })
  },
  editEmployeeById: (req, res) => {
    const { id } = req.params

    for (let i = 0; i < employeeData.length; i++) {
      if (employeeData[i].id == id) {
        employeeData[i] = {
          ...employeeData[i],
          ...req.body,
        }

        return res.status(200).json({
          message: "employee edited",
          data: employeeData[i],
        })
      }
    }

    return res.status(404).json({
      message: "employee not found",
    })
  },
}

export default employeesController
