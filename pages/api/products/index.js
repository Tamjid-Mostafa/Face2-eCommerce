import connectMongoose from '@/lib/mongoose/mongoose'
import Product from '@/models/Product'

export default async function products(req, res) {
  await connectMongoose()
  const result = await Product.findOne().exec()
  res.status(200).json(result)
}
