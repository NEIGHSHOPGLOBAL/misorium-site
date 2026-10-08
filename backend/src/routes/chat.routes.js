import { Router } from 'express';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.post('/sessions', notImplemented);
router.post('/sessions/:id/messages', notImplemented);
router.get('/sessions/:id', notImplemented);

export default router;
