import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense>
      <WheelProvider>
        <Home />
      </WheelProvider>
    </Suspense>
  );
}
