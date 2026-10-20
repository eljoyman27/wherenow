import { Router } from 'express'
import { addFriend, getFriends } from '../controllers/friends.controller'

export const friendsRouter = Router()

friendsRouter.post('/', addFriend)
friendsRouter.get('/:userId', getFriends)
