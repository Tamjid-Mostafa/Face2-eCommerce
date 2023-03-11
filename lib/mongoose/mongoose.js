import mongoose from 'mongoose'

// export async function connectMongoose() {
//   if (mongoose.connection.readyState === 1) {
//     console.log(mongoose.connection.asPromise())
//     return mongoose.connection.asPromise()
//   }
//   return await mongoose.connect(process.env.MONGODB_URL)
// }

const connectMongoose = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL)
    if (connection.readyState === 1) {
      console.log('Database Connected')
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export default connectMongoose
