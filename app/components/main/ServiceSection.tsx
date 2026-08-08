import {
  EditorBlank,
  EditorComment,
  SnapToGrid,
} from '@/app/components/editor/EditorLine';
import { services } from '@/lib/portfolio';

export function ServiceSection() {
  return (
    <section id='what-i-do' className='editor-section'>
      <EditorComment>What I do</EditorComment>
      <EditorBlank />

      <SnapToGrid>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
          {services.map((service) => (
            <article
              key={service.number}
              className='flex flex-col border border-[#2b2b2b] bg-[#181818] p-4 shadow-[inset_3px_0_0_0_rgb(247,244,190)] sm:p-5'
            >
              <h3 className='font-mono text-sm font-semibold text-white sm:text-base'>
                <span className='text-[rgb(247,244,190)]'>{service.number}</span>{' '}
                {service.title}
              </h3>
              <ul className='mt-4 space-y-2'>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex gap-2.5 font-mono text-xs leading-5 text-[#9d9d9d] sm:text-[13px] sm:leading-6'
                  >
                    <span
                      className='mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9d9d9d]'
                      aria-hidden
                    />
                    <span className='min-w-0'>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SnapToGrid>
    </section>
  );
}
