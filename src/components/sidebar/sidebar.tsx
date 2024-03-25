"use client"
import logoipsum from '../../../public/logoipsum-325.svg';
import Image from 'next/image';
import {
  ChevronFirst,
  ChevronLast,
  LayoutDashboard,
  MoreVertical,
  Wallet,
  BarChart,
  Boxes,
  BadgeDollarSign,
  Repeat2,
  LifeBuoy,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sideicons from './sideicons';
import { useState } from 'react';



export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  return (
    
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image src={logoipsum} alt='logo' width={130} height={130} className={`overflow-hidden transition-all ${expanded ? "w-40":"w-0"}`} />
          <Button variant="secondary" onClick={()=>setExpanded(!expanded)}>
            {expanded? <ChevronFirst size={20} /> :<ChevronLast size={20}/>}
          </Button>
        </div>

        <ul className='flex-grow divide-y px-4'>
          <Sideicons icon={<LayoutDashboard size={20} />} text={'Dashboard'} status="active" alert={false} expanded={expanded} />
          <Sideicons icon={<Wallet size={20} />} text="Wallet" status='inactive' alert={true} expanded={expanded}/>
          <Sideicons icon={<BarChart size={20} />} text='Spending' status="inactive" alert={false} expanded={expanded} />
          <Sideicons icon={<Boxes size={20} />} text='Savings' status='inactive' alert={true} expanded={expanded} />
          <Sideicons icon={<BadgeDollarSign size={20} />} text='Expenses' status='inactive' alert={false} expanded={expanded} />
          <Sideicons icon={<Repeat2 size={20} />} text='Exchange' status='inactive' alert={false} expanded={expanded} />
        </ul>


        <div className='border-t-2 flex p-3 items-center'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3": "w-0" }`}>
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

