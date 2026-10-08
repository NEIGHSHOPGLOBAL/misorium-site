import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Placeholder from '../pages/Placeholder.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import BookConsultation from '../pages/BookConsultation.jsx';
import NotFound from '../pages/NotFound.jsx';

import DashboardLayout from '../pages/DashboardLayout.jsx';
import Overview from '../pages/dashboard/Overview.jsx';
import Profile from '../pages/dashboard/Profile.jsx';
import Appointments from '../pages/dashboard/Appointments.jsx';
import Bookings from '../pages/dashboard/Bookings.jsx';
import Payments from '../pages/dashboard/Payments.jsx';
import Notifications from '../pages/dashboard/Notifications.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Placeholder title="Services" />} />
      <Route path="/services/:slug" element={<Placeholder title="Service Detail" />} />
      <Route path="/portfolio" element={<Placeholder title="Portfolio" />} />
      <Route path="/case-studies" element={<Placeholder title="Case Studies" />} />
      <Route path="/case-studies/:slug" element={<Placeholder title="Case Study" />} />
      <Route path="/industries" element={<Placeholder title="Industries" />} />
      <Route path="/blog" element={<Placeholder title="Blog" />} />
      <Route path="/blog/:slug" element={<Placeholder title="Blog Post" />} />
      <Route path="/careers" element={<Placeholder title="Careers" />} />
      <Route path="/pricing" element={<Placeholder title="Pricing" />} />
      <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      <Route path="/book-consultation" element={<BookConsultation />} />
      <Route path="/tickets" element={<Placeholder title="Ticket Booking" />} />
      <Route path="/privacy-policy" element={<Placeholder title="Privacy Policy" />} />
      <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
      <Route path="/refund-policy" element={<Placeholder title="Refund & Cancellation" />} />
      <Route path="/disclaimer" element={<Placeholder title="Disclaimer" />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Authenticated client panel */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="payments" element={<Payments />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* Admin */}
      <Route path="/admin/*" element={<Placeholder title="Admin" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
