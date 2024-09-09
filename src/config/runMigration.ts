import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';

async function runMigrations() {
  const connection = await mysql.createConnection({
    uri: process.env.DATABASE_URL,
  });

  const db = drizzle(connection);

  console.log('Running migrations...');

  await migrate(db, { migrationsFolder: './drizzle' });

  console.log('Migrations completed');

  await connection.end();
}

runMigrations().catch(console.error);