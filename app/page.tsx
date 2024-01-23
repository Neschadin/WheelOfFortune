import { Home } from '@/src/pages-content/home/home';

type TProps = { [key: string]: string | string[] | undefined };

export default function HomePage({ searchParams }: { searchParams: TProps }) {
  const authToken =
    typeof searchParams?.token === 'string' ? searchParams.token : undefined;

  return <Home authToken={authToken} />;
}
