import BrandModel from '../database/models/brandModel'

const getAllBrands = (_req: any, res: any): any => {
  void (async () => {
    try {
      const brands = await BrandModel.find({})
      return res.send(brands)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const postBrand = (req: any, res: any): any => {
  void (async () => {
    try {
      const product = await BrandModel.create(req.body)
      return res.send(product)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const deleteBrand = (req: any, res: any): any => {
  void (async () => {
    const { id } = req.params
    try {
      const deletedBrand = await BrandModel.deleteOne({ _id: id })
      return res.send({ msg: `${deletedBrand.deletedCount} document deleted` })
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const updateBrand = (req: any, res: any): any => {
  void (async () => {
    const { id } = req.params
    try {
      const updatedBrand = await BrandModel.findByIdAndUpdate(id, req.body, {
        new: true
      })
      return res.send(updatedBrand)
    } catch (error: any) {
      return res.status(400).send({ msg: error.toString() })
    }
  })()
}

const brandServices = {
  getAllBrands,
  postBrand,
  deleteBrand,
  updateBrand
}

export default brandServices
