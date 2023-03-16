/*  Controller  */

import Product from '@/models/Product'

export async function getProduct(req, res) {
  try {
    const products = await Product.find({})
    if (!products) return res.status(404).json({ error: 'Data not found' })
    res.status(200).json({
      status: 'success',
      result: products.length,
      products,
    })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function postProduct(req, res) {
  try {
    const formData = req.body
    if (!formData)
      return res.status(404).json({ error: 'Form Data not Provided...!' })
    const result = await Product.create(formData)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function putProduct(req, res) {
  try {
    res.status(200).json({ Product: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function deleteProduct(req, res) {
  try {
    res.status(200).json({ Product: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
