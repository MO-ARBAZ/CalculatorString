CalculatorString
A simple String Calculator API and frontend that takes a string of numbers, performs addition, and handles various input formats like commas and newlines. This project follows Test-Driven Development (TDD) principles and is implemented using Node.js for the backend and React.js for the frontend.

Technologies Used
Backend:
Node.js - JavaScript runtime for server-side development.
Express.js - Web framework for building the REST API.
Frontend:
React.js - JavaScript library for building the user interface.
Axios - Promise-based HTTP client for making API requests from the frontend to the backend.
Testing:
Jest - Testing framework for running unit tests on the backend.

git clone https://github.com/MO-ARBAZ/CalculatorString.git
cd CalculatorString

Install the backend dependencies:
npm install
npm start

Navigate to the client directory for the React frontend:
cd client
npm install
npm start


Usage
Open your browser and navigate to the frontend running at http://localhost:3000.
Enter numbers in the input field, separated by commas (,) or newlines (\n).
Click the Calculate button to compute the sum of the entered numbers.
The result will be displayed below the button.
If invalid input or negative numbers are provided, an error message will be shown.


Example Input and Output
Valid Inputs:
Input: "1,2,3"

Result: 6
Input: "1\n2,3"

Result: 6
Invalid Inputs:
Input: "1,-2,3"

Error: "Negative numbers not allowed: -2"
Input: "1,@2,3"

Error: "Invalid input: non-numeric value detected."

