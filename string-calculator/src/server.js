/**
 * Import the Express app from app.js
 * This is where all the main application logic is configured
 */
const app = require("./app");

/**
 * @constant {number} port - The port number on which the server will run
 * - If the environment variable `PORT` is set, use that, otherwise default to 5000
 * - Using environment variables allows flexibility for different environments (development, production, etc.)
 */
const port = process.env.PORT || 5000;

/**
 * Starts the Express server and listens for incoming connections on the specified port.
 * The callback function logs a message to the console once the server is running.
 *
 * @function listen
 * @param {number} port - The port number to bind the server to.
 * @param {Function} callback - A function that gets called when the server is successfully running.
 */
app.listen(port, () => {
  // Log the port on which the server is running
  console.log(`Server running on port ${port}`);
});
