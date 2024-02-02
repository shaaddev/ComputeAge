// 'use client'

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import { computeAge, current_date } from "@/components/calculateAge";
import { eq } from "drizzle-orm";
import { age } from "@/db/schema/age";
import { db } from "@/db";

export default async function Results(){
    // const { id } = params;
    const user_age = await db.select().from(age).where(eq(age.id, 1));


    let user_dob = `${user_age[0].year}-${user_age[0].month}-${user_age[0].day}`

    const { ageYears, ageMonths, ageDays} = computeAge(parseInt(user_age[0].year), parseInt(user_age[0].month), parseInt(user_age[0].day))

    const onSubmit = async () => {
        await db.delete(age)
    }

    return(
        <main className="flex  flex-col items-center justify-between p-24">
            <h3 className="text-stone-200 font-semibold text-3xl mb-5">Results</h3> 
            <Card className="w-96 md:w-[600px]  h-auto bg-stone-200 dark:bg-zinc-900 p-10 border-none">
                <CardContent>
                    <div className="text-black mb-5 dark:text-neutral-200">
                        <p className="mb-5">Here is your results:</p>
                        <p className="mb-2">Current Date: {current_date()}</p>
                        <p className="mb-2">Date of Birth: {user_dob}</p>

                        <p>You are {ageYears} years old, {ageMonths} months, and {ageDays} days old.</p>
                    </div>
                    <Button className="dark:bg-slate-200 dark:text-black"><Link href="/">Back</Link></Button>
                </CardContent>
            </Card>
            <ThemeSwitch />
        </main>
    )
}