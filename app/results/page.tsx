
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import { computeAge, current_date } from "@/components/calculateAge";


export default function Results(){
    


    const { ageYears, ageMonths, ageDays} = computeAge(2002, 7, 30)


    return(
        <main className="flex  flex-col items-center justify-between p-24">
            <h3 className="text-stone-200 font-semibold text-3xl mb-5">Results</h3> 
            <Card className="w-96 md:w-[600px]  h-auto bg-stone-200 dark:bg-zinc-900 p-10 border-none">
                <CardContent>
                    <div className="text-black mb-5 dark:text-neutral-200">
                        <p className="mb-5">Here is your results:</p>
                        <p className="mb-2">Current Date: {current_date()}</p>
                        <p className="mb-2">Date of Birth: {}</p>

                        <p>You are {ageYears} years old, {ageMonths} months, and {ageDays} days old.</p>
                    </div>
                    <Button className="dark:bg-slate-200 dark:text-black"><Link href="/">Back</Link></Button>
                </CardContent>
            </Card>
            <ThemeSwitch />
        </main>
    )
}