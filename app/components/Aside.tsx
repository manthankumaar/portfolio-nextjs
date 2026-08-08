'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BasicDetails } from './aside/BasicDetails';
import { Bio } from './aside/Bio';
import { ContactInfo } from './aside/ContactInfo';
import { DownloadCVButton } from './aside/DownloadCVButton';

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className='min-h-0 border-b-[0.5px] border-white/30 bg-[#181818] px-4 py-3 lg:overflow-y-auto lg:border-b-0 lg:border-r-[0.5px] lg:px-[30px] lg:py-[30px]'>
      <div className='flex items-center justify-between gap-3'>
        <BasicDetails />
        <button
          type='button'
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls='basic-info-panel'
          className='inline-flex h-8 shrink-0 items-center gap-1 border border-[#2b2b2b] px-2 text-[11px] font-medium text-[#9d9d9d] transition-colors hover:border-[#444] hover:text-white lg:hidden'
        >
          {isOpen ? 'Hide' : 'Info'}
          {isOpen ? (
            <ChevronUp className='size-3.5' aria-hidden />
          ) : (
            <ChevronDown className='size-3.5' aria-hidden />
          )}
        </button>
      </div>

      <div
        id='basic-info-panel'
        className={`${
          isOpen ? 'mt-3 flex' : 'hidden'
        } max-h-[36vh] flex-col gap-4 overflow-y-auto lg:mt-4 lg:flex lg:max-h-none lg:gap-[30px] lg:overflow-visible`}
      >
        <div className='text-sm leading-relaxed text-white/80 lg:text-base'>
          <Bio />
        </div>
        <ContactInfo />
        <DownloadCVButton />
      </div>
    </aside>
  );
}
