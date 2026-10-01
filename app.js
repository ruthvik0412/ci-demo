// app.js
const express = require('express');
const app = express();

// Hardcoded secret (Snyk Code will flag this)
const API_KEY = "sk_live_1234567890abcdef1234567890abcdef";

app.get('/', (req, res) => {
  // Code injection vulnerability (Snyk Code will flag this)
  eval(req.query.user_input);
  res.send('Hello World');
});
