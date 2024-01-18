import { Router } from 'express';

import { ShortenerService } from './service.ts';

const router = Router();
const service = new ShortenerService();

// router.get('/', async (req, res) => {
//     try{
//         const response = await service.get();
//         res.json(response);
//     } catch (err) {
//         res.status(400).json({ error: true });
//     }
// });

router.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const response = await service.create(req.body?.url);
        res.json(response);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;