import { Product, Brand, ProductUpdate, BrandUpdate } from '../types/types'
import { parseStrings, parseNumbers, parseIds } from './typeValidators'

export const validateNewProduct = (object: any): Product => {
  const newProduct: Product = {
    name: parseStrings(object.name, 'name'),
    description: parseStrings(object.description, 'description'),
    image_url: parseStrings(object.image_url, 'image_url'),
    price: parseNumbers(object.price, 'price'),
    brand: parseIds(object.brand, 'brand')
  }

  return newProduct
}

export const validateUpdateProduct = (object: any): ProductUpdate => {
  const toUpdateProduct: ProductUpdate = {}

  if (object.name !== undefined) toUpdateProduct.name = parseStrings(object.name, 'name')
  if (object.description !== undefined)toUpdateProduct.description = parseStrings(object.description, 'description')
  if (object.image_url !== undefined)toUpdateProduct.image_url = parseStrings(object.image_url, 'image_url')
  if (object.price !== undefined)toUpdateProduct.price = parseNumbers(object.price, 'price')
  if (object.brand !== undefined)toUpdateProduct.brand = parseIds(object.brand, 'brand')

  return toUpdateProduct
}

export const validateNewBrand = (object: any): Brand => {
  const newBrand: Brand = {
    name: parseStrings(object.name, 'name'),
    logo_url: parseStrings(object.logo_url, 'logo_url')
  }

  return newBrand
}

export const validateUpdateBrand = (object: any): BrandUpdate => {
  const toUpdateBrand: BrandUpdate = {}
  if (object.name !== undefined) toUpdateBrand.name = parseStrings(object.name, 'name')
  if (object.logo_url !== undefined) toUpdateBrand.logo_url = parseStrings(object.logo_url, 'logo_url')

  return toUpdateBrand
}
