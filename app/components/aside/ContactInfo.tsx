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

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  href?: string;
}

function ContactItem({ icon: Icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <Icon className='size-4' />
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.div className='w-fit' initial='initial' whileHover='hover'>
        <Link href={href} target='_blank'>
          <span className='flex items-center gap-2 text-sm relative'>
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

  return <p className='flex items-center gap-2 text-sm'>{content}</p>;
}

export function ContactInfo() {
  return (
    <div className='flex flex-col gap-5'>
      <ContactItem icon={BriefcaseIcon}>2+ years of experience</ContactItem>
      <ContactItem
        icon={MapPinIcon}
        href='https://maps.app.goo.gl/XfTksSAPMndpuyDm8'
      >
        Bengaluru, India
      </ContactItem>
      <ContactItem icon={LanguageIcon}>English, Hindi</ContactItem>
      <ContactItem icon={EnvelopeIcon} href='mailto:maxmanthan111@gmail.com'>
        maxmanthan111@gmail.com
      </ContactItem>
      <ContactItem icon={PhoneIcon} href='tel:+916202929010'>
        +91 620 292 9010
      </ContactItem>
    </div>
  );
}
