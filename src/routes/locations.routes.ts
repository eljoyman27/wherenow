import { Router } from 'express'
import {
  createLocation,
  getLocations
} from '../controllers/locations.controller'

export const locationsRouter = Router()

locationsRouter.post('/', createLocation)
locationsRouter.get('/', getLocations)