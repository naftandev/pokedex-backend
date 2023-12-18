import mongoose from 'mongoose'

const URI = process.env.MONGODB_URI || ''

const connection = async () => {
  if (!URI) throw new Error('MongoDB URI not defined')

  console.log('Connecting to database...')
  try {
    await mongoose.connect(URI)
    console.log('Database connection established')
  } catch (error) {
    throw new Error('Failed to connect to database')
  }
}

export default connection
