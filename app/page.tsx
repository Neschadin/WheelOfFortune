import { Home } from '@/src/pages-content/home/home';
import { WheelProvider } from '@/src/providers/wheel-provider';

type TProps = { [key: string]: string | string[] | undefined };

export default function HomePage({ searchParams }: { searchParams: TProps }) {
  const token =
    typeof searchParams?.token === 'string' ? searchParams.token : undefined;

  return (
    <WheelProvider token={token}>
      <Home />;
    </WheelProvider>
  );
}
