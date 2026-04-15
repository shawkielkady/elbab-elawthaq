export function success(res, data) {
  res.json({
    success: true,
    data
  });
}

export function error(res, message) {
  res.status(500).json({
    success: false,
    message
  });
}