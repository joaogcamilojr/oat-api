import express, { Router } from 'express'
import publicRouter from '@modules/public/infra/http/routes/publics.route'

const routes = Router()

routes.use(express.json())

routes.use('/api/public', publicRouter)

export default routes
