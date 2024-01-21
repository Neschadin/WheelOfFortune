'use client';

import { useState } from 'react';

import { WheelOfFortune } from '@/src/components/wheel-of-fortune';

export default function Home() {
  // const [spinning, setSpinning] = useState(false);
  // const [result, setResult] = useState('');

  // const startStopSpinning = (state: boolean) => {
  //   setSpinning(state);
  // };

  // const showResult = (str: string) => {
  //   setResult(str);
  //   console.log('Wheel result >>> ', str); // TODO:
  // };

  return (
    <main className='flex h-full max-w-screen-2xl justify-around items-center m-auto'>
      <div className='h-96 w-96 border'></div>
      <WheelOfFortune />
    </main>
  );
}
