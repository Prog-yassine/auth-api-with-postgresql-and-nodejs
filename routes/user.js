const express = require('express');
const router = express.Router();
const {pool} = require('../postgres_connect'); // Adjust the path as necessary

router.get('/', (req, res) => {
  pool.query('SELECT * FROM users', (err, result) => { // <-- renamed to result
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result.rows); // <-- using result.rows here
    }
    // ⚠️ DO NOT call pool.end() here; it shuts down the whole pool!
  });
});

module.exports = router;