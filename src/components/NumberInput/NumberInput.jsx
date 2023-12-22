// NumberInput.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NumberInput() {
    const [inputNumbers, setInputNumbers] = useState('');
    const [binaryTreeJson, setBinaryTreeJson] = useState('');

    const handleSubmission = async (event) => {
        event.preventDefault();
        const formattedInput = inputNumbers.replace(/,/g, ' ');
        const parameters = new URLSearchParams();
        parameters.append('numbers', formattedInput);
        try {
            const response = await axios.post('http://localhost:8080/api/tree/create', parameters);
            setBinaryTreeJson(response.data);
        } catch (error) {
            console.error('Error submitting numbers:', error);
        }
    };

    return (
        <div>
            <h1>Binary Tree Number Input</h1>
            <form onSubmit={handleSubmission}>
                <input
                    type="text"
                    value={inputNumbers}
                    onChange={(e) => setInputNumbers(e.target.value)}
                    placeholder="Enter numbers separated by commas"
                />
                <button type="submit">Generate Tree</button>
            </form>
            {binaryTreeJson && <pre>{JSON.stringify(binaryTreeJson, null, 2)}</pre>}
            <Link to="/archived-trees">View Archived Trees</Link>
        </div>
    );
}

export default NumberInput;
