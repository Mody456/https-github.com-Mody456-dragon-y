import Feed from '@/Components/Feed';
import Login from '@/Components/Login';
import Sidebar from '@/Components/Sidebar';
import { useContext } from 'react';
import Modal from '@/Components/Modal';
import { useSession } from 'next-auth/react';
import { AppContext } from '../contexts/AppContext';
import Trending from '@/Components/Trending';


export default function Home() {
  
  const { data: session } = useSession();
  const [appContext] = useContext(AppContext);
  
  if (!session) return <Login />
  
  return (
   <div>
      <main className='relative max-w-[1400px] mx-auto'>
        <Sidebar />
        <div className='flex gap-6'>
          <Feed />
          <Trending />
          {appContext?.isModalOpen && <Modal />}
        </div>
      </main>
   </div>
  )
}

