const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const symptomRoutes = require('./routes/symptoms');
const matchRoutes = require('./routes/match');

app.use('/api/symptoms', symptomRoutes);
app.use('/api/match', matchRoutes);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
