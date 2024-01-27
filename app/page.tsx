'use client'

import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { apiService } from '@/src/utils/api-service';
 
import { useSearchParams } from 'next/navigation'

export default async function HomePage() {
  const searchParams = useSearchParams();

  const token =
    typeof searchParams?.get('token') || undefined;

  const wheelSections = (await apiService.getRoulettePrizes()) || [];

  return (
    <WheelProvider {...{ token, wheelSections }}>
      <Home />;
    </WheelProvider>
  );
}
