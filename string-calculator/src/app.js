const express = require('express');
const calculatorRoutes = require('./routes/calculator');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

app.use('/api/calculate', calculatorRoutes); // Route for calculation

module.exports = app;
