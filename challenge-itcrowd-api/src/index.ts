import 'dotenv/config'
import express from 'express'
// import ProductModel from './database/models/productModel'
// import cors from 'cors'
import { connectDb } from './database/dbConnection'
// import blogPostRoutes from './routes/BlogPostRoutes'
import { postProduct, getAllProducts } from '../src/services/productServices'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

connectDb()

const app = express()
app.use(express.json())
app.use(cors())

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/', postProduct)
app.get('/', getAllProducts)
// app.use('/', blogPostRoutes)

app.use('/', (_, res) => {
  return res.status(404).send({ msg: 'resource not found' })
})

const PORT = ((process.env.PORT !== undefined) && process.env.PORT) || 3002

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
