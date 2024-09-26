import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css'; // Make sure this path is correct

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = async () => {
        setError(''); // Reset error message
        try {
            const response = await axios.post('http://localhost:5000/api/calculate', { numbers: input });
            setResult(response.data.result);
        } catch (err) {
            setError(err.response.data.error || 'An error occurred');
        }
    };

    return (
        <div className="container">
            <h1>String Calculator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter numbers"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Calculator;
