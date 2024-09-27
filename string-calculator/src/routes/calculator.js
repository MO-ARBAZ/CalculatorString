const express = require("express");
const { add } = require("../utils/add"); // Importing the add function from the utils directory
const router = express.Router(); // Creating an instance of Express Router

/**
 * @route   POST /api/calculate
 * @desc    Route to calculate the sum of numbers provided in the request body.
 *          Accepts numbers separated by commas or newlines, and throws an error for
 *          invalid input or negative numbers.
 * @access  Public
 *
 * @param {Object} req - The request object containing user input.
 * @param {Object} req.body - The body of the request, which should include a 'numbers' string.
 * @param {string} req.body.numbers - A string of numbers to be summed (comma or newline separated).
 *
 * @param {Object} res - The response object used to send back the result.
 *
 * @returns {Object} - Returns a JSON response with either the sum result or an error message.
 *
 * @throws {Error} - Throws an error if input is invalid (e.g., contains non-numeric values or negative numbers).
 */
router.post("/", (req, res) => {
  try {
    const { numbers } = req.body; // Extracting the 'numbers' string from the request body
    const result = add(numbers); // Calling the add function to calculate the sum
    res.status(200).json({ result }); // Returning the result with a 200 status code
  } catch (error) {
    res.status(400).json({ error: error.message }); // Returning an error with a 400 status code if input is invalid
  }
});

module.exports = router; // Exporting the router
