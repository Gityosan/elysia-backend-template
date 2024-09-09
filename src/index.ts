import { Elysia } from 'elysia'
import routes from './routes'
import { swagger } from '@elysiajs/swagger'
const app = new Elysia()
app.use(swagger()) 
app.use(routes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})