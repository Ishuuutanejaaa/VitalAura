const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory user storage
let users = [];

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the VitalAura Backend Server!');
});

// Register Route
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = { username, password };
    users.push(newUser);

    res.status(201).send({ message: 'User registered successfully' });
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return res.status(200).send({ message: 'Login successful' });
    } else {
        return res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Users Route
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Start Server
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});
