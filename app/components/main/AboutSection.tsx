'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';
import {
  EditorBlank,
  EditorComment,
  EditorLine,
  SnapToGrid,
} from '@/app/components/editor/EditorLine';
import { education, experience, profile } from '@/lib/portfolio';

const slashDecoration = Array.from({ length: 25 }, () => '/').join('');
const slashDecorationMobile = Array.from({ length: 8 }, () => '/').join('');

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

export function AboutSection() {
  return (
    <section id='about-me' className='editor-section'>
      <SnapToGrid>
        <div className='mb-8 flex w-full items-start justify-between overflow-hidden md:mb-12'>
          <div className='shrink-0 text-right'>
            <motion.h2
              className='editor-display h-12 font-mono text-[40px] font-extrabold uppercase leading-[48px] text-[#2b2b2b] md:h-24 md:text-[72px] md:leading-[96px]'
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Since
            </motion.h2>
            <h2 className='editor-display h-6 font-mono text-[24px] leading-[24px] text-[#2b2b2b] md:h-12 md:text-[48px] md:leading-[48px]'>
              <span className='md:hidden'>{slashDecorationMobile}</span>
              <span className='hidden md:inline'>{slashDecoration}</span>
            </h2>
          </div>
          <div className='ml-auto shrink-0 text-left'>
            <h2 className='editor-display h-6 font-mono text-[24px] leading-[24px] text-[#2b2b2b] md:h-12 md:text-[48px] md:leading-[48px]'>
              <span className='md:hidden'>{slashDecorationMobile}</span>
              <span className='hidden md:inline'>{slashDecoration}</span>
            </h2>
            <motion.h2
              className='editor-display h-[72px] font-mono text-[64px] font-extrabold uppercase leading-[72px] text-[#2b2b2b] md:h-36 md:text-[120px] md:leading-[144px]'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {profile.sinceYear}
            </motion.h2>
          </div>
        </div>
      </SnapToGrid>

      <EditorComment>About me section</EditorComment>
      <EditorBlank />
      <h2 className='editor-title-2 text-white'>
        {profile.aboutHeadline}{' '}
        <span className='text-[#b1b1b1]'>{profile.aboutHeadlineAccent}</span>
      </h2>
      <EditorBlank />

      <SnapToGrid>
        <div className='grid gap-6 md:grid-cols-2'>
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph.highlight} className='editor-prose text-[#9d9d9d]'>
              {paragraph.before}
              <span
                className='px-0.5'
                style={{
                  background: 'rgba(247, 244, 190, 0.2)',
                  color: 'rgb(247, 244, 190)',
                }}
              >
                {paragraph.highlight}
              </span>
              {paragraph.after}
            </p>
          ))}
        </div>
      </SnapToGrid>
      <EditorBlank lines={2} />

      <SnapToGrid className='mb-8 md:mb-12'>
        <Link
          href={profile.cvPath}
          target='_blank'
          rel='noopener'
          className='inline-flex h-12 items-center gap-4 border border-[#2b2b2b] px-4 transition-opacity hover:opacity-90 sm:px-6'
        >
          <span className='font-mono text-[13px] font-semibold leading-6 text-white'>
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
      </SnapToGrid>

      <div id='experience'>
        <EditorComment>Experience</EditorComment>
        <EditorBlank />
        <EditorLine className='text-white'>
          Career timeline —{' '}
          <span
            className='px-0.5'
            style={{
              background: 'rgba(247, 244, 190, 0.2)',
              color: 'rgb(247, 244, 190)',
            }}
          >
            impact-focused roles
          </span>
        </EditorLine>
        <EditorBlank />

        <SnapToGrid>
          <div className='flex flex-col gap-6'>
            {experience.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.product ?? 'core'}-${exp.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className='border border-[#2b2b2b] bg-[#181818] shadow-[inset_3px_0_0_0_rgb(247,244,190)]'
              >
                <div className='flex flex-col gap-3 border-b border-[#2b2b2b] px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5'>
                  <div className='min-w-0'>
                    <p className='font-mono text-[11px] font-medium uppercase tracking-wide text-[rgb(247,244,190)]'>
                      {exp.highlight}
                    </p>
                    <h3 className='mt-1 font-mono text-base font-semibold text-white sm:text-lg'>
                      {exp.role}{' '}
                      <span className='text-[#9d9d9d]'>@ {exp.company}</span>
                    </h3>
                    {exp.product ? (
                      <p className='mt-1 font-mono text-xs font-medium text-white sm:text-sm'>
                        {exp.product}
                      </p>
                    ) : null}
                    <p className='mt-1 font-mono text-xs text-[#9d9d9d] sm:text-sm'>
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                  <p className='max-w-md font-mono text-xs leading-5 text-[#b1b1b1] sm:text-right sm:text-sm sm:leading-6'>
                    {exp.summary}
                  </p>
                </div>

                <ul className='space-y-2 px-4 py-4 sm:px-5'>
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className='flex gap-3 font-mono text-xs leading-5 text-[#9d9d9d] sm:text-sm sm:leading-6'
                    >
                      <span
                        className='mt-2 h-1 w-1 shrink-0 rounded-full'
                        style={{ backgroundColor: 'rgb(247, 244, 190)' }}
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-2 border-t border-[#2b2b2b] px-4 py-3 sm:px-5'>
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className='border border-[#2b2b2b] bg-[#1f1f1f] px-2 py-1 font-mono text-[10px] text-[#b1b1b1] sm:text-[11px]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </SnapToGrid>
      </div>

      <EditorBlank lines={2} />

      <div id='education'>
        <EditorComment>Education</EditorComment>
        <EditorBlank />
        <div className='md:hidden'>
          <EditorLine className='text-[rgb(247,244,190)] shadow-[inset_0_-1px_0_#2b2b2b]'>
            {education.period}
          </EditorLine>
          <div className='border-b border-[#2b2b2b] py-1 font-mono text-[13px] font-medium leading-6 text-white'>
            {education.degree}
          </div>
          <div className='py-1 font-mono text-[13px] font-medium leading-6 text-[#9d9d9d]'>
            {education.school}
          </div>
        </div>
        <EditorLine className='hidden gap-4 shadow-[inset_0_-1px_0_#2b2b2b] md:flex'>
          <span className='min-w-[160px] shrink-0 text-[rgb(247,244,190)]'>
            {education.period}
          </span>
          <span className='min-w-0 truncate text-white'>{education.degree}</span>
        </EditorLine>
        <EditorLine className='hidden text-[#9d9d9d] md:flex'>
          <span className='min-w-0 truncate'>{education.school}</span>
        </EditorLine>
      </div>

      <EditorBlank lines={2} />

      <SnapToGrid>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-stretch'>
          <div className='relative mx-auto aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden border border-[#2b2b2b] sm:mx-0 sm:max-w-[240px]'>
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className='object-cover object-top'
              sizes='240px'
            />
          </div>

          <div className='flex min-h-0 flex-1 flex-col justify-between gap-6 border border-[#2b2b2b] p-4 sm:p-5'>
            <div className='space-y-3'>
              <p className='font-mono text-sm font-medium text-white sm:text-base'>
                {profile.name}
              </p>
              <p className='font-mono text-xs leading-5 text-[#9d9d9d] sm:text-sm sm:leading-6'>
                {profile.bio}
              </p>
              <div className='space-y-2 font-mono text-xs text-[#b1b1b1] sm:text-sm'>
                <p>{profile.location}</p>
                <p>
                  <Link
                    href={`mailto:${profile.email}`}
                    className='underline decoration-[#2b2b2b] underline-offset-2 transition-colors hover:text-[rgb(247,244,190)] hover:decoration-[rgba(247,244,190,0.5)]'
                  >
                    {profile.email}
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <p className='mb-2 font-mono text-xs text-[#9d9d9d]'>Follow me</p>
              <div className='flex flex-wrap gap-2'>
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.name];
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Social link to ${social.name}`}
                      className='inline-flex h-10 items-center gap-2 border border-[#2b2b2b] px-3 font-mono text-xs text-white transition-colors hover:border-[#444] hover:text-[rgb(247,244,190)]'
                    >
                      <Icon className='size-4 shrink-0' />
                      {social.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SnapToGrid>
    </section>
  );
}
