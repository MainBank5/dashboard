
import logoipsum from '../../public/logoipsum-325.svg';
import Image from 'next/image';
import { ChevronFirst, 
  LayoutDashboard, 
  MoreVertical, 
  Wallet,
  BarChart,
  Boxes,
  BadgeDollarSign,
  Repeat2,
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sideicons from './sideicons';

export default function Sidebar() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image src={logoipsum} alt='logo' width={130} height={130} />
          <Button variant="secondary"><ChevronFirst size={20} /></Button>
        </div>

        <ul className='flex-grow divide-y px-4'>
          <Sideicons icon={<LayoutDashboard size={20}/>} text={'Dashboard'} status="active" alert={false} />
          <Sideicons icon={<Wallet size={20}/>} text="Wallet" status='inactive' alert={true}/>
          <Sideicons icon={<BarChart size={20}/>} text='Spending' status="inactive" alert={false}/>
          <Sideicons icon={<Boxes size={20}/>} text='Savings' status='inactive' alert={true}/>
          <Sideicons icon={<BadgeDollarSign size={20}/>} text='Expenses' status='inactive' alert={false}/>
          <Sideicons icon={<Repeat2 size={20}/>} text='Exchange' status='inactive' alert={false}/>
        </ul>

        <div className='border-t-2 flex p-3 items-center'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className='flex justify-between items-center w-52 ml-3'>
            <div>
              <h4 className='font-semibold'>John Doe</h4>
              <span>username@email.com</span>
            </div>
            <MoreVertical />
          </div>
        </div>
      </nav>
    </aside>
  )
}

