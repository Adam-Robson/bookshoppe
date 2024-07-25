function errorHandler(err, req, res, next) {
  
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;

  res.status(status);

  if (process.env.NODE_ENV !== 'test') {
    console.log(err);
  }

  res.send({
    status,
    message: err.message,
  });
}

export default errorHandler;
