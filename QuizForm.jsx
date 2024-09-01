// src/QuizForm.js

import React, { useState } from 'react';
import axios from 'axios';

function QuizForm() {
    // State to hold form data
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
    });

    // State for handling form submission and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle changes in the form inputs
    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        setLoading(true); // Start loading

        try {
            // Send POST request to the backend
            const response = await axios.post('http://localhost:3000/submit-quiz', answers);
            alert('Quiz submitted successfully!');
            console.log('Success:', response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            alert('Error submitting quiz.');
            console.error('Error:', error);
            setError('An error occurred while submitting the quiz.');
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div className="quiz-form">
            <h2>Quiz Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="q1">Question 1</label>
                    <input
                        type="text"
                        id="q1"
                        name="q1"
                        value={answers.q1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="q2">Question 2</label>
                    <input
                        type="text"
                        id="q2"
                        name="q2"
                        value={answers.q2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="q3">Question 3</label>
                    <input
                        type="text"
                        id="q3"
                        name="q3"
                        value={answers.q3}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default QuizForm;
