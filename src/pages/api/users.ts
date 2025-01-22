import { Users } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

const users: Users[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const user: Users = req.body

    users.push(user)

    return res.status(201).json({ message: 'User added successfully', user })
  }

  if (req.method === 'GET') {
    return res.status(200).json(users)
  }
}
