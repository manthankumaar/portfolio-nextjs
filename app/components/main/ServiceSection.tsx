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
            <EditorLine key={feature} className='gap-3 text-[#9d9d9d]'>
              <span
                className='inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[#9d9d9d]'
                aria-hidden
              />
              <span className='truncate'>{feature}</span>
            </EditorLine>
          ))}
          {serviceIndex < services.length - 1 ? <EditorBlank lines={2} /> : null}
        </div>
      ))}
    </section>
  );
}
