import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call POST /auth/login
  };

  return (
    <div className="container section">
      <h1>Client Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360 }}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
