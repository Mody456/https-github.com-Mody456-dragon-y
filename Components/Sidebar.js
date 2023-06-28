import React from 'react';
import Image from 'next/image';
import dragon from './../public/dragon.png';
import SidebarLink from './SidebarLink';
import { AiFillHome, AiOutlineInbox, AiOutlineUser } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { BsBookmarkFill , BsThreeDots} from 'react-icons/bs';
import { HiOutlineClipboardList, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { signOut, useSession } from 'next-auth/react';


const Sidebar = () => {
    const {data: session} = useSession();
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2
       fixed h-full border-r border-[#FFD700] pr-0 xl:pr-8 '>
      <div className='flex items-center justify-center w-16 h-16 p-0 hovereffect xl:ml-24'>
        <Image src={dragon} alt="dragon"   width={52} height={52} />
      </div>

      <div className='space-y-2 mt-4 mb-2.5 xl:ml-24'>
        <SidebarLink text='home' Icon={AiFillHome} />
        <SidebarLink text='explore' Icon={BiHash} />
        <SidebarLink text='notifications' Icon={FaBell} />
        <SidebarLink text='messages' Icon={AiOutlineInbox} />
        <SidebarLink text='bookmarks' Icon={BsBookmarkFill} />
        <SidebarLink text='list' Icon={HiOutlineClipboardList} />
        <SidebarLink text='profile' Icon={AiOutlineUser} />
        <SidebarLink text='more' Icon={HiOutlineDotsCircleHorizontal} />
      </div>

      <button className='hidden xl:inline ml-auto bg-[#FFD700] text-white rounded-full
        w-52 h-[52px] text-lg transition font-bold capitalize hover:bg-yellow-500'>
            drag
      </button>

      <div className='text-[#878585] flex items-center justify-center mt-auto hovereffect
        xl:ml-auto xl:-mr-5 px-4 py-2 hover:text-[#FFD700]' onClick={signOut}>
            <img src={session?.user?.image} alt='image' className='h-10 w-10 rounded-full 
               xl:mr-2.5 ' />
            <div className='hidden xl:inline leading-5 '>
                <h4 className='font-bold '>{session?.user?.name}</h4>
                <p className="text-[#6e767d] text-[15px] hover:text-[#FFD700]">
                  @{session?.user?.tag}
                </p>
            </div>   
            <BsThreeDots className="h-5 hidden xl:inline ml-10" />
      </div>  
    </div>
  )
}

export default Sidebar
