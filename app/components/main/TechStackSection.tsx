import Image from 'next/image';
import {
  EditorBlank,
  EditorComment,
  EditorLine,
  SnapToGrid,
} from '@/app/components/editor/EditorLine';
import { techStack } from '@/lib/portfolio';

export function TechStackSection() {
  return (
    <section className='editor-section'>
      <EditorComment>My tech stack</EditorComment>
      <EditorBlank />

      <SnapToGrid>
        <div className='grid grid-cols-2 border border-[#2b2b2b] bg-[#1f1f1f] sm:grid-cols-3 lg:grid-cols-4'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='flex h-36 flex-col justify-between px-3 py-3 shadow-[inset_-1px_-1px_0_#2b2b2b] sm:px-4'
            >
              <EditorLine className='text-[#b1b1b1]'>{tech.name}</EditorLine>
              <div className='relative mx-auto h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12'>
                <Image
                  src={tech.icon}
                  alt={`${tech.name} Icon`}
                  fill
                  className='object-contain'
                  sizes='48px'
                />
              </div>
              <EditorLine className='justify-end text-[#9d9d9d]'>
                {tech.percentage}
              </EditorLine>
            </div>
          ))}
        </div>
      </SnapToGrid>
    </section>
  );
}
