import { genres } from '@/constants/genres'
import Link from 'next/link'
import React from 'react'

export default function GenreRow() {

    const urlImage = 'https://image.tmdb.org/t/p/w500'

  return (
    <section className="h-80 flex flex-col md:flex-row px-6 md:px-12">
            <div className="uppercase flex flex-col justify-between md:w-96">
                <h2 className="text-2xl md:text5xl max-w-xs font-semivold text-[#E50914]">
                    Select Genre
                </h2>
                <div className="flex justify-between items-center">
                    <p className="mt-1 md:mt-0 text-xs md:text-sm uppercase text-gray-300 tracking-wider">
                        Scroll To Next --
                    </p>
                </div>
            </div>

            <div className="mt-4 md:ml-12 md:mt-0 flex overflow-y-hidden overflow-x-hidden no-scrollbar gap-x-4 w-full">
                {genres.map((genre) => (
                    <Link href={`/genre/${genre.id}`} key={genre.id} prefetch={false}>
                        <div
                            className='pt-20 h-80 min-w-40 md:min-w-64 cursor-pointer'
                            style={{backgroundColor:genre.color}}
                        >
                            <p className='uppercase text-lg md:text-2xl font-bold text-white'>
                                {genre.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
  )
}
