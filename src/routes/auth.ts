// src/routes/auth.ts
import { Elysia } from 'elysia'
import { signUp, login } from '../services/authService'

const auth = new Elysia({ prefix: '/auth' })

auth.post('/signup', async ({ body }) => {
    const { username, password, email } = body
    const result = await signUp(username, password, email)
    return { message: 'User signed up successfully', result }
})

auth.post('/login', async ({ body }) => {
    const { username, password } = body
    const result = await login(username, password)
    return { message: 'User logged in successfully', result }
})

export default auth