import { Request, Response } from 'express'
import { EventsService } from '../services/events.service'

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await EventsService.create(req.body)
    res.json(event)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events = await EventsService.getAll()
    res.json(events)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
