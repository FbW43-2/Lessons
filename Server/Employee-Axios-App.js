

import React, { useState, useEffect } from "react";
import './App.css';
const axios = require('axios').default;

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get('http://localhost:3001/employees').then(resp => setEmployees(resp.data));
    } catch (err) {
      // error handling
      console.error(err);
    }
  };

  const addEmployee = async (empName, empSalary) => {
    try {
      await axios.put('http://localhost:3001/employee', { "name": empName, "salary": empSalary }).then(resp => sendGetRequest());
    } catch (err) {
      // error handling
      console.error(err);
    }
  }

  const changeEmployee = async (empName, empSalary) => {
    try {
      await axios.post('http://localhost:3001/updateSalary', { "name": empName, "salary": empSalary }).then(resp => sendGetRequest());
    } catch (err) {
      // error handling
      console.error(err);
    }
  }

  const createEmployee = (event) => {
    event.preventDefault();
    addEmployee(name, salary);
    setName("");
    setSalary("");
  }

  const deleteEmployee = async (empName) => {
    try {
      await axios.delete("http://localhost:3001/employee", {"data": {"name": empName}}).then(() => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Create a new employee</h1>
      <form onSubmit={createEmployee}>
        <p>
          <label htmlFor="form-name">Name:</label>
          <input
            id="form-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </p>
        <p>
        <label htmlFor="form-salary">Salary:</label>
          <input
            id="form-salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </p>
        <p>
          <button type="submit">Create new employee</button>
        </p>
      </form>
      <button onClick={() => changeEmployee(name, salary)}>Change salary</button>
      <button onClick={() => deleteEmployee(name)}>Delete employee</button>
      <h1>Employees</h1>
      <ul style={{ "list-style-type": "none" }}>
        {employees.length < 1 && <li key="empty">No employees yet!</li>}
        {employees.map((employee, index) => (
          <li key={index}>
            <h2>{employee.name}
            </h2>
            <p>{employee.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
