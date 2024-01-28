'use client'

import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { apiService } from '@/src/utils/api-service';
 
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function HomePage() {
  const searchParams = useSearchParams();

  const [token, setToken] = useState('');
  const [wheelSections, setWheelSections] = useState([]);

  useEffect(() => {
    setToken(searchParams?.get('token') || '');
  }, [searchParams]);

  useEffect(() => {
    apiService
      .getRoulettePrizes()
      .then((res: any) => setWheelSections(res));
  }, []);

  return (
    <WheelProvider {...{ token, wheelSections }}>
      <Home />;
    </WheelProvider>
  );
}
