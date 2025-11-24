'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HyperText } from '@/components/ui/hyper-text';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

interface WorkItem {
  title: string;
  href: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    title: 'Skincare eCommerce',
    href: './work/skincare-ecommerce',
    image: 'https://framerusercontent.com/images/aNYyYYslFAEKcTfnxUEc8EbhU.jpg',
  },
  {
    title: 'Minimal Form',
    href: './work/minimal-form',
    image:
      'https://framerusercontent.com/images/AoIuGxTWgrMyfpqWXggQywFPpQ.jpg',
  },
  {
    title: 'Real Estate Website',
    href: './work/real-estate-website',
    image:
      'https://framerusercontent.com/images/OdCXewlMn5FUiCm5Cdp99QhK5sk.jpg',
  },
  {
    title: 'Podcast Landing Page',
    href: './work/podcast-landing-page',
    image:
      'https://framerusercontent.com/images/1qBG7reX1qzuKrgcMpwu8uyvx4A.jpg',
  },
  {
    title: 'AI Meets Education',
    href: './work/ai-meets-education',
    image:
      'https://framerusercontent.com/images/RbQeLJjnWdTCUEWvOZaBdmRngQ.jpg',
  },
  {
    title: 'Mobile Banking App',
    href: './work/mobile-banking-app',
    image: 'https://framerusercontent.com/images/atY3RpNPOhzJWa8IbsMn6jFzk.jpg',
  },
];

export function FeatureSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section className='px-8 py-12'>
      <div className='opacity-100'>
        <div className='w-full'>
          <div className='mb-6'>
            <div className='flex items-center  justify-between gap-2 mb-6'>
              <div className='flex items-center gap-2'>
                <p className='text-[#666] font-mono text-xs font-medium'>
                  &lt;!--
                </p>
                <HyperText
                  as='p'
                  className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'
                >
                  Featured work
                </HyperText>
                <p className='text-[#666] font-mono text-xs font-medium'>
                  --&gt;
                </p>
              </div>
              <div
                className='flex border border-[#2b2b2b] place-self-end'
                style={{ borderWidth: '1px' }}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  className='p-3 border-r border-[#2b2b2b]'
                  style={{
                    backgroundColor:
                      viewMode === 'grid'
                        ? 'rgb(24, 24, 24)'
                        : 'rgb(31, 31, 31)',
                    opacity: viewMode === 'grid' ? 1 : 0.5,
                  }}
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='0.5'
                      y='0.5'
                      width='6'
                      height='6'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                    <rect
                      x='7.5'
                      y='0.5'
                      width='6'
                      height='6'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                    <rect
                      x='0.5'
                      y='7.5'
                      width='6'
                      height='6'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                    <rect
                      x='7.5'
                      y='7.5'
                      width='6'
                      height='6'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className='p-3'
                  style={{
                    backgroundColor:
                      viewMode === 'list'
                        ? 'rgb(24, 24, 24)'
                        : 'rgb(31, 31, 31)',
                    opacity: viewMode === 'list' ? 1 : 0.5,
                  }}
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='0.5'
                      y='0.5'
                      width='13'
                      height='3'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                    <rect
                      x='0.5'
                      y='5.5'
                      width='13'
                      height='3'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                    <rect
                      x='0.5'
                      y='10.5'
                      width='13'
                      height='3'
                      stroke='currentColor'
                      strokeWidth='1'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence mode='sync' presenceAffectsLayout={false}>
            <motion.div
              layout
              className={cn(
                'grid gap-4',
                viewMode === 'grid'
                  ? 'grid-cols-2'
                  : 'grid-cols-3 md:grid-cols-3'
              )}
              transition={{
                layout: { duration: 1, ease: 'easeInOut' },
              }}
            >
              {workItems.map((item) => (
                <WorkItemCard key={item.href} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <motion.div layout>
      <Link
        href={item.href}
        className='block border border-[#2b2b2b] group hover:opacity-90 transition-opacity'
      >
        <div className='flex items-center justify-between border-b border-[#2b2b2b] bg-[#181818] p-4'>
          <p className='text-white font-medium'>{item.title}</p>
          <div className='border border-[#2b2b2b] bg-[#181818] p-2'>
            <svg
              width='23'
              height='20'
              viewBox='0 0 23 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-white'
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
        </div>
        <div
          className='relative overflow-hidden'
          style={{ aspectRatio: '810/630' }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            width={810}
            height={630}
            className='object-cover w-full h-full'
            sizes='(max-width: 768px) 100vw, 50vw'
            initial={{ opacity: 0, filter: 'grayscale(100%)' }}
            animate={{ opacity: 1, filter: 'grayscale(100%)' }}
            whileHover={{ filter: 'grayscale(0%)' }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              filter: { duration: 0.4, ease: 'easeInOut' },
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
