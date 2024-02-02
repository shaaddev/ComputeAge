'use client';

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { useRouter } from "next/navigation";
import Results from "@/app/results/page";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
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
        }),
    month: z
        .string({
            required_error: "Please enter the month of your birthday",
            invalid_type_error: "Month must be a number"
        }),
    year: z
        .string({
            required_error: "Please enter the year of your birthday",
            invalid_type_error: "Year must be a number"
        })
})  

export default function ComputeForm(){
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(data: z.infer<typeof formSchema>){
        
        router.push('/results')
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
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white"/>
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
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white"/>
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
                                        <Input {...field} className="border border-black border-opacity-10 dark:border-opacity-10 dark:border-white"/>
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