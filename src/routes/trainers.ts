import { Router } from 'express'
import { check } from 'express-validator'
import { isValidObjectId } from 'mongoose'
import { getTrainer } from '../controllers'
import { validateFields, verifyJwt } from '../middlewares'

const router = Router()

router.get('/:id', [
  verifyJwt,
  check('id').custom(value => {
    if (!isValidObjectId(value)) throw new Error('Invalid trainer ID')
    return true
  }),
  validateFields
], getTrainer)

export default router
