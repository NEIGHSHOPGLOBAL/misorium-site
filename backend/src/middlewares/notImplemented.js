export function notImplemented(req, res) {
  res.status(501).json({ success: false, data: null, error: 'Not implemented' });
}
