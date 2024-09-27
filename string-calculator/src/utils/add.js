/**
 * Adds a string of numbers separated by commas or newlines.
 * Handles cases where the input is empty, contains non-numeric values, or negative numbers.
 *
 * @param {string} numbers - A string containing numbers separated by commas or newlines.
 * @returns {number} The sum of the numbers in the string.
 * @throws {Error} Throws an error if the input contains negative numbers or non-numeric values.
 *
 * @example
 * add("1,2,3"); // Returns 6
 *
 * @example
 * add("1\n2,3"); // Returns 6 (newlines are also valid delimiters)
 *
 * @example
 * add(""); // Returns 0 (empty input)
 *
 * @example
 * add("1,-2,3"); // Throws an error: "Negative numbers not allowed: -2"
 *
 * @example
 * add("1,a,3"); // Throws an error: "Invalid input: non-numeric value detected."
 */
function add(numbers) {
  // Return 0 if the input string is empty
  if (numbers === "") {
    return 0;
  }

  // Split the string into an array using commas or newlines as delimiters
  const delimiters = /,|\n/; // Regex to match either commas or newlines
  const numberArray = numbers.split(delimiters);

  const negativeNumbers = []; // To track negative numbers
  let sum = 0; // Variable to accumulate the sum

  // Loop through the array of string numbers
  numberArray.forEach((num) => {
    if (num.trim() === "") return; // Ignore empty strings (in case of extra delimiters)

    // Check for non-numeric values using regex
    if (!/^-?\d+(\.\d+)?$/.test(num.trim())) {
      throw new Error("Invalid input: non-numeric value detected.");
    }
    // Check for '+' sign
    if (num.trim().startsWith("+")) {
      throw new Error("Invalid input: '+' sign is not allowed.");
    }
    const parsedNum = parseFloat(num); // Convert the string to a number

    // If parsing fails, throw an error for non-numeric input
    if (isNaN(parsedNum)) {
      throw new Error("Invalid input: non-numeric value detected.");
    }

    // Collect negative numbers, throw error later
    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    } else {
      sum += parsedNum; // Add to sum if the number is valid and non-negative
    }
  });

  // If any negative numbers were found, throw an error
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return sum; // Return the final calculated sum
}

module.exports = { add };
