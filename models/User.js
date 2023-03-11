import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  picture: String,
})

const User = models?.users || model('users', UserSchema)

export default User
