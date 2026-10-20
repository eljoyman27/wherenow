import express from 'express'
import healthRoutes from "./routes/health.routes";
import { usersRouter } from './routes/users.routes'
import { locationsRouter } from './routes/locations.routes'
//import { checkinsRouter } from './routes/checkins.routes'
import { eventsRouter } from './routes/events.routes'
import { authRouter } from './routes/auth.routes'


const app = express()


app.use(express.json())

app.use('/health', healthRoutes)
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/events', eventsRouter)
app.use('/locations', locationsRouter)
//app.use('/checkins', checkinsRouter)

export default app
