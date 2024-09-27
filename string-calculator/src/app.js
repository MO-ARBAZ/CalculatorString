/**
 * Import required modules:
 * - express: the Express framework for building the web server.
 * - calculatorRoutes: the routes for handling calculator-related logic.
 * - cors: middleware for handling Cross-Origin Resource Sharing.
 */
const express = require("express");
const calculatorRoutes = require("./routes/calculator");
const cors = require("cors");

/**
 * Initialize the Express app.
 * @constant {Object} app - The Express application instance.
 */
const app = express();

/**
 * Apply middleware:
 * - CORS (Cross-Origin Resource Sharing) is used to allow requests from different domains.
 * - express.json() is used to parse incoming requests with JSON payloads.
 */
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

/**
 * Use the `/api/calculate` route for all calculation-related requests.
 * The logic for handling these requests is contained in the calculatorRoutes module.
 *
 * @name /api/calculate
 * @function
 * @memberof module:routes/calculator
 */
app.use("/api/calculate", calculatorRoutes); // Route for calculation logic

/**
 * Export the Express app so it can be used by the server.
 * @module app
 */
module.exports = app;
