"use client";
import { useEffect, useState } from "react";
import RandomCard from "./randomcard";

interface IStuff {
    id: number;
    author: string;
    title: string;
    description: string;
}
export default function Home() {
    const [stuffs, setStuffs] = useState<IStuff[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:8080/stuff')
            const fStuffs = await data.json()
            setStuffs(fStuffs.slice(-30))
        }

        fetchData();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-full font-[family-name:var(--font-geist-sans)]">
            <header className="p-3 text-center w-full shadow-md shadow-slate-300">
                <div className="text-3xl underline">
                    A simple fetch example with nextjs
                </div>
            </header>
            <main className="flex flex-col gap-10 row-start-2 items-center justify-center h-full overflow-auto">
                <div className="flex gap-5 items-center justify-center flex-wrap h-full pt-8">
                    {
                        stuffs.map((stuff: IStuff) => (
                            <RandomCard key={stuff.id} {...stuff} />
                        ))
                    }
                </div>
            </main>
            <footer className="flex items-center justify-center p-3 w-full text-center shadow-slate-500">
                © Mickael Berger - Ynov
            </footer>
        </div>
    );
}
