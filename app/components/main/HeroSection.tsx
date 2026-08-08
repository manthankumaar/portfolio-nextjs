import { TypingAnimation } from '@/components/ui/typing-animation';
import {
  EditorBlank,
  EditorComment,
} from '@/app/components/editor/EditorLine';
import { profile } from '@/lib/portfolio';

export function HeroSection() {
  return (
    <section id='hero' className='editor-section'>
      <EditorComment>Hero section</EditorComment>
      <EditorBlank />
      <h1 className='editor-title-2 text-white'>
        <span className='sr-only'>{profile.name} — </span>
        {profile.heroHeadline}{' '}
        <span className='text-[#b1b1b1]'>{profile.heroHeadlineAccent}</span>
      </h1>
      <EditorBlank />
      <p className='editor-prose max-w-2xl text-[#9d9d9d]'>
        <TypingAnimation as='span' duration={20}>
          {profile.heroTyping}
        </TypingAnimation>
      </p>
    </section>
  );
}
