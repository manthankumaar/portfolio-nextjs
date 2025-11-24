'use client';

import { useEffect, useState } from 'react';

export function TimeDisplay() {
  const [time, setTime] = useState({ hours: 12, minutes: 4, period: 'PM' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      setTime({
        hours: displayHours,
        minutes: minutes,
        period: period,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center gap-2 opacity-100'>
      <p className='text-[#9d9d9d] text-xs font-mono font-medium'>
        Bengaluru, India
      </p>
      <div
        className='w-1 h-1 rounded-full'
        style={{ backgroundColor: 'rgb(157, 157, 157)' }}
      />
      <div className='flex items-center gap-2'>
        <p className='text-xs font-mono font-medium text-[#9d9d9d]'>My time:</p>
        <div
          className='text-[#b1b1b1] text-xs font-mono font-medium'
          style={{ fontFamily: 'var(--font-mono), monospace' }}
        >
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}{' '}
          <span className='font-medium'>{time.period}</span>
        </div>
      </div>
    </div>
  );
}
