import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { Trainers } from '../../models'
import { generateJwt } from '../../utils'

const login = async (request: Request, response: Response) => {
  const { body } = request

  const { email, password } = body

  try {
    const trainer = await Trainers.findOne({ email })
    if (!trainer) return response.status(404).json({ msg: 'The email or password is incorrect' })

    if (!bcrypt.compareSync(password, trainer.password)) {
      return response.status(404).json({ msg: 'The email or password is incorrect' })
    }

    const token = await generateJwt(trainer._id)

    response.status(200).json({ token, trainer })
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unexpected error'
    response.status(500).json({ msg })
  }
}

export default login
