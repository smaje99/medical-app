import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export function SearchBar(): JSX.Element {
  return (
    <form className='mx-auto max-w-md'>
      <Label
        htmlFor='default-search'
        className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Search Mockups, Logos...
      </Label>
      <div className='relative'>
        <div
          className={
            'pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'
          }
        >
          <Search />
        </div>
        <Input
          type='search'
          id='default-search'
          className={cn(
            'block',
            'w-full',
            'p-4',
            'ps-10',
            'text-sm',
            'text-gray-900',
            'border',
            'border-gray-300',
            'rounded-lg',
            'bg-gray-50',
            'focus:ring-blue-500',
            'focus:border-blue-500',
            'dark:bg-gray-700',
            'dark:border-gray-600',
            'dark:placeholder-gray-400',
            'dark:text-white',
            'dark:focus:ring-blue-500',
            'dark:focus:border-blue-500',
          )}
          placeholder='Search Mockups, Logos...'
          required
        />
        <Button type='submit'>Search</Button>
      </div>
    </form>
  );
}
