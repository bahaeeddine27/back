const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('MongoDB Atlas connection error:', err);
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// API route to get data
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
