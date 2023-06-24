'use client';

import { useCategoryProductsQuery } from '@/redux/features/products/productApi';
import { useSearchParams } from 'next/navigation';
import ProductLoader from '@/components/product/product-loader';
import ProductCard from '@/components/product/product-card';
import ErrorInformation from '../not-found';

export default function Shop() {
  const params = useSearchParams();
  const query = params.get('category');

  const { data, isLoading } = useCategoryProductsQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  if (!query) {
    return <ErrorInformation />;
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 xl:gap-7 container py-10">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <ProductLoader key={`product-loader-${idx}`} />
          ))}
      </div>
    );
  }

  if (!data?.data?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl font-bold text-heading mb-3">
          No products found
        </h1>
        <p className="text-sm text-body text-center">
          Try adjusting your search or filter to find what you’re looking for.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-7 container pt-10">
        <h1 className="text-2xl font-bold text-heading hidden lg:inline-flex pb-1 uppercase">
          {query?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </h1>
        <div className="flex items-center justify-end">
          <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4">
            {data?.data.length} items
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 xl:gap-7 container mx-auto pt-5 pb-20">
        {data?.data?.map((product: any) => (
          <ProductCard
            key={`product--key${product.id}`}
            product={product}
            variant="grid"
            imgHeight={350}
            imgWidth={550}
            imageContentClassName="w-full"
          />
        ))}
      </div>
    </>
  );
}
