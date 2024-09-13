'use client';

import { useEffect, useState } from 'react';
import { default as TextTransition, presets } from 'react-text-transition';

type Props = {
  readonly texts: string[];
};

export function TransitionalText({ texts }: Props): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => currentIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.wobbly}>
      {texts[index % texts.length]}
    </TextTransition>
  );
}
