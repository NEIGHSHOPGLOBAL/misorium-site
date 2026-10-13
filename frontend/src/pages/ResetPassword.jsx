import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../services/api.js';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await api.post('/auth/reset-password', {
        token: searchParams.get('token'),
        password,
      });
      setMessage(response.data.message || 'Password has been reset.');
      setTimeout(() => navigate('/login'), 1200);
    } catch (requestError) {
      setError(requestError.response?.data?.error || 'We could not reset your password.');
    }
  };

  return (
    <div className="container section">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360 }}>
        <label htmlFor="new-password">New password</label>
        <input
          id="new-password"
          type="password"
          minLength="8"
          required
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Reset password</button>
      </form>
      {message && <p role="status">{message}</p>}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
