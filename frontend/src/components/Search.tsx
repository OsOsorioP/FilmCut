"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Search } from "lucide-react";

import { fetchSearchMovie } from "@/lib/api";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { genres } from "@/constants/genres";

export default function SearchMovies() {
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchKey, setSearchKey] = useState<string>("");

    const searchMovies = async (key: string) => {
        const searchResults = await fetchSearchMovie(key);
        setMovies(searchResults);
        setMovie(searchResults[0] || { title: "No movies found" });
    };

    useEffect(() => {
        searchMovies("");
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchMovies(searchKey);
    };

    return (
        <section className="min-w-[260px] p-[16px] bg-[#262626]">
            <h2 className="mt-5 mb-5 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">Search</h2>

            <form className="container rounded mb-4 flex justify-between bg-[#1C1C1C]" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    className="p-2 w-[228px] h-[46px] bg-[#1C1C1C]"
                />
                <button type="submit" className="btn btn-primary mt-2">
                    <Search />
                </button>
            </form>

            <h2 className="mt-5 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">Genres</h2>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className=" w-[228px] h-[40px] bg-[#1C1C1C] mt-5 mb-1 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">
                        <p className="px-10">___________________</p>
                    </AccordionTrigger>
                    <div className="overflow-y-scroll scroll max-h-[355px]">
                        {genres.map((genres: Genres) => (

                            <AccordionContent key={genres.id} className=" bg-[#1C1C1C] align-baseline items-baseline ">
                                <Link
                                    href={`/genre/${genres.id}`}
                                    className="w-full h-full align-baseline items-baseline hover:bg-[#454545] bg-[#1C1C1C]"
                                >
                                    <p className="w-full h-full hover:bg-[#454545] p-2 font-[400] text-[14px] leading-[16.94px] text-[#FFFFFF]">{genres.name}</p>
                                </Link>
                            </AccordionContent>
                        ))}
                    </div>
                </AccordionItem>
            </Accordion>

        </section>
    );
}
