import { drizzle } from "drizzle-orm/postgres-js";

export * from "./db/schema";
export * from "drizzle-orm/postgres-js";
export * from "drizzle-orm";

export const db = drizzle(
  "postgresql://postgres.qgwlzjsgaptbklecyseh:iEKtyXn7vZrXSc70@aws-0-eu-north-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
);
