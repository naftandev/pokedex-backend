import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connection } from './db'
import routes from './routes'

const PORT = process.env.PORT || 4000
const app = express()

/* Middlewares */
app.use(cors())
app.use(express.json())

/* Routes */
app.use('/api', routes)

connection()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.log(error.message))
