const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for comments
let comments = [];

// POST endpoint to receive new comments
app.post('/api/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.status(201).json({ message: 'Comment added!' });
});

// GET endpoint to retrieve comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on https://your-glitch-project-url`);
});
