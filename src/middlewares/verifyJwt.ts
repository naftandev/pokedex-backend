import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const verifyJwt = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers['authorization']?.split(' ')[1]
  const SECRET_OR_PRIVATE_KEY = process.env.SECRET_OR_PRIVATE_KEY || ''

  if (!token) return response.status(401).json({ msg: 'Authorization token is required' })

  try {
    jwt.verify(token, SECRET_OR_PRIVATE_KEY)
    next()
  } catch (error) {
    response.status(401).json({ msg: 'Invalid authorization token' })
  }
}

export default verifyJwt
