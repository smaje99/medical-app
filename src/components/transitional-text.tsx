'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  readonly words: string[];
  readonly intervalDuration?: number;
  readonly className?: string;
};

export function TransitionalText({
  words,
  intervalDuration = 3000,
  className = '',
}: Props): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [intervalDuration, words.length]);

  return (
    <AnimatePresence mode='wait'>
      <motion.span
        key={activeIndex}
        initial={{ y: '4rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-4rem', opacity: 0 }}
        className={cn(
          'inline text-current text-center transition-all duration-500',
          className,
        )}
      >
        {words[activeIndex]}
      </motion.span>
    </AnimatePresence>
  );
}
