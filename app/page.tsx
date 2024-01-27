import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';
import { apiService } from '@/src/utils/api-service';

type TProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function HomePage({ searchParams }: TProps) {
  const token =
    typeof searchParams?.token === 'string' ? searchParams.token : undefined;

  const wheelSections = (await apiService.getRoulettePrizes()) || [];

  return (
    <WheelProvider {...{ token, wheelSections }}>
      <Home />;
    </WheelProvider>
  );
}
