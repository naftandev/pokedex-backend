import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { Trainers } from '../../models'
import { emailExists, generateJwt } from '../../utils'

const signup = async (request: Request, response: Response) => {
  const { body } = request

  const {
    name, lastname, email, password, gender, region, city, avatarUrl
  } = body

  try {
    if (await emailExists(email)) return response.status(401).json({ msg: 'The entered email is not available' })

    const trainer = new Trainers({ name, lastname, email, password, gender, region, city, avatarUrl })

    const salt = bcrypt.genSaltSync(10)
    trainer.password = bcrypt.hashSync(password, salt)

    const { _id } = await trainer.save()

    const token = await generateJwt(_id)

    response.status(200).json({ token, trainer })
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unexpected error'
    response.status(500).json({ msg })
  }
}

export default signup
