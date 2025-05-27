const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const selected = req.body.symptoms; // e.g., [1, 2]
  if (!selected || !Array.isArray(selected)) return res.status(400).json({ error: "Invalid input" });

  const placeholders = selected.map(() => '?').join(',');
  const sql = `
    SELECT specialists.id, specialists.name, specialists.description, COUNT(*) as matches
    FROM symptom_specialist_map
    JOIN specialists ON specialists.id = symptom_specialist_map.specialist_id
    WHERE symptom_id IN (${placeholders})
    GROUP BY specialists.id
    ORDER BY matches DESC
    LIMIT 1
  `;

  db.get(sql, selected, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

module.exports = router;
