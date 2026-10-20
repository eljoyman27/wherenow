import { Request, Response } from 'express'
import { UsersService } from '../services/users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UsersService.create(req.body)
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UsersService.getAll()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
