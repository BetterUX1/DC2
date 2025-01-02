import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

//import Connect from './database/db.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database
Connect();

app.get('/', (req, res) => {
	res.send('Auth Service is running');
});

app.listen(PORT, () => {
	console.log(`Auth Service running on http://localhost:${PORT}`);
});
