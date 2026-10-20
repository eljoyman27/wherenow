import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET: string = process.env.JWT_SECRET || 'dev-secret'
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '7d'

export const hashPassword = async (plain: string) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(plain, salt)
}

export const comparePassword = (plain: string, hash: string) => {
  return bcrypt.compare(plain, hash)
}

export const signToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions)
}
