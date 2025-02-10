const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Route to accept two numbers and return their sum
app.get('/sum', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  // Calculate sum
  const sum = num1 + num2;

  // Return response
  res.json({
    num1,
    num2,
    sum,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

