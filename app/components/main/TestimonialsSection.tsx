/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HyperText } from '@/components/ui/hyper-text';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
  isSplit?: boolean;
}

const allTestimonials: Testimonial[] = [
  {
    text: "The designs were modern, intuitive, and perfectly aligned with our brand. One of the best UI/UX experts we've hired!",
    name: 'James P',
    role: 'Founder',
    avatar:
      'https://framerusercontent.com/images/UY6B0qS4hdcjlEgPYtxTooD5yA.jpg',
    isSplit: false,
  },
  {
    text: "Not only is the work visually stunning, but it's also grounded in real usability. A true professional.",
    name: 'Ananya Rames',
    role: 'Tech Lead at CoreUX Labs',
    avatar: 'https://framerusercontent.com/images/6bhE2HWkOfRqZSL2oAt6jA5Y.jpg',
    isSplit: true,
  },
  {
    text: 'From Figma to functional code — everything was delivered on time.',
    name: 'David K',
    role: 'CEO of LaunchFoundry',
    avatar:
      'https://framerusercontent.com/images/nSZJQpCu25uRO9lrT3cjUnyKmk.jpg',
    isSplit: false,
  },
  {
    text: 'The design system delivered was not only functional but beautiful. Every pixel felt intentional, and our developers loved how seamless it was to implement.',
    name: 'Amanda Reed',
    role: 'Product Manager at PixelHub',
    avatar:
      'https://framerusercontent.com/images/rvVsRZjAKkiA0nvOxWWVXzG9L6s.jpg',
    isSplit: true,
  },
  {
    text: 'What impressed us most was the balance of creativity and precision. The visuals elevated our brand, and the interaction design improved engagement significantly.',
    name: 'Leon V',
    role: 'Co-Founder of Flowbit',
    avatar:
      'https://framerusercontent.com/images/jm0dvrhBRn67BN7gXkLvk9Ymi4.jpg',
    isSplit: false,
  },
];

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const testimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  return (
    <section id='client-s-word' className='px-8 py-12 relative'>
      <div className='opacity-100'>
        <div className='mb-12'>
          <div className='flex items-start justify-between mb-16'>
            <div>
              <h2 className='text-[74px] font-extrabold leading-[0.8em] uppercase text-[#2b2b2b]'>
                WORDS
              </h2>
              <h2 className='text-[39px] leading-[0.8em] text-[#2b2b2b] font-mono'>
                /////////////////////////
              </h2>
            </div>
            <div className='text-right'>
              <h2 className='text-[39px] leading-[0.8em] text-[#2b2b2b] font-mono'>
                /////////////////////////
              </h2>
              <h2 className='text-[81px] font-extrabold leading-[0.8em] uppercase text-[#2b2b2b]'>
                MATTER
              </h2>
            </div>
          </div>

          <div id='testimonial-content' className='mb-12'>
            <div className='flex items-center gap-2 mb-6'>
              <p className='text-[#666] font-mono text-xs font-medium'>
                &lt;!--
              </p>
              <HyperText
                as='p'
                startOnView={true}
                className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'
              >
                What clients say
              </HyperText>
              <p className='text-[#666] font-mono text-xs font-medium'>
                --&gt;
              </p>
            </div>
            <h2 className='text-white text-4xl font-medium text-center mb-12'>
              Feedback That <span className='text-[#9d9d9d]'>Fuels Me</span>
            </h2>
          </div>

          <div className='relative'>
            <div className='space-y-6 mb-8'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex gap-6 opacity-100 ${
                    testimonial.isSplit ? 'md:flex-row' : 'flex-col md:flex-row'
                  }`}
                >
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 rounded-full border border-[#2b2b2b] overflow-hidden relative'>
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} Avatar`}
                        fill
                        className='object-cover'
                        sizes='40px'
                      />
                    </div>
                  </div>
                  <div className='border border-[#2b2b2b] p-6 flex-1 flex flex-col'>
                    <p className='text-[#9d9d9d] font-mono text-sm font-medium mb-6 flex-1'>
                      {testimonial.text}
                    </p>
                    <div className='mt-auto'>
                      <div className='flex items-center gap-2 flex-wrap'>
                        <p className='text-white font-mono text-sm font-medium'>
                          {testimonial.name}
                        </p>
                        <p className='text-white font-mono text-sm font-medium'>
                          ,
                        </p>
                        <p className='text-[#666] font-mono text-sm font-medium'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {allTestimonials.length > 3 && (
              <div className='flex justify-center relative z-10'>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className='text-[rgb(247,244,190)] font-mono text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity'
                >
                  <span>{showAll ? 'View less' : 'View more'}</span>
                  <div className='flex gap-2'>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className='w-2 h-2 rounded-full'
                        style={{
                          backgroundColor: 'rgba(247, 244, 190, 0.2)',
                        }}
                      />
                    ))}
                  </div>
                </button>
              </div>
            )}

            <div
              className='absolute bottom-0 left-0 right-0 h-32 pointer-events-none'
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(31, 31, 31) 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
