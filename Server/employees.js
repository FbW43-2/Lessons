const express = require('express');
const app = express();
const port = 3001;

/**
 * REQUEST PARSER
 */
app.use(express.json());

let employees = [
    {
        "name": "John",
        "salary": "15$/hour"
    },
    {
        "name": "Bob",
        "salary": "12$/hour"
    }
]

/* CRUD - CREATE READ UPDATE DELETE - middlewares
*/

// responding to GET REQUEST with employees object at path http://localhost:3001/employees
app.get('/employees', (req, res) => {
    res.send(employees);
});

// retrieves one employee from employees by name
// READ
app.get('/employee', (req, res) => {
    // name of employee in req.body
    console.log(req.body);
    // find employee by the name of bob
    const employee = employees.find(employee => employee.name = req.body.name);
    res.send(employee);
})

// CREATE a new employee and add him to the list of employees with a name and salary from the req.body
app.put('/employee', (req, res) => {
    // take in the name of the employee from req.body.name
    const employeeName = req.body.name;
    // take in the salary of the new employee from req.body.salary
    const employeeSalary = req.body.salary;
    // create the new employee
    const employee = {
        "name": employeeName,
        "salary": employeeSalary,
    }
    // add employee to the list of employees
    employees.push(employee);
    // respond to frontend
    res.send(employee);
})

// POST -> Update information in the backend
// change salary of one employee.
// pass the name of employee from the frontend in req.body
// pass the new salary of the employee from the frontend in req.body

app.post('/updateSalary', (req, res) => {
    // read in the name of the employee
    const employeeName = req.body.name;
    // read in the new salary of the employee
    const employeeSalary = req.body.salary;
    // find index in the array of employees by name
    const index = employees.findIndex(employee => employee.name === employeeName);
    // update salary
    employees[index].salary = employeeSalary;
    res.send(employees[index]);
});

//lsof -ti :3001 | xargs kill

// DELETE -> remove employee from the list of employees
app.delete('/employee', (req, res) => {
    // read the employee from the request
    const employeeName = req.body.name;
    // find the employee by name and delete from list of employees
    employees = employees.filter(employee => employee.name !== employeeName);
    // write respond
    res.send('Success');
})

app.listen(port, () => {
    console.log("Express app is listening at http://localhost:3001");
})
