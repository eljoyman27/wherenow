import { Router } from 'express'
import { createEvent, getEvents } from '../controllers/events.controller'
import { prisma } from "../prisma/client";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const events = await prisma.event.findMany();

    res.json(events);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to load events"
    });
  }
});

export const eventsRouter = Router()

eventsRouter.post('/', createEvent)
eventsRouter.get('/', getEvents)
