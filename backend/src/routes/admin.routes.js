import { Router } from 'express';
import { requireAuth, requireRole } from '../middlewares/auth.js';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.use(requireAuth, requireRole('admin'));

router.get('/users', notImplemented);
router.get('/appointments', notImplemented);
router.get('/bookings', notImplemented);
router.get('/payments', notImplemented);
router.get('/enquiries', notImplemented);
router.get('/content/*', notImplemented);

export default router;
