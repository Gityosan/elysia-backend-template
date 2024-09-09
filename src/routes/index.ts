// src/routes/index.ts
import { Elysia } from 'elysia'
import users from './users'
import files from './files'
import auth from './auth'

const routes = new Elysia()

routes.get('/api/health', () => ({ status: 'OK' }))
routes.use(users)
routes.use(files)
routes.use(auth)

export default routes