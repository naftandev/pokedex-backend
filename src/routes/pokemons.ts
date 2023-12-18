import { Router } from 'express'
import { check } from 'express-validator'
import { getPokemons } from '../controllers'
import { validateFields, verifyJwt } from '../middlewares'

const router = Router()

router.get('/', [
  verifyJwt,
  check('limit', 'Limit must be numeric').optional().isNumeric(),
  check('offset', 'Offset must be numeric').optional().isNumeric(),
  validateFields
], getPokemons)

export default router
