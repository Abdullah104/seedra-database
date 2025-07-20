import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const adminsTable = pgTable("admins", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});
