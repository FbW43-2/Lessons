const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// omit cors errors
app.use(cors());

let robotFactory = [];

// write function, which adds a json object with the robot name and the default position/heaing to the robotFactory Array
createRobot = (robotName) => {
    robotFactory.push({
        // TODO
    })
}

// write a functions which finds a robot by id and changes his direction clockwise
turnRight = (id) => {
    // TODO
}

// write a functions which finds a robot by id and changes his direction anti-clockwise
turnLeft = (id) => {
    // TODO
}

// write a functions which finds a robot by id and changes his position one step forward
moveForward = (id) => {
    // TODO
}

// fill out the middleware function, which responds with the entire robotFactory array
app.get('/robots', (req, res) => {
    // TODO
})

// write a middleware, which creates a new robot using the function createRobot. Read the name from the request body
app.put('/create', (req, res) => {
    // TODO
});

// write a middleware, which rotates one robot right using the function rotateRight. Read the id from the request body
app.post('/right', (req, res) => {
    // TODO
});

// write a middleware, which rotates one robot left using the function rotateLeft. Read the id from the request body
app.post('/left', (req, res) => {
    // TODO
});

// write a middleware, which moves the robot using the function moveRobot. Read the id from the request body
app.post('/move', (req, res) => {
    // TODO
});

app.listen(port, () => {
    console.log(`Eddy is listening for commands at http://localhost:${port}`)
});