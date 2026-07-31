const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const path = require('path');

// 1. Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Global Middlewares (MUST be declared before routes!)
app.use(cors());
app.use(express.json()); // Parses incoming JSON bodies

// 3. Import Routes
const authRoutes = require('./routes/authRoutes');

// 4. Mount Routes
// Maps '/register' inside authRoutes to '/api/auth/register'
app.use('/api/auth', authRoutes);

// Optional: Default health check route
app.get('/', (req, res) => {
  res.send('PulseVote API is running...');
});


const { protect } = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.id}! You have accessed protected data.`,
    timestamp: new Date()
  });
});

// 5. SSL Options (Ensure server.key and server.cert are in your root folder)
const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem'),
};

// 6. Connect to MongoDB and Start HTTPS Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas.');
    
    // Create and start HTTPS server
    https.createServer(options, app).listen(PORT, () => {
      console.log(`Server running at https://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });