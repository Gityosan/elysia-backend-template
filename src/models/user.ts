import { z } from 'zod'
import { mysqlTable, varchar, int, uniqueIndex } from 'drizzle-orm/mysql-core';
export const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(2).max(50),
    email: z.string().email(),
    age: z.number().int().positive().optional()
})

export type User = z.infer<typeof userSchema>

export const users = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  age: int('age'),
}, (users) => ({
  emailIndex: uniqueIndex('email_idx').on(users.email),
}));