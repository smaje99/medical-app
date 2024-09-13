import { CircleArrowDown } from 'lucide-react';
import Image from 'next/image';

import { TransitionalText } from '@/components/transitional-text';
import { cn } from '@/lib/utils';

import { SearchBar } from './search-bar';

const SPECIALTIES = [
  'Acupuncture',
  'Massage',
  'Chiropractor',
  'Dental',
  'Dermatology',
  'Dietitian',
  'General Practitioner',
  'Mental Health',
  'Nutritionist',
  'Optometry',
  'Orthodontist',
  'Pediatrician',
  'Physical Therapy',
  'Podiatry',
  'Psychiatry',
  'Psychology',
  'Speech Therapy',
  'Urology',
  'Cosmetic',
  'Occupational Therapy',
  'Ophthalmology',
];

export default function Hero() {
  return (
    <header
      className={cn(
        'w-[100vw]',
        'lg:h-[calc(100dvh-68px)]',
        'p-6',
        'flex',
        'flex-wrap',
        'md:flex-nowrap',
        'items-center',
        'justify-center',
        'gap-10',
        'box-border',
        'bg-blue-950 text-gray-50',
      )}
    >
      <section className='flex flex-col md:max-w-[40vw] lg:pl-16'>
        <h1 className='mb-4 text-pretty text-4xl font-bold leading-tight'>
          Book your <br />
          <span className='w-full text-blue-500'>
            <TransitionalText texts={SPECIALTIES} />
          </span>
        </h1>
        <h2 className='mb-5 text-nowrap text-2xl font-bold'>Sessions now!</h2>
        <p className='mb-8 text-balance text-base'>
          With TailGrids, business and students thrive together. Business can perfectly
          match their staffing to changing demand throughout the dayed.
        </p>

        <SearchBar />

        <ul className='flex flex-wrap items-center'>
          <li>
            <a
              href='/#'
              className={cn(
                'inline-flex',
                'items-center',
                'justify-center',
                'rounded-md',
                'bg-blue-500',
                'px-6',
                'py-3',
                'text-center',
                'text-base',
                'font-medium',
                'text-gray-50',
                'hover:bg-blue-700',
                'lg:px-7',
              )}
            >
              Get Started
            </a>
          </li>
          <li>
            <a
              href='/#'
              className={cn(
                'inline-flex',
                'items-center',
                'justify-center',
                'gap-x-1',
                'px-5',
                'py-3',
                'text-center',
                'text-base',
                'font-medium',
                'hover:text-blue-500',
              )}
            >
              <CircleArrowDown />
              <span>Download App</span>
            </a>
          </li>
        </ul>
      </section>

      <section className='mx-auto mb-6 box-border flex w-full px-4 lg:w-6/12'>
        <div className='relative z-10 inline-block pt-8 lg:pt-0'>
          <Image
            src='https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png'
            alt='hero'
            className={cn(
              'max-w-full',
              'drop-shadow-[0_1px_2px_rgb(from_white_r_g_b_/_0.5)]',
              'md:max-w-[40vw]',
              'lg:ml-auto',
            )}
            width={500}
            height={650}
          />
          <span className='absolute -bottom-8 -left-8 z-[-1]'>
            <svg
              width='93'
              height='93'
              viewBox='0 0 93 93'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='2.5' cy='2.5' r='2.5' fill='#3056D3' />
              <circle cx='2.5' cy='24.5' r='2.5' fill='#3056D3' />
              <circle cx='2.5' cy='46.5' r='2.5' fill='#3056D3' />
              <circle cx='2.5' cy='68.5' r='2.5' fill='#3056D3' />
              <circle cx='2.5' cy='90.5' r='2.5' fill='#3056D3' />
              <circle cx='24.5' cy='2.5' r='2.5' fill='#3056D3' />
              <circle cx='24.5' cy='24.5' r='2.5' fill='#3056D3' />
              <circle cx='24.5' cy='46.5' r='2.5' fill='#3056D3' />
              <circle cx='24.5' cy='68.5' r='2.5' fill='#3056D3' />
              <circle cx='24.5' cy='90.5' r='2.5' fill='#3056D3' />
              <circle cx='46.5' cy='2.5' r='2.5' fill='#3056D3' />
              <circle cx='46.5' cy='24.5' r='2.5' fill='#3056D3' />
              <circle cx='46.5' cy='46.5' r='2.5' fill='#3056D3' />
              <circle cx='46.5' cy='68.5' r='2.5' fill='#3056D3' />
              <circle cx='46.5' cy='90.5' r='2.5' fill='#3056D3' />
              <circle cx='68.5' cy='2.5' r='2.5' fill='#3056D3' />
              <circle cx='68.5' cy='24.5' r='2.5' fill='#3056D3' />
              <circle cx='68.5' cy='46.5' r='2.5' fill='#3056D3' />
              <circle cx='68.5' cy='68.5' r='2.5' fill='#3056D3' />
              <circle cx='68.5' cy='90.5' r='2.5' fill='#3056D3' />
              <circle cx='90.5' cy='2.5' r='2.5' fill='#3056D3' />
              <circle cx='90.5' cy='24.5' r='2.5' fill='#3056D3' />
              <circle cx='90.5' cy='46.5' r='2.5' fill='#3056D3' />
              <circle cx='90.5' cy='68.5' r='2.5' fill='#3056D3' />
              <circle cx='90.5' cy='90.5' r='2.5' fill='#3056D3' />
            </svg>
          </span>
        </div>
      </section>
    </header>
  );
}
