import { Menu } from 'lucide-react';
import { type AnchorHTMLAttributes, type DetailedHTMLProps, type FC } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const MobileItem: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...props }) => (
  <a
    {...props}
    className={cn(
      '-mx-3',
      'block',
      'rounded-lg',
      'px-3',
      'py-2',
      'text-base',
      'font-semibold',
      'leading-7',
      'text-gray-50',
      'hover:bg-gray-200',
    )}
  >
    {children}
  </a>
);

function MobileNavigation(): React.JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          className='bg-transparent ring-offset-gray-50 hover:bg-blue-900'
        >
          <span className='sr-only'>Open main menu</span>
          <Menu className='text-gray-50' aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-blue-950 text-gray-50'>
        <SheetHeader>
          <a href='/' className='-m-1.5 p-1.5 text-start text-lg font-bold text-gray-50'>
            Medical App
          </a>
        </SheetHeader>

        <section className='grid gap-y-2 py-6'>
          <MobileItem href='/product'>Product</MobileItem>
          <MobileItem href='/features'>Features</MobileItem>
          <MobileItem href='/marketplace'>Marketplace</MobileItem>
          <MobileItem href='/company'>Company</MobileItem>
          <Separator />
          <MobileItem href='/login'>Log in</MobileItem>
        </section>
      </SheetContent>
    </Sheet>
  );
}

const MenuItem: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...props }) => (
  <a {...props} className='text-sm font-semibold leading-6 text-gray-50'>
    {children}
  </a>
);

export function Navigation(): React.JSX.Element {
  return (
    <nav
      aria-label='Global'
      className={cn(
        'mx-auto',
        'flex',
        'max-w-full',
        'items-center',
        'justify-between',
        'p-6',
        'lg:px-8',
        'bg-blue-950',
      )}
    >
      <section className='flex lg:flex-1'>
        <a href='/' className='-m-1.5 p-1.5 text-lg font-bold text-gray-50'>
          Medical App
        </a>
      </section>

      <section className='flex lg:hidden'>
        <MobileNavigation />
      </section>

      <section className='hidden lg:flex lg:gap-x-12'>
        <MenuItem href='/product'>Product</MenuItem>
        <MenuItem href='/features'>Features</MenuItem>
        <MenuItem href='/marketplace'>Marketplace</MenuItem>
        <MenuItem href='/company'>Company</MenuItem>
      </section>

      <section className='hidden lg:flex lg:flex-1 lg:justify-end'>
        <MenuItem href='/login'>
          Log in <span aria-hidden>&rarr;</span>
        </MenuItem>
      </section>
    </nav>
  );
}
