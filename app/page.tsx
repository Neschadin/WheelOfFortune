'use client';

import { useState } from 'react';

import { WheelOfFortune } from '@/src/components/wheel-of-fortune';
import { prices } from '@/src/mockup';

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const startStopSpinning = (state: boolean) => {
    setSpinning(state);
  };

  const showResult = (str: string) => {
    setResult(str);
  };

  return (
    <main className='flex-center flex-col gap-10 min-h-screen'>
      <div className='h-6 w-32 border text-center rounded'>{result}</div>

      <div className='h-80 w-80 shrink-0'>
        <WheelOfFortune
          {...{ prices, startStopSpinning, spinning, showResult }}
        />
      </div>

      <button
        className='h-6 w-32 border text-center rounded'
        onClick={() => startStopSpinning(true)}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Rotate'}
      </button>
    </main>
  );
}
