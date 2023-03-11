import { getUser } from '@/database/controller'
import connectMongoose from '@/lib/mongoose/mongoose'
import User from '@/models/User'
import { rest } from 'lodash'

export default async function users(req, res) {
  await connectMongoose().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  )
  // const result = await User.findOne().exec()
  // res.status(200).json(result)

  // Type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getUser(req, res)
      break
    case 'POST':
      res.status(200).json({ method, name: 'POST Request' })
      break
    case 'PUT':
      res.status(200).json({ method, name: 'PUT Request' })
      break
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE Request' })
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
