const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
const AuthRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');

// Register routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/auth', AuthRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
