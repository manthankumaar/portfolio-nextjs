'use client';

import Link from 'next/link';
import { projects } from '@/lib/portfolio';
import { motion } from 'motion/react';
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
        <div className='grid grid-cols-3 gap-2 sm:gap-3'>
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
        <motion.img
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className='h-full w-full object-cover'
          sizes='(max-width: 768px) 33vw, 20vw'
          initial={{ opacity: 0, filter: 'grayscale(100%)' }}
          animate={{ opacity: 1, filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            filter: { duration: 0.4, ease: 'easeInOut' },
          }}
        />
      </div>
    </Link>
  );
}
