import { Router } from 'express';

import { ShortenerService } from './service.ts';

const router = Router();
const service = new ShortenerService();

router.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const response = await service.create(req.body?.url);
        res.json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const response = await service.get(req.params.id);
        if(response?.redirectUrl) {
            res.redirect(response.redirectUrl);
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;