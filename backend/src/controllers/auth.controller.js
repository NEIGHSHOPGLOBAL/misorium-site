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
  // TODO: generate reset token, send email
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}

export async function resetPassword(req, res) {
  // TODO: verify reset token, update password
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}
