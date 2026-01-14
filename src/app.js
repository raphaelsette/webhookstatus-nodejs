const express = require('express');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', webhookRoutes);

module.exports = app;