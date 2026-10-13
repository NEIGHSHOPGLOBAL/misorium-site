import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { pool } from '../config/db.js';
import { env } from '../config/env.js';

const resetTokenLifetimeMs = 60 * 60 * 1000;
const mailer = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.secure,
  auth: env.smtp.user ? { user: env.smtp.user, pass: env.smtp.pass } : undefined,
});

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export async function register(req, res) {
  // TODO: validate input, hash password, create user, issue tokens
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}

export async function login(req, res) {
  // TODO: verify credentials, issue access/refresh tokens
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}

export async function logout(req, res) {
  // TODO: revoke refresh token / clear cookies
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}

export async function refresh(req, res) {
  // TODO: verify refresh token, issue new access token
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}

export async function forgotPassword(req, res) {
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  if (!email) {
    return res.status(400).json({ success: false, data: null, error: 'Email is required' });
  }

  const [users] = await pool.execute('SELECT id, email FROM users WHERE email = ? LIMIT 1', [email]);
  // Do not disclose whether an email address belongs to an account.
  if (!users.length) {
    return res.json({ success: true, data: null, message: 'If an account exists, a reset email has been sent.' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + resetTokenLifetimeMs);
  await pool.execute(
    'UPDATE users SET reset_token_hash = ?, reset_token_expires_at = ? WHERE id = ?',
    [tokenHash, expiresAt, users[0].id],
  );

  const resetUrl = `${env.clientUrl}/reset-password?token=${encodeURIComponent(token)}`;
  try {
    if (!env.smtp.host || !env.smtp.from) {
      throw new Error('SMTP_HOST and SMTP_FROM must be configured');
    }
    await mailer.sendMail({
      from: env.smtp.from,
      to: users[0].email,
      subject: 'Reset your Misorium password',
      text: `Reset your password using this link (it expires in 1 hour): ${resetUrl}`,
      html: `<p>Reset your password using the link below. It expires in 1 hour.</p><p><a href="${resetUrl}">Reset password</a></p>`,
    });
  } catch (error) {
    await pool.execute(
      'UPDATE users SET reset_token_hash = NULL, reset_token_expires_at = NULL WHERE id = ?',
      [users[0].id],
    );
    console.error('Password reset email failed:', error);
    return res.status(503).json({ success: false, data: null, error: 'Unable to send password reset email' });
  }

  return res.json({ success: true, data: null, message: 'If an account exists, a reset email has been sent.' });
}

export async function resetPassword(req, res) {
  const { token, password } = req.body || {};
  if (typeof token !== 'string' || typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({ success: false, data: null, error: 'A valid token and password are required' });
  }

  const [users] = await pool.execute(
    'SELECT id FROM users WHERE reset_token_hash = ? AND reset_token_expires_at > NOW() LIMIT 1',
    [hashToken(token)],
  );
  if (!users.length) {
    return res.status(400).json({ success: false, data: null, error: 'Reset token is invalid or expired' });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await pool.execute(
    'UPDATE users SET password_hash = ?, reset_token_hash = NULL, reset_token_expires_at = NULL WHERE id = ?',
    [passwordHash, users[0].id],
  );
  return res.json({ success: true, data: null, message: 'Password has been reset' });
}
