import {
  EditorBlank,
  EditorComment,
  EditorLine,
} from '@/app/components/editor/EditorLine';
import { services } from '@/lib/portfolio';

export function ServiceSection() {
  return (
    <section id='what-i-do' className='editor-section'>
      <EditorComment>What I do</EditorComment>
      <EditorBlank />

      {services.map((service, serviceIndex) => (
        <div key={service.number}>
          <EditorLine className='text-white'>
            {service.number} {service.title}
          </EditorLine>
          <EditorBlank />
          {service.features.map((feature) => (
            <div key={feature}>
              {/* Mobile: allow wrap so long features aren't clipped */}
              <div className='flex gap-3 py-0.5 font-mono text-[13px] font-medium leading-6 text-[#9d9d9d] sm:hidden'>
                <span
                  className='mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[#9d9d9d]'
                  aria-hidden
                />
                <span className='min-w-0'>{feature}</span>
              </div>
              {/* sm+: keep single IDE row with truncate */}
              <EditorLine className='hidden gap-3 text-[#9d9d9d] sm:flex'>
                <span
                  className='inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[#9d9d9d]'
                  aria-hidden
                />
                <span className='truncate'>{feature}</span>
              </EditorLine>
            </div>
          ))}
          {serviceIndex < services.length - 1 ? <EditorBlank lines={2} /> : null}
        </div>
      ))}
    </section>
  );
}
