import ProductModel from '../database/models/productModel'
import BrandModel from '../database/models/brandModel'

const getAllProducts = (_req: any, res: any): any => {
  void (async () => {
    try {
      const products = await ProductModel.find({}).populate({
        path: 'brand',
        model: BrandModel
      })
      return res.send(products)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const postProduct = (req: any, res: any): any => {
  void (async () => {
    try {
      const product = await ProductModel.create(req.body)
      return res.send(product)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const deleteProduct = (req: any, res: any): any => {
  void (async () => {
    const { id } = req.params
    try {
      const deletedProduct = await ProductModel.deleteOne({ _id: id })
      return res.send({ msg: `${deletedProduct.deletedCount} document deleted` })
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const updateProduct = (req: any, res: any): any => {
  void (async () => {
    const { id } = req.params
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true })
      return res.send(updatedProduct)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const productServices = {
  getAllProducts,
  postProduct,
  deleteProduct,
  updateProduct
}

export default productServices
