import { mysqlTable, varchar, int, uniqueIndex } from 'drizzle-orm/mysql-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
export const userSchema = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  age: int('age'),
}, (users) => ({
  emailIndex: uniqueIndex('email_idx').on(users.email),
}));
// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(userSchema);
// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(userSchema);