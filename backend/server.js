import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';

dotenv.config();
const PORT = process.env.PORT;

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Aditi!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
