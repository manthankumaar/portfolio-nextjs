'use client';

export function StatusBadge() {
  return (
    <div className='opacity-100'>
      <div
        className='flex items-center gap-2 px-2 py-1 rounded-sm'
        style={{ backgroundColor: 'rgba(90, 238, 108, 0.1)' }}
      >
        <p
          className='text-[12px] font-medium'
          style={{ color: 'rgb(90, 238, 108)' }}
        >
          Open to new work
        </p>
        <div className='relative w-2 h-2 flex items-center justify-center'>
          <div
            className='absolute w-2 h-2 rounded-full'
            style={{ backgroundColor: 'rgb(90, 238, 108)' }}
          />
          <div
            className='absolute w-2 h-2 rounded-full'
            style={{
              backgroundColor: 'rgb(90, 238, 108)',
              opacity: 0.25,
            }}
          />
          <div
            className='absolute w-2 h-2 rounded-full'
            style={{
              backgroundColor: 'rgb(90, 238, 108)',
              opacity: 0.0114453,
              transform: 'scale(3.04219)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

