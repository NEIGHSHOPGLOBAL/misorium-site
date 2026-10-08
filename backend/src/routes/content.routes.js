import { Router } from 'express';
import { notImplemented } from '../middlewares/notImplemented.js';

const router = Router();

router.post('/contact', notImplemented);
router.get('/blog', notImplemented);
router.get('/blog/:slug', notImplemented);
router.get('/portfolio', notImplemented);
router.get('/services', notImplemented);
router.get('/testimonials', notImplemented);
router.get('/faqs', notImplemented);

export default router;
