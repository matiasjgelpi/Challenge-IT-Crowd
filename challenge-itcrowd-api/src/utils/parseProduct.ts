import { Product } from '../types/types'
import { parseStrings, parseNumbers, parseIds } from './typeValidators'

export const toNewProduct = (object: any): Product => {
  const newProduct: Product = {
    name: parseStrings(object.name, 'name'),
    description: parseStrings(object.description, 'description'),
    image_url: parseStrings(object.image_url, 'image_url'),
    price: parseNumbers(object.price, 'price'),
    brand: parseIds(object.brand, 'brand')
  }

  return newProduct
}
