import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";


export const cartTableDrizzle = pgTable("carrt",{
    product_id:varchar("product_id", {length:255}).notNull(),
    quantity:integer("quantity"),
    user_id: varchar("user_id", { length:255 }).notNull(),
    // price:integer("price"),
})


export type typeOfCartTable = InferModel<typeof cartTableDrizzle>
// drizzle ko sql de rhe hai as liye as ko export krna h
export const db = drizzle(sql);