'use client';
import {
  BriefcaseIcon,
  EnvelopeIcon,
  LanguageIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'motion/react';
import { profile } from '@/lib/portfolio';

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  href?: string;
}

function ContactItem({ icon: Icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <Icon className='size-4 shrink-0' />
      <span className='break-all'>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.div className='w-fit' initial='initial' whileHover='hover'>
        <Link href={href} target='_blank'>
          <span className='relative flex items-center gap-2 text-xs sm:text-sm'>
            {content}
            <motion.span
              className='absolute bottom-0 left-6 w-full h-px bg-current origin-left'
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
            />
          </span>
        </Link>
      </motion.div>
    );
  }

  return (
    <p className='flex items-center gap-2 text-xs sm:text-sm'>{content}</p>
  );
}

export function ContactInfo() {
  return (
    <div className='flex flex-col gap-3 lg:gap-5'>
      <ContactItem icon={BriefcaseIcon}>{profile.yearsLabel}</ContactItem>
      <ContactItem icon={MapPinIcon} href={profile.locationHref}>
        {profile.location}
      </ContactItem>
      <ContactItem icon={LanguageIcon}>{profile.languages}</ContactItem>
      <ContactItem icon={EnvelopeIcon} href={`mailto:${profile.email}`}>
        {profile.email}
      </ContactItem>
      <ContactItem icon={PhoneIcon} href={profile.phoneHref}>
        {profile.phone}
      </ContactItem>
    </div>
  );
}
