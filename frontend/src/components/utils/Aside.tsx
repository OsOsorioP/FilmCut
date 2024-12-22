import React from 'react'
import Search from '@/components/utils/Search'
import Accordion from '@/components/utils/Accordion'

export default function Aside() {
  return (
    <aside className='min-w-[260px] min-h-[860px]  p-[16px] bg-[#262626]'>
      <Search />
      <Accordion />
    </aside>
  )
}