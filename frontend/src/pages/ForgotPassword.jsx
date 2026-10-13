import { useState } from 'react';
import api from '../services/api.js';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    setIsSubmitting(true);
    try {
      const response = await api.post('/auth/forgot-password', { email });
      setMessage(response.data.message || 'If an account exists, a reset email has been sent.');
    } catch (requestError) {
      setError(requestError.response?.data?.error || 'We could not send the reset email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container section">
      <h1>Forgot Password</h1>
      <p>Enter your email address and we will send you a password reset link.</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360 }}>
        <label htmlFor="forgot-password-email">Email</label>
        <input
          id="forgot-password-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send reset link'}
        </button>
      </form>
      {message && <p role="status">{message}</p>}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
