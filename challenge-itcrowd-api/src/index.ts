import 'dotenv/config'
import express from 'express'
import { connectDb } from './database/dbConnection'
import ProductRoutes from './routes/product.routes'
import BrandRoutes from './routes/brand.routes'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

connectDb()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', ProductRoutes)
app.use('/', BrandRoutes)

app.use('/', (_, res) => {
  return res.status(404).send({ msg: 'resource not found' })
})

const host = (process.env.HOST !== undefined && process.env.HOST) || '0.0.0.0.'
const port =
  (process.env.PORT !== undefined &&
    parseInt(process.env.PORT)) ||
    4000

console.log(typeof port)

app.listen(port, host, () => {
  console.log(`Server started on port ${port}`)
})
