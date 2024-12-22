import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { genres } from '@/constants/genres'
import Link from 'next/link'
import { Genres } from '@/types/genres'

export default function AccordionGenre() {
    return (
        <section>
            <h2 className="mt-5 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">Genres</h2>

            <Accordion type="single" collapsible className="w-full h-fit">
                <AccordionItem value="item-1">
                    <AccordionTrigger className=" w-[228px] h-[40px] bg-[#1C1C1C] mt-5 mb-1 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">
                        <p className="px-4">Select Genre</p>
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
    )
}
