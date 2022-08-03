import { model, Schema } from 'mongoose'
import { Brand } from '../../types/types'

const brandSchema = new Schema<Brand>({
  name: { type: String, required: true },
  logo_url: { type: String, required: true }
})

const BrandModel = model<Brand>('Brand', brandSchema)

export default BrandModel
