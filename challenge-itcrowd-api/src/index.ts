import 'dotenv/config'
import express from 'express'
import { connectDb } from './database/dbConnection'
import ProductRoutes from './routes/product.routes'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')

connectDb()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', ProductRoutes)
// app.post('/', productServices.postProduct)
// app.get('/', productServices.getAllProducts)
// app.delete('/:id', productServices.deleteProduct)
// app.put('/:id', productServices.updateProduct)
// app.use('/', blogPostRoutes)

app.use('/', (_, res) => {
  return res.status(404).send({ msg: 'resource not found' })
})

const PORT = ((process.env.PORT !== undefined) && process.env.PORT) || 3002

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
