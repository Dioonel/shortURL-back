import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { router } from './router.ts';
import { connect } from './db.ts';

const app = express();
app.use(express.json());

await connect(process.env.MONGO_URL);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

router(app);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});