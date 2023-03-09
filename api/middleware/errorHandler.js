const errorHandler = (err, req, res, next) => {
  if (!err) return next();

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
