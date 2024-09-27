const { add } = require("../utils/add");

/**
 * Test case for empty string input.
 * The add function should return 0 if the input string is empty.
 */
test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0); // Empty string should return 0
});

/**
 * Test case for a string of numbers separated by commas.
 * The add function should correctly sum the numbers separated by commas.
 */
test("should return sum of numbers separated by commas", () => {
  expect(add("1,2")).toBe(3); // "1,2" should return 3
});

/**
 * Test case for handling newlines as delimiters.
 * The add function should sum the numbers even if they are separated by newlines and commas.
 */
test("should handle newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6); // "1\n2,3" should return 6
});

/**
 * Test case for negative numbers.
 * The add function should throw an error when the input contains negative numbers.
 * The error message should include the negative numbers.
 */
test("should throw an error for negative numbers", () => {
  expect(() => add("1,-2")).toThrow("Negative numbers not allowed: -2"); // Should throw error for negative numbers
});

/**
 * Test case for non-numeric input.
 * The add function should throw an error if the input contains non-numeric values.
 * The error message should state that a non-numeric value was detected.
 */
test("should throw an error for invalid non-numeric input", () => {
  expect(() => add("1,a,3")).toThrow(
    "Invalid input: non-numeric value detected."
  ); // Should throw error for non-numeric input
});
