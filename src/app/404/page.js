import Preloader from '@/components/Preloader';
import NotFound from '../not-found';
import Header from '@/components/Header/Header';

export default function NotFoundPage({ hideNewsletter }) {
  return (
    <>
      <Preloader />
      <Header />
      <NotFound />
    </>
  );
}
