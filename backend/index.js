const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Load neighborhood data
const dataPath = path.join(__dirname, '..', 'Data', 'neighborhoods.json');
let neighborhoods = [];
try {
  neighborhoods = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (err) {
  console.error('Error reading neighborhoods.json:', err);
}

// Matching endpoint
app.post('/match', (req, res) => {
  const userPrefs = req.body;
  const results = neighborhoods.map(n => {
    let score = 0;
    for (let key in userPrefs) {
      if (n[key] !== undefined) {
        score += userPrefs[key] * n[key];
      }
    }
    return { name: n.name, score };
  });
  results.sort((a, b) => b.score - a.score);
  res.json({ matches: results });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});