import { model, Schema } from 'mongoose'
import { Product } from '../../types/types'

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: Schema.Types.ObjectId, ref: 'BrandModel' }
})

const ProductModel = model<Product>('Product', productSchema)

export default ProductModel
