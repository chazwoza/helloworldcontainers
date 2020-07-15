'use strict';

const express = require('express');

// Constants - host and port
const PORT =  process.env.PORT || 1337;
const HOST = process.env.PHOST || '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({message: 'Hello World. Yay devops!'});
});

app.get('/status', function(req, res) {
  res.json({ message: 'API is up and running'}); 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);