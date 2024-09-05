import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export function SearchBar(): JSX.Element {
  return (
    <form className='mb-6'>
      <Label htmlFor='default-search' className='sr-only'>
        Search Mockups, Logos...
      </Label>
      <div
        className={cn(
          'w-full',
          'flex flex-nowrap gap-4',
          'p-2',
          'border',
          'border-gray-300',
          'rounded-lg',
          'bg-gray-50',
          'dark:bg-gray-700',
          'dark:border-gray-600',
        )}
      >
        <div className='pointer-events-none flex items-center ps-3'>
          <Search aria-disabled className='text-gray-800' />
        </div>
        <Input
          type='search'
          id='default-search'
          className={cn(
            'block',
            'w-full',
            'text-sm',
            'ps-0',
            'text-gray-900',
            'bg-transparent',
            'border-transparent',
            'dark:placeholder-gray-400',
          )}
          placeholder='Search Mockups, Logos...'
          required
        />
        <Button type='submit' className='bg-blue-700 text-gray-50'>
          Search
        </Button>
      </div>
    </form>
  );
}
