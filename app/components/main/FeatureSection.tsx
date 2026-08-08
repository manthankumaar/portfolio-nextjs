'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/portfolio';
import {
  EditorBlank,
  EditorLine,
  SnapToGrid,
} from '@/app/components/editor/EditorLine';

type WorkItem = (typeof projects)[number];

export function FeatureSection() {
  return (
    <section className='editor-section'>
      <EditorLine className='min-w-0 gap-2 text-[#666]'>
        <span>&lt;!--</span>
        <span className='select-none truncate'>Featured work</span>
        <span>--&gt;</span>
      </EditorLine>

      <EditorBlank />

      <SnapToGrid>
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4 xl:gap-4'>
          {projects.map((item) => (
            <WorkItemCard key={item.title} item={item} />
          ))}
        </div>
      </SnapToGrid>
    </section>
  );
}

function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      target='_blank'
      rel='noopener noreferrer'
      className='group block border border-[#2b2b2b] transition-opacity hover:opacity-90'
    >
      <div className='flex h-6 items-center justify-between gap-1 border-b border-[#2b2b2b] bg-[#181818] px-1.5 sm:px-2'>
        <p className='truncate font-mono text-[10px] font-medium leading-6 text-white sm:text-[12px]'>
          {item.title}
        </p>
        <svg
          width='12'
          height='10'
          viewBox='0 0 23 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='shrink-0 text-white opacity-70'
          aria-hidden
        >
          <path
            d='M1 10H21M21 10L12 1M21 10L12 19'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='relative aspect-[4/3] overflow-hidden'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='object-cover grayscale transition-[filter] duration-500 ease-in-out group-hover:grayscale-0'
          sizes='(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 360px'
        />
      </div>
    </Link>
  );
}
