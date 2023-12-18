import { Router } from 'express'
import auth from './auth'
import trainers from './trainers'
import pokemons from './pokemons'

const router = Router()

router.use('/auth', auth)
router.use('/trainers', trainers)
router.use('/pokemons', pokemons)

export default router
