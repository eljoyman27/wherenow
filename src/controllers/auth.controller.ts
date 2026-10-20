import { Request, Response } from 'express'
import { UsersService } from '../services/users.service'
import { comparePassword, signToken } from '../utils/auth'

export const register = async (req: Request, res: Response) => {
  try {
    const user = await UsersService.create(req.body)
    const token = signToken({ userId: user.id })
    res.json({ user, token })
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await UsersService.findByEmail(email)
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    const valid = await comparePassword(password, user.passwordHash)
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

    const token = signToken({ userId: user.id })
    res.json({ user, token })
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' })
  }
}
