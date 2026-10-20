import { Request, Response } from 'express'
import { FriendsService } from '../services/friends.service'

export const addFriend = async (req: Request, res: Response) => {
  try {
    const friend = await FriendsService.add(req.body)
    res.json(friend)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getFriends = async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId)
    const friends = await FriendsService.get(userId)
    res.json(friends)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
