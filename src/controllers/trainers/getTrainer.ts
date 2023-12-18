import { Request, Response } from 'express'
import { Trainers } from '../../models'
import { CastError } from 'mongoose'

const getTrainer = async (request: Request, response: Response) => {
  const { params } = request

  try {
    const trainer = await Trainers.findById(params.id)
    if (!trainer) return response.status(404).json({ msg: 'Trainer not found' })
    response.status(200).json(trainer)
  } catch (error) {
    const err = error as CastError
    response.status(500).json({ msg: `Invalid ${err.path}: ${err.value}` })
  }

}

export default getTrainer
