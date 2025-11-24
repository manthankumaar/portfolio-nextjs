import { StatusBadge } from './topnav/StatusBadge';
import { TimeDisplay } from './topnav/TimeDisplay';

export default function TopNav() {
  return (
    <header className='border-b-[0.5px] border-white/30 bg-[#181818]'>
      <div className='flex items-center justify-between px-2.5'>
        <div className='flex items-center gap-2'>
          <p className='text-xs border-b-2 border-amber-300 w-fit px-[10px] pb-2 pt-1'>
            manthan.info
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <StatusBadge />
          <TimeDisplay />
        </div>
      </div>
    </header>
  );
}
