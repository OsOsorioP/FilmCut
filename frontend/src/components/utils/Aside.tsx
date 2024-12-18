import React from 'react'
import Search from './Search'
import Accordion from './Accordion'

export default function Aside() {
  return (
    <aside className='min-w-[260px] p-[16px] bg-[#262626]'>
      <Search />
      <Accordion />
    </aside>
  )
}