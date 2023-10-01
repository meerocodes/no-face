const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // You can use any available port

// Middleware to parse the request body as JSON
app.use(bodyParser.json());

app.post('/api/addCustomer', async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  try {
    const response = await fetch('https://nofaceclub.myshopify.com/admin/api/2023-04/customers.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': 'YOUR_SHOPIFY_ACCESS_TOKEN'
      },
      body: JSON.stringify({
        customer: {
          first_name: name,
          email: email,
          phone: phoneNumber
        }
      })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
