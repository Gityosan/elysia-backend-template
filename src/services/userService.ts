import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../config/database';
import { type insertUserSchema, userSchema } from '../models/user';

export const createUser = async (user: typeof insertUserSchema._type) => {
  const userWithId = { ...user, id: uuidv4() };
  const result = await db.insert(userSchema).values(userWithId);
  return getUserById(userWithId.id);
};

export const getUserById = async (id: string) => {
  return await db.query.userSchema.findFirst({
    where: eq(userSchema.id, id),
  });
};
