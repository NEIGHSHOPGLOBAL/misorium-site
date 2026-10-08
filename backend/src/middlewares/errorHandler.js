export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, data: null, error: 'Not found' });
}

export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    data: null,
    error: err.message || 'Internal server error',
  });
}
