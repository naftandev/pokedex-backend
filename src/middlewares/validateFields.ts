import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

const validateFields = (request: Request, response: Response, next: NextFunction) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) return response.status(400).json(errors)
  next()
}

export default validateFields
