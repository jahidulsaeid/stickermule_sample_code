'use client';
import { useGetOrderQuery } from '@/redux/features/orders/orderApi';
import Container from '../ui/container';
import Divider from '../ui/divider';
import Spinner from '../ui/loaders/spinner/spinner';
import { useSearchParams } from 'next/navigation';
import OrderView from './order-view';
import ErrorInformation from '@/app/not-found';

export default function NewOrder() {
  // const {id} = useParams();
  const params = useSearchParams();
  const id = params.get('id');

  const { data, isLoading } = useGetOrderQuery(id);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner showText={false} />
      </div>
    );
  }
  if (!id) return <ErrorInformation />;
  return (
    <>
      <Divider />
      <Container>
        <OrderView order={data} />
      </Container>
    </>
  );
}
