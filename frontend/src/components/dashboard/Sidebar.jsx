import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Overview', end: true },
  { to: '/dashboard/profile', label: 'Profile' },
  { to: '/dashboard/appointments', label: 'Appointments' },
  { to: '/dashboard/bookings', label: 'Bookings' },
  { to: '/dashboard/payments', label: 'Payments' },
  { to: '/dashboard/notifications', label: 'Notifications' },
];

export default function Sidebar() {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.end}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
