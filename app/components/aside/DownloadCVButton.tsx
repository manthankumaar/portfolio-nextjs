import { Button } from '@/components/ui/button';
import { HyperText } from '@/components/ui/hyper-text';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function DownloadCVButton() {
  return (
    <div>
      <Button
        variant='outline'
        className='pr-0 h-[42px] py-0 gap-5'
        asChild
      >
        <Link href='https://drive.google.com/file/d/1B1F2L26gFwUh8vo4zGxipzP0LBsW9hK9/view?usp=sharing'>
          <HyperText className='w-full text-sm'>Download CV</HyperText>
          <span className='bg-border rounded-md p-2 h-full'>
            <ArrowDownTrayIcon className='size-5' />
          </span>
        </Link>
      </Button>
    </div>
  );
}

