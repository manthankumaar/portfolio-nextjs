import Image from 'next/image';

interface TechItem {
  name: string;
  icon: string;
  percentage: string;
}

const techStack: TechItem[] = [
  {
    name: 'Figma',
    icon: 'https://framerusercontent.com/images/fU3PgZdDE8X50om1d6CQQLAShSs.svg',
    percentage: '86%',
  },
  {
    name: 'Adobe XD',
    icon: 'https://framerusercontent.com/images/PnixB33xBWoI4uQiP9rOI7i5K0.svg',
    percentage: '94%',
  },
  {
    name: 'Rive',
    icon: 'https://framerusercontent.com/images/LyX7zP5TK94ucZWoSi09LPISOv0.svg',
    percentage: '62%',
  },
  {
    name: 'Framer',
    icon: 'https://framerusercontent.com/images/bNE7yUUXXvjcQwVYYhp7ePYoQ.svg',
    percentage: '92',
  },
  {
    name: 'Lovable',
    icon: 'https://framerusercontent.com/images/eYnTxbExnr9lp0CBpQB4poGGJgM.svg',
    percentage: '56%',
  },
  {
    name: 'Python',
    icon: 'https://framerusercontent.com/images/WjxyoCYFkan9DB2EuYl7Oir17x4.svg',
    percentage: '81%',
  },
  {
    name: 'Slack',
    icon: 'https://framerusercontent.com/images/7YUE7DenXQmSPJRXLXX1YKKXSUY.svg',
    percentage: '54%',
  },
  {
    name: 'React',
    icon: 'https://framerusercontent.com/images/UuJ0DxViEF1E0bjLQRhlz6EJbE.svg',
    percentage: '79%',
  },
  {
    name: 'Angular',
    icon: 'https://framerusercontent.com/images/xio8E7PmHmKLxCfvvwXC0gdj5M.svg',
    percentage: '63%',
  },
  {
    name: 'Notion',
    icon: 'https://framerusercontent.com/images/WJxJ33p1i3ei8WknJzYjq4YoI.svg',
    percentage: '87%',
  },
  {
    name: 'Github',
    icon: 'https://framerusercontent.com/images/szHGclLZQptWvoiEVsa1zfD3S2s.svg',
    percentage: '85%',
  },
];

export function TechStackSection() {
  return (
    <section className='px-8 py-12'>
      <div className='opacity-100'>
        <div className='mb-8'>
          <div className='flex items-center gap-2 mb-8'>
            <p className='text-[#666] font-mono text-xs font-medium'>
              &lt;!--
            </p>
            <p className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'>
              My tech stack
            </p>
            <p className='text-[#666] font-mono text-xs font-medium'>
              --&gt;
            </p>
          </div>

          <div className='border border-[#2b2b2b] bg-[#1f1f1f] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {techStack.map((tech, index) => {
              const isLastInRow = (index + 1) % 4 === 0;
              const isLastRow = index >= techStack.length - (techStack.length % 4 || 4);
              const isLastItem = index === techStack.length - 1;

              return (
                <div
                  key={tech.name}
                  className={`
                    border-b border-r border-[#2b2b2b] p-6 flex flex-col gap-4 h-full
                    ${isLastInRow || isLastItem ? 'border-r-0' : ''}
                    ${isLastRow ? 'border-b-0' : ''}
                  `}
                >
                  <div className='w-full h-px bg-[#2b2b2b]' />
                  <p className='text-[#b1b1b1] font-mono text-sm font-medium'>
                    {tech.name}
                  </p>
                  <div className='relative w-11 h-11 flex-shrink-0 mx-auto'>
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      fill
                      className='object-contain'
                      sizes='44px'
                    />
                  </div>
                  <p className='text-[#9d9d9d] font-mono text-sm font-medium text-right mt-auto'>
                    {tech.percentage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

