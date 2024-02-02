import { sql } from 'drizzle-orm';
import { pgTable, integer, serial} from 'drizzle-orm/pg-core';



export const age = pgTable('age', {
    id: serial('id').notNull().primaryKey(),
    day: integer('day').notNull(),
    month: integer('month').notNull(),
    year: integer('year').notNull()
})