const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enables CORS for local development
app.use(bodyParser.json()); // Parses JSON data in requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quizdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for the quiz
const quizSchema = new mongoose.Schema({
    q1: String,
    q2: String,
    q3: String,
});
const Quiz = mongoose.model('Quiz', quizSchema);

// Route to handle quiz submission
app.post('/submit-quiz', async (req, res) => {
    const quizData = req.body;

    try {
        const newQuiz = new Quiz(quizData);
        await newQuiz.save();
        res.status(200).send('Quiz data received and stored');
    } catch (error) {
        res.status(500).send('Error saving quiz data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

