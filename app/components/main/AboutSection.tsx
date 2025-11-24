'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { HyperText } from '@/components/ui/hyper-text';

export function AboutSection() {
  return (
    <section id='about-me' className='px-8 py-12'>
      <div className='opacity-100'>
        <div className='mb-12'>
          <div className='flex items-start justify-between mb-16'>
            <div>
              <motion.h2
                className='text-[98px] font-extrabold leading-[0.8em] uppercase text-[#2b2b2b]'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 200 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Since
              </motion.h2>
              <h2 className='text-[39px] leading-[0.8em] text-[#2b2b2b] font-mono'>
                /////////////////////////
              </h2>
            </div>
            <div className='text-right'>
              <h2 className='text-[39px] leading-[0.8em] text-[#2b2b2b] font-mono'>
                /////////////////////////
              </h2>
              <motion.h2
                className='text-[139px] font-extrabold leading-[0.8em] uppercase text-[#2b2b2b]'
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: -200 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                2023
              </motion.h2>
            </div>
          </div>

          <div className='mb-12'>
            <div className='flex items-center gap-2 mb-6'>
              <p className='text-[#666] font-mono text-xs font-medium'>
                &lt;!--
              </p>
              <HyperText
                as='p'
                startOnView={true}
                className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'
              >
                About me section
              </HyperText>
              <p className='text-[#666] font-mono text-xs font-medium'>
                --&gt;
              </p>
            </div>
            <h2 className='text-white text-4xl font-medium mb-8'>
              Inside My <span className='text-[#b1b1b1]'>Creative Core</span>
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div>
              <p className='text-[#9d9d9d] font-mono text-base font-medium leading-[1.4em]'>
                I&apos;m a{' '}
                <span
                  className='px-[2px]'
                  style={{
                    background: 'rgba(247, 244, 190, 0.2)',
                    color: 'rgb(247, 244, 190)',
                  }}
                >
                  UI/UX Designer and Front-End Developer
                </span>{' '}
                with a passion for crafting visually appealing and highly
                functional digital experiences. With a strong foundation in
                design principles and an eye for detail, I create intuitive
                interfaces that are both user-friendly and conversion-focused.
              </p>
            </div>
            <div>
              <p className='text-[#9d9d9d] font-mono text-base font-medium leading-[1.4em]'>
                I enjoy collaborating with teams, solving real-world problems,
                and{' '}
                <span
                  className='px-[2px]'
                  style={{
                    background: 'rgba(247, 244, 190, 0.2)',
                    color: 'rgb(247, 244, 190)',
                  }}
                >
                  turning complex ideas
                </span>{' '}
                into clean, engaging designs.
              </p>
            </div>
          </div>

          <div className='mb-12'>
            <Link
              href='https://drive.google.com/file/d/1HgeXhJrCWI1j5IEVzwFlJhtRqERnTk46/view'
              target='_blank'
              rel='noopener'
              className='inline-flex items-center gap-4 border border-[#2b2b2b] px-6 py-4 hover:opacity-90 transition-opacity'
            >
              <span className='text-white font-mono text-sm font-semibold'>
                Download CV
              </span>
              <div className='bg-[#2b2b2b] p-2'>
                <svg
                  width='17'
                  height='18'
                  viewBox='0 0 17 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.5 12V1M8.5 12L4 7.5M8.5 12L13 7.5M1 17H16'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div id='experience' className='mb-12'>
            <div className='flex items-center gap-2 mb-6'>
              <p className='text-[#666] font-mono text-xs font-medium'>
                &lt;!--
              </p>
              <p className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'>
                In a previous life
              </p>
              <p className='text-[#666] font-mono text-xs font-medium'>
                --&gt;
              </p>
            </div>

            <div className='space-y-0'>
              {[
                {
                  period: '2023 - present',
                  role: 'Senior UI/UX Designer',
                  company: 'Creative Studio',
                },
                {
                  period: '2018 – 2023',
                  role: 'UI/UX Designer',
                  company: 'PixelWebForge',
                },
                {
                  period: '2015 – 2018',
                  role: 'Front-End Developer',
                  company: 'WebNexa',
                },
                {
                  period: '2013 – 2015',
                  role: 'Junior Web Designer',
                  company: 'Startix Media',
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className='border-b border-[#2b2b2b] py-4 flex flex-col md:flex-row md:items-center gap-4'
                >
                  <p className='text-[rgb(247,244,190)] font-mono text-sm font-medium'>
                    {exp.period}
                  </p>
                  <p className='text-white font-mono text-sm font-medium'>
                    {exp.role}
                  </p>
                  <p className='text-[#9d9d9d] font-mono text-sm font-medium'>
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='relative aspect-[810/945] border border-[#2b2b2b] overflow-hidden'>
              <Image
                src='https://framerusercontent.com/images/rgW6RUH4ecw4hTDGGOYr3kbJ0SU.jpg'
                alt='About Image'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>

            <div className='border border-[#2b2b2b] p-6 flex flex-col justify-between'>
              <div>
                <p className='text-[#9d9d9d] font-mono text-sm font-medium mb-6'>
                  Follow me:
                </p>
                <div className='flex gap-4'>
                  {[
                    {
                      name: 'Facebook',
                      href: 'https://www.facebook.com/',
                      icon: 'https://framerusercontent.com/images/ecGEpgnqSn4AqdzMtaz3pXVgbFM.svg',
                    },
                    {
                      name: 'Twitter',
                      href: 'https://x.com/',
                      icon: 'https://framerusercontent.com/images/NItsMNNG5RmpmuK8WJdp6m7lI.svg',
                    },
                    {
                      name: 'Instagram',
                      href: 'https://www.instagram.com/',
                      icon: 'https://framerusercontent.com/images/IFxdGcBncA6gZ8eC2bbsWVmzmRY.svg',
                    },
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener'
                      aria-label={`Social link to ${social.name}`}
                      className='w-[18px] h-[18px] relative hover:opacity-80 transition-opacity'
                    >
                      <Image
                        src={social.icon}
                        alt={`${social.name} Icon`}
                        fill
                        className='object-contain'
                        sizes='18px'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
