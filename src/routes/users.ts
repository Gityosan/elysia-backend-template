import { Elysia } from 'elysia';
import { selectUserSchema } from '../models/user';
import { createUser, getUserById } from '../services/userService';

const users = new Elysia({ prefix: '/users' });

users.post('/', async ({ body }) => {
  const validatedUser = selectUserSchema.parse(body);
  const createdUser = await createUser(validatedUser);
  return { message: 'User created successfully', user: createdUser };
});

users.get('/:id', async ({ params }) => {
  const user = await getUserById(params.id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
});

export default users;
