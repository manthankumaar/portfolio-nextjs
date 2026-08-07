import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { profile } from '@/lib/portfolio';

export function BasicDetails() {
  return (
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarImage src={profile.avatar} alt={profile.name} />
        <AvatarFallback>{profile.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <p>{profile.name}</p>
        <p className='text-xs text-white/50'>{profile.title}</p>
      </div>
    </div>
  );
}
