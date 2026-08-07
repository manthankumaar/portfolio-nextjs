import { StatusBadge } from './topnav/StatusBadge';
import { TimeDisplay } from './topnav/TimeDisplay';

export default function TopNav() {
  return (
    <header className='border-b-[0.5px] border-white/30 bg-[#181818] min-h-0'>
      <div className='flex h-full items-center justify-between gap-2 px-2.5'>
        <div className='flex min-w-0 items-center gap-2'>
          <p className='truncate text-xs border-b-2 border-amber-300 w-fit px-[10px] pb-2 pt-1'>
            manthan.info
          </p>
        </div>
        <div className='flex shrink-0 items-center gap-2 sm:gap-4'>
          <StatusBadge />
          <div className='hidden md:block'>
            <TimeDisplay />
          </div>
        </div>
      </div>
    </header>
  );
}
