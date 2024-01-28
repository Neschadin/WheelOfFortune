'use client'

import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { apiService } from '@/src/utils/api-service';
 
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function HomePage() {
  const searchParams = useSearchParams();
  const [wheelSections, setWheelSections] = useState([]);

  useEffect(() => {
    apiService
      .getRoulettePrizes()
      .then((res: any) => setWheelSections(res));
  }, []);

  if(!wheelSections) return <div>Loading...</div>;

  return (
    <WheelProvider {...{ token: searchParams?.get('token') || '', wheelSections }}>
      <Home />;
    </WheelProvider>
  );
}
