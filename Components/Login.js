import Image from 'next/image';
import React from 'react';
import dragon from './../public/dragon.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const Login = () => {
  
  return (
    <div className='grid grid-cols-2'>
      <div className='bg-[#FFD700] h-screen grid place-content-center'>
        <Image src={dragon} alt="dragon"   width={180} height={180} />
      </div>
      <div className='grid place-items-center'>
        <div className='flex gap-4 bg-white p-4 px-6 items-center rounded-[12px]
         cursor-pointer transition hover:rounded-[16px] hover:scale-105' onClick={() => signIn('google')} >
          <FaGoogle className='text-red-600 text-[30px] transition hover:text-[#FFD700]' />
          <span className='text-xl capitalize transition hover:text-[#FFD700]'>sign-in with google</span>
        </div>
      </div>
    </div>
  )
}

export default Login;
