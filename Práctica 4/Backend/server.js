import express from 'express';
import bodyParser from 'body-parser';
import controller from './controller/auth.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);  // http://localhost:5000/api/auth/login

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });