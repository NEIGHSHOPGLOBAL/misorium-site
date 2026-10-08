import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export function requireAuth(req, res, next) {
  const token = req.cookies?.accessToken || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, data: null, error: 'Unauthorized' });
  }
  try {
    req.user = jwt.verify(token, env.jwt.secret);
    next();
  } catch {
    res.status(401).json({ success: false, data: null, error: 'Invalid or expired token' });
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ success: false, data: null, error: 'Forbidden' });
    }
    next();
  };
}
