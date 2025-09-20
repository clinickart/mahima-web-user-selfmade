// routes/cardRoutes.js
const express = require('express');
const router = express.Router();

// re-use your existing paymentCard router/module
const paymentCardRoutes = require('./paymentCard');

// If paymentCard.js exports a router:
module.exports = paymentCardRoutes;

// If paymentCard.js exports functions instead of router, adapt accordingly.
