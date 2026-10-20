// import { Request, Response } from 'express'
// import { CheckinsService } from '../services/checkins.service'

// export const createCheckin = async (req: Request, res: Response) => {
//   try {
//     const checkin = await CheckinsService.create(req.body)
//     res.json(checkin)
//   } catch (err) {
//     res.status(500).json({ error: err })
//   }
// }

// export const getCheckins = async (_req: Request, res: Response) => {
//   try {
//     const checkins = await CheckinsService.getAll()
//     res.json(checkins)
//   } catch (err) {
//     res.status(500).json({ error: err })
//   }
// }
