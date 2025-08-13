
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

//uuid
export const users = pgTable('users', {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    email: text().notNull().unique(),
})
export const courses = pgTable('courses', {
    id: uuid().primaryKey().defaultRandom(),
    title: text().notNull().unique(),
    description: text(),
})