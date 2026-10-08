import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.get('/slots', notImplemented);
router.post('/', requireAuth, notImplemented);
router.get('/', requireAuth, notImplemented);
router.get('/:id', requireAuth, notImplemented);
router.patch('/:id/cancel', requireAuth, notImplemented);
router.patch('/:id/reschedule', requireAuth, notImplemented);

export default router;
