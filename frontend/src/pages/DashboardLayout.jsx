import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar.jsx';

export default function DashboardLayout() {
  return (
    <div className="container section" style={{ display: 'flex', gap: 'var(--space-6)' }}>
      <aside style={{ width: 220, flexShrink: 0 }}>
        <Sidebar />
      </aside>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
