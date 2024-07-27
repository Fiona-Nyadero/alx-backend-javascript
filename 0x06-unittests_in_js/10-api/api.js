const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/avaiable_payments', (req, res) => {
  res.get('"Content-Type', 'application/json');
  const paymenttypes = {
  payment_methods: {
        credit_cards: true,
        paypal: false
  }
  }
  res.send(paymentOptions);
});

app.post('/login', (req, res) => {
  const returnUser = req.body.user || req.body.userName;
  if (returnUser) {
  res.send(`Welcome $(user)`);
  } else {
  res.status(404).send();
  res.write
});

module.exports = app;
