import { Application } from 'express';

import shortenerRouter from './components/shortener/controller.js';

export const router = (app: Application) => {
    app.use('/shortener', shortenerRouter);
};