import ProductModel from '../database/models/productModel'
import BrandModel from '../database/models/brandModel'

export const getAllProducts = async (_req: any, res: any): Promise<any> => {
  try {
    const products = await ProductModel.find({}).populate({ path: 'brand', model: BrandModel })
    return res.send(products)
  } catch (error: any) {
    return res.status(400).send({ msg: error.toString() })
  }
}

export const postProduct = async (req: any, res: any): Promise<any> => {
  try {
    const product = await ProductModel.create(req.body)
    return res.send(product)
  } catch (error: any) {
    return res.status(400).send({ msg: error.toString() })
  }
}
