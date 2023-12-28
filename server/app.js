const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const cryptids = require('./routes/api/cryptids')

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Cryptid DB running.'));

app.use('/api/cryptids', cryptids);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));