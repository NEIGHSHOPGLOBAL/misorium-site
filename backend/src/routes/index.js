import { Router } from 'express';
import authRoutes from './auth.routes.js';
import usersRoutes from './users.routes.js';
import appointmentsRoutes from './appointments.routes.js';
import bookingsRoutes from './bookings.routes.js';
import paymentsRoutes from './payments.routes.js';
import chatRoutes from './chat.routes.js';
import contentRoutes from './content.routes.js';
import adminRoutes from './admin.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/bookings', bookingsRoutes);
router.use('/payments', paymentsRoutes);
router.use('/chat', chatRoutes);
router.use('/', contentRoutes); // /contact, /blog, /portfolio, /services, /testimonials, /faqs
router.use('/admin', adminRoutes);

export default router;
