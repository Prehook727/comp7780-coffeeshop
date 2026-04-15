const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(express.static(path.join(__dirname, '/')));


app.post('/api/create-order', (req, res) => {
  console.log('📦 Received order creation request:', req.body);
  res.json({
    success: true,
    orderId: 'ORDER-' + Date.now()
  });
});


app.post('/api/save-order', (req, res) => {
  console.log('✅ Payment successful order received:', req.body);
  res.json({
    success: true,
    message: 'Order saved successfully'
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'product.html'));
});


app.listen(PORT, () => {
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`🏠 Home page: http://localhost:${PORT}/`);
  console.log(`🛍️ Product page: http://localhost:${PORT}/product`);
  console.log(`🚀 PayPal API ready`);
});