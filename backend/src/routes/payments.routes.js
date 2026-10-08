import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.post('/orders', requireAuth, notImplemented);
router.post('/verify', requireAuth, notImplemented);
router.post('/webhook', notImplemented); // signature-verified, no auth middleware
router.get('/', requireAuth, notImplemented);
router.get('/:id', requireAuth, notImplemented);

export default router;
