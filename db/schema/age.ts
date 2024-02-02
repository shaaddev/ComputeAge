import { sql } from 'drizzle-orm';
import { pgTable, text, serial, timestamp} from 'drizzle-orm/pg-core';

let l = 1;

export const age = pgTable('age', {
    id: serial('id').primaryKey(),
    day: text('day').notNull(),
    month: text('month').notNull(),
    year: text('year').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})