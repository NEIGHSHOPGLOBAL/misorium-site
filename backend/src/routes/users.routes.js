import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.js';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.get('/me', requireAuth, notImplemented);
router.put('/me', requireAuth, notImplemented);
router.put('/me/password', requireAuth, notImplemented);
router.get('/me/notifications', requireAuth, notImplemented);
router.patch('/me/notifications/:id/read', requireAuth, notImplemented);

export default router;
