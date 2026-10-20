import { Request, Response } from 'express'
import { LocationsService } from '../services/locations.service'

export const createLocation = async (
  req: Request,
  res: Response
) => {
  try {
    const location = await LocationsService.create(req.body)

    res.status(201).json(location)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Unable to create location'
    })
  }
}

export const getLocations = async (
  _req: Request,
  res: Response
) => {
  try {
    const locations = await LocationsService.getAll()

    res.json(locations)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Unable to load locations'
    })
  }
}