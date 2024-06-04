import { NextFunction, Request, Response } from 'express';

function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (typeof err === 'object' && 'status' in err) {
      const status = err.status;
      res.send({
        status,
        message: err.message
      })
  } else {
    res.send(`The following error occurred: ${err}`)
  }
}

export default handleErrors;
