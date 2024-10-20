import { Elysia } from 'elysia';
import users from './users';

const routes = new Elysia();

routes.get('/', () => ({ status: 'OK' }));
routes.get('/api/health', () => ({ status: 'OK' }));
routes.use(users);

export default routes;
