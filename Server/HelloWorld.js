const express = require('express');
const app = express();
const port = 3001;

const employees = [
    {
        "name": "John",
        "salary": "15$/hour"
    },
    {
        "name": "Bob",
        "salary": "12$/hour"
    }
]

// responding to GET REQUESTS with "Hello World" at path http://localhost:3001/
app.get('/', (req, res) =>{
    res.send("Hello World");
});

// responding to GET REQUEST with <h1>Hello World</h1> (HTML) at path http://localhost:3001/HelloWorldHTML
app.get('/HelloWorldHTML', (req, res) => {
    res.send("<h1>Hello World</h1>"+
             "<h2>This is Express</h2>"   );
});

app.get('/employees', (req, res) => {
    res.send(employees);
});

app.get('/date', (req, res) => {
    res.send(new Date())
})

app.listen(port, () => {
    console.log("Express app is listening at http://localhost:3001");
})
