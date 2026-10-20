import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ error: 'Missing token' })

  const token = header.split(' ')[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string }
    ;(req as any).userId = payload.userId
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
