import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
import { Trainers } from '../models'

export const emailExists = async (email: string) => {
  const emailExists = await Trainers.findOne({ email })
  if (!emailExists) return false
  return true
}

export const generateJwt = async (id: Types.ObjectId) => {
  const payload = { id }
  const SECRET_OR_PRIVATE_KEY = process.env.SECRET_OR_PRIVATE_KEY || ''
  const options = { expiresIn: '7d' }

  try {
    return jwt.sign(payload, SECRET_OR_PRIVATE_KEY, options)
  } catch (error) {
    throw new Error('Error creating authorization token')
  }
}
