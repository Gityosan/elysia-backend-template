import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import routes from './routes';
const app = new Elysia();
app.use(swagger());
app.use(cors());
app.use(routes);

app.listen(3010, () => {
  console.log('Server is running on http://localhost:3010');
});
