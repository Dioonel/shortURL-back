import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router } from './router.js';
import { connect } from './db.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

await connect(process.env.MONGO_URL);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

router(app);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});