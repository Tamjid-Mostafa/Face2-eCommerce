import { model, models, Schema } from 'mongoose'

const ProductSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  materials: {
    type: Array,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  inStock: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
})

const Product = models?.product || model('product', ProductSchema)

export default Product
