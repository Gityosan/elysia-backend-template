import { db } from '../config/database'
import { User,users } from '../models/user'

export const createUser = async (user: User) => {
    const result = await db.insert(users).values(user).returning()
    return result[0]
}

export const getUserById = async (id: string) => {
    return await db.select().from(users).where(eq(users.id, id)).first()
}