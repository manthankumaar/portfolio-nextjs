import { HyperText } from '@/components/ui/hyper-text';

interface ServiceItem {
  number: string;
  title: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    number: '1.',
    title: 'UI/UX Design',
    features: [
      'Wireframes & mockups',
      'Interactive prototypes',
      'Design systems & style guides',
      'User flow diagrams',
      'Mobile-first & responsive design',
      'UX research and audits',
    ],
  },
  {
    number: '2.',
    title: 'Front-End Development',
    features: [
      'HTML5 / CSS3 / JavaScript',
      'Tailwind CSS or Bootstrap',
      'Web animations & transitions',
      'Responsive layout using Flexbox & Grid',
      'React.js / Vue.js integration',
      'Cross-browser compatibility',
    ],
  },
  {
    number: '3.',
    title: 'Design to Code',
    features: [
      'Framer development',
      'Clean, scalable, maintainable code',
      'SEO-ready structure',
      'Mobile & tablet optimization',
      'Asset optimization for performance',
    ],
  },
];

export function ServiceSection() {
  return (
    <section id='what-i-do' className='px-8 py-12'>
      <div className='opacity-100'>
        <div className='mb-12'>
          <div className='flex items-center gap-2 mb-8'>
            <p className='text-[#666] font-mono text-xs font-medium'>&lt;!--</p>
            <HyperText
              as='p'
              startOnView={true}
              className='text-[#666] font-mono text-xs font-medium select-none pointer-events-none whitespace-nowrap'
            >
              What I do
            </HyperText>
            <p className='text-[#666] font-mono text-xs font-medium'>--&gt;</p>
          </div>

          <div className='space-y-12'>
            {services.map((service) => (
              <div key={service.number} className='opacity-100'>
                <h3 className='text-white text-2xl font-medium mb-6'>
                  {service.number} {service.title}
                </h3>
                <div className='space-y-3'>
                  {service.features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-3 w-full'>
                      <div
                        className='w-1 h-1 rounded-full flex-shrink-0'
                        style={{ backgroundColor: 'rgb(157, 157, 157)' }}
                      />
                      <p className='text-[#9d9d9d] font-mono text-sm font-medium'>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
