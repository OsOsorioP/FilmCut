import Aside from '@/components/utils/Aside';
import ScrollToUp from '@/components/ui/ScrollToUp';
import React, { ReactNode, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  children: ReactNode;
}

export default function LayoutGenre({ children, }: Props) {
  return (
    <main className="flex flex-col md:flex-row w-full h-full mt-[69px]">
      <Aside />
      <section className='w-full'>
      <Suspense fallback={<Skeleton/>}>
        {children}
        </Suspense>
      </section>
      <ScrollToUp/>
    </main>
  )
}
