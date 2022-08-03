import { Types } from 'mongoose'

export interface Product {
  name: string
  description: string
  image_url: string
  price: number
  brand: Types.ObjectId
}

export interface Brand {
  name: string
  logo_url: string
}
