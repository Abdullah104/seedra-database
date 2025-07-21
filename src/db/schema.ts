import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const adminsTable = pgTable("admins", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const clientTypeEnum = pgEnum("client_type", ["corporate"]);

export const portfolioTypeEnum = pgEnum("portfolio_type", [
  "local_securities",
  "foreign_securities",
  "investment_funds",
]);

export const formSubmissionsTable = pgTable("form_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  clientType: clientTypeEnum(),
  clientName: text("client_name"),
  clientFileNumber: text("client_file_number"),
  clientInvestmentAccountNumber: text("client_investment_account_number"),
  accountCurrency: text("account_currency"),
  portfolioType: portfolioTypeEnum(),
});
