import { Router } from 'express'
import {
  createUser,
  getUsers
} from '../controllers/users.controller'

export const usersRouter = Router()

usersRouter.post('/', createUser)
usersRouter.get('/', getUsers)