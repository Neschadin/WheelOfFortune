import { Suspense } from 'react';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { Home } from '@/src/pages-content/home/home';

export default function HomePage() {
  return (
    <Suspense>
      <WheelProvider>
        <Home />
      </WheelProvider>
    </Suspense>
  );
}
