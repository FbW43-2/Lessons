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
    // TODO
  };

  const addEmployee = async (empName, empSalary) => {
    // TODO
  }

  const changeEmployee = async (empName, empSalary) => {
    // TODO
  }

  const createEmployee = (event) => {
    event.preventDefault();
    addEmployee(name, salary);
    setName("");
    setSalary("");
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
