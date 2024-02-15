'use client';
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from 'react';

type Theme = "light" | "dark";

export default function ThemeSwitch(){
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme)
            
            if (localTheme === "dark"){
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark");
        }
    }, [])

    return(
        <button onClick={toggleTheme} className="fixed bottom-10 right-16 text-black dark:text-slate-200 bg-opacity-80  dark:bg-opacity-50 p-2 border border-black dark:border-slate-200 rounded-full">
            {theme === 'light' ? ( <BsMoon className="w-5 h-5"/> ) : ( <BsSun className="w-5 h-5"/> )}
        </button>
    )
}