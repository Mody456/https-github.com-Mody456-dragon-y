import React from 'react'

const SidebarLink = ({text, Icon}) => {
  return (
    <div className='text-[#878585] flex items-center justify-center xl:justify-start 
       text-2xl space-x-3 hovereffect px-4 py-2 w-fit transition hover:text-[#FFD700] mt-4'>
      <Icon />
      <span className='hidden xl:inline capitalize'>{text}</span>
    </div>
  )
}

export default SidebarLink
