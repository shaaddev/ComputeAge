'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    day: z
        .string({
            required_error: "Please enter the day of your birthday",
            invalid_type_error: "Day must be a number"
        }).max(2).regex(/^(?:[1-9]|1[0-9]|2[0-9]|3[0-1])$/),
    month: z
        .string({
            required_error: "Please enter the month of your birthday",
            invalid_type_error: "Month must be a number"
        }).max(2).regex(/^(?:[1-9]|1[0-2])$/),
    year: z
        .string({
            required_error: "Please enter the year of your birthday",
            invalid_type_error: "Year must be a number"
        }).max(4).regex(/^(19[2-9][1-9]|20[0-1][0-9]|202[0-4])$/)
})  

export default function ComputeForm(){
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        localStorage.setItem("day", data.day);
        localStorage.setItem("month", data.month);
        localStorage.setItem("year", data.year);
        router.push(`/results`);
    }


    return (
        <>
            <Card className="w-96 md:w-[600px] h-auto bg-stone-200 dark:bg-zinc-900 p-10 border-none">
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 text-neutral-900 dark:text-neutral-200">
                            <FormField 
                                control={form.control}
                                name="day"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Day</FormLabel>
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white" aria-label="day input"/>
                                        <FormDescription className="opacity-50">
                                            Enter the Day you were born (1 - 31)
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="month"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Month</FormLabel>
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white" aria-label="month input"/>
                                        <FormDescription className="opacity-50">
                                            Enter the Month you were born (1 - 12)
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Year</FormLabel>
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white" aria-label="year input"/>
                                        <FormDescription className="opacity-50">
                                            Enter the year you were born
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="dark:bg-slate-200 dark:text-black">Submit</Button>  
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}