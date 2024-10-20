// src/testDbConnection.ts
import { sql } from 'drizzle-orm';
import { db } from './config/database';

async function testConnection() {
  try {
    // 簡単なクエリを実行
    const result = await db.select({ now: sql`NOW()` });
    console.log('Database connection successful:', result);
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    process.exit();
  }
}

testConnection();
