import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function BasicDetails() {
  return (
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <p>Manthan Kumar</p>
        <p className='text-xs text-white/50'>Software Engineer</p>
      </div>
    </div>
  );
}

