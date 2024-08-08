import { CircleArrowDown } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const SingleImage: React.FC<{
  href: string;
  imgSrc: string;
}> = ({ href, imgSrc }) => (
  <a href={href} className='flex w-full items-center justify-center'>
    <Image
      src={imgSrc}
      alt='brand image'
      width={110}
      height={30}
      className='h-10 w-full'
    />
  </a>
);

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
        'bg-white',
        'dark:bg-blue-950',
      )}
    >
      <section className='flex flex-col md:max-w-[40vw] lg:pl-16'>
        <h1
          className={cn(
            'mb-5',
            'text-4xl',
            'lg:text-5xl',
            'font-bold',
            'text-blue-950',
            'dark:text-gray-50',
            'leading-tight',
            'text-pretty',
          )}
        >
          The Greatest Journey Of Online Payment.
        </h1>
        <p className='mb-8 text-balance text-base text-blue-950 dark:text-gray-50'>
          With TailGrids, business and students thrive together. Business can perfectly
          match their staffing to changing demand throughout the dayed.
        </p>
        <ul className='flex flex-wrap items-center'>
          <li>
            <a
              href='/#'
              className={cn(
                'inline-flex',
                'items-center',
                'justify-center',
                'rounded-md',
                'bg-blue-700',
                'px-6',
                'py-3',
                'text-center',
                'text-base',
                'font-medium',
                'text-gray-50',
                'hover:bg-blue-900',
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
                'text-blue-950',
                'hover:text-blue-700',
                'dark:text-gray-50',
              )}
            >
              <CircleArrowDown className='text-blue-700' />
              <span>Download App</span>
            </a>
          </li>
        </ul>
        <section
          className={'grid w-3/4 grid-cols-3 grid-rows-2 items-center gap-x-4 pt-16'}
        >
          <h6
            className={cn(
              'col-span-full',
              'mb-6',
              'flex',
              'items-center',
              'text-xs',
              'font-normal',
              'text-blue-950',
              'dark:text-gray-50',
            )}
          >
            Some Of Our Clients{' '}
            <span className='ml-3 inline-block h-px w-8 bg-blue-950'></span>
          </h6>
          <SingleImage
            href='/#'
            imgSrc='https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg'
          />
          <SingleImage
            href='/#'
            // eslint-disable-next-line max-len
            imgSrc='https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg'
          />
          <SingleImage
            href='/#'
            imgSrc='https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg'
          />
        </section>
      </section>
      <section className='mx-auto mb-6 box-border flex w-full px-4 lg:w-6/12'>
        <div className='relative z-10 inline-block pt-8 lg:pt-0'>
          <Image
            src='https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png'
            alt='hero'
            className='max-w-full md:max-w-[40vw] lg:ml-auto'
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
