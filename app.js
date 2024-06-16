import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => console.log(`server is running on port http://localhost:${PORT}`))