import { Router } from 'express'
import { check } from 'express-validator'
import { signup, login } from '../controllers'
import { validateFields } from '../middlewares'

const router = Router()

router.post('/signup', [
  check('email', 'Email is invalid').isEmail(),
  check('password', 'Password is required').notEmpty(),
  check('name', 'Name is required').notEmpty(),
  check('lastname', 'Last name is required').notEmpty(),
  check('gender', 'Gender is required').isIn(['Male', 'Female']),
  check('region', 'Region is required').notEmpty(),
  check('city', 'City is required').notEmpty(),
  validateFields
], signup)

router.post('/login', [
  check('email', 'Email is invalid').isEmail(),
  check('password', 'Password is required').notEmpty(),
  validateFields
], login)

export default router
