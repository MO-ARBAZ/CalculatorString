import React, { useState } from "react"; // Importing necessary hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import "./Calculator.css"; // Importing CSS for styling the Calculator component

// Calculator component
const Calculator = () => {
  // State to manage input value from the user
  const [input, setInput] = useState("");

  // State to store the result of the calculation
  const [result, setResult] = useState(null);

  // State to handle any error messages
  const [error, setError] = useState("");

  // Function to handle the calculation when the button is clicked
  const handleCalculate = async () => {
    setError(""); // Reset any previous error message
    setResult(null); // Reset the result before calculating
    try {
      // Making a POST request to the backend API with the input numbers
      const response = await axios.post("http://localhost:5000/api/calculate", {
        numbers: input, // Sending the user input as the request body
      });
      // If successful, update the result state with the response data
      setResult(response.data.result);
    } catch (err) {
      // If an error occurs, set the error state with the error message from the response
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      {/* Input field for the user to enter numbers */}
      <input
        type="text"
        value={input} // Binding the input field to the input state
        onChange={(e) => setInput(e.target.value)} // Updating state on input change
        placeholder="Enter numbers" // Placeholder text for the input field
      />
      {/* Button to trigger the calculation */}
      <button onClick={handleCalculate}>Calculate</button>
      {/* Displaying the result if it's not null */}
      {result !== null && <h2>Result: {result}</h2>}
      {/* Displaying the error message if there is an error */}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Calculator; // Exporting the Calculator component for use in other parts of the app
