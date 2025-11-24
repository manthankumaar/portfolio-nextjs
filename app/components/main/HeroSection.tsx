import { HyperText } from '@/components/ui/hyper-text';
import { TypingAnimation } from '@/components/ui/typing-animation';

export function HeroSection() {
  return (
    <section id='hero' className='px-8 py-12'>
      <div className='opacity-100'>
        <div>
          <div className='flex items-center gap-2 mb-6'>
            <p className='text-[#666] font-mono text-xs font-medium'>&lt;!--</p>
            <HyperText
              as='p'
              className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'
            >
              Hero section
            </HyperText>
            <p className='text-[#666] font-mono text-xs font-medium'>--&gt;</p>
          </div>
          <div className='mb-6'>
            <h1 className='text-white text-5xl font-medium leading-tight'>
              Creative Digital <span className='text-[#b1b1b1]'>Designer</span>
            </h1>
          </div>
          <div className='opacity-100'>
            <p className='text-[#9d9d9d] font-mono text-base font-medium leading-[1.4em] select-none pointer-events-none w-full max-w-2xl'>
              <TypingAnimation as='span' duration={20}>
                As a user-centric designer, I create visually refined, highly
                functional digital experiences that transform ideas into
                meaningful interactions.
              </TypingAnimation>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
