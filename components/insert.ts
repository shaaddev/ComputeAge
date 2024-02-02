'use server'
import { db } from "@/db";
import { age } from "@/db/schema/age";
import { eq } from "drizzle-orm";

export default async function insert(day: string, month: string, year: string){
    await db.insert(age).values({
        day: day,
        month: month,
        year: year
    });
}