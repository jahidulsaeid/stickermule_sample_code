import { openProductModal } from '@/redux/features/products/productSlice';
import { useAppDispatch } from '@/redux/hook';
import cn from 'classnames';
import Image from 'next/image';
import { useState, type FC } from 'react';
import FavoriteButton from './favorite-button';
import { formatPrice, getPercentage } from '@/utils/use-price';
import Button from '../ui/button';

// import discountImg from '@/assets/images/discount.svg';

interface ProductProps {
  product: any;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?: 'grid' | 'gridSlim' | 'list' | 'listSmall';
  imgWidth?: number;
  imgHeight?: number;
  imgLoading?: 'eager' | 'lazy';
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = '',
  contactClassName = '',
  imageContentClassName = '',
  variant = 'gridSlim',
  imgWidth = 324,
  imgHeight = 440,
  imgLoading,
}) => {
  const dispatch = useAppDispatch();
  // const { openModal, setModalView, setModalData } = useUI();
  const {
    name,
    image,
    min_price,
    max_price,
    product_type,
    description,
    slug,
    price,
    sale_price,
    in_wishlist,
  } = product ?? {};
  console.log('🚀 ~ file: product-card.tsx:47 ~ product:', product);

  return (
    <div
      className={cn(
        'group box-border overflow-hidden flex rounded-md cursor-pointer',
        {
          // 'pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product border border-gray-100':
          'pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform border border-gray-100':
            variant === 'grid',
          'pe-0 md:pb-1 flex-col items-start bg-white': variant === 'gridSlim',
          'items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct':
            variant === 'listSmall',
          'flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4':
            variant === 'list',
        },
        className
      )}
      // onClick={() => dispatch(openProductModal(slug))}
      role="button"
      title={name}
    >
      <div
        className={cn(
          'flex',
          {
            'mb-3 md:mb-3.5': variant === 'grid',
            'mb-3 md:mb-3.5 pb-0': variant === 'gridSlim',
            'flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44':
              variant === 'listSmall',
          },
          imageContentClassName
        )}
      >
        <Image
          src={image?.original}
          width={imgWidth}
          height={imgHeight}
          loading={imgLoading}
          quality={100}
          alt={name || 'CIS'}
          className={cn('bg-gray-300 object-cover rounded-s-md h-[320px]', {
            'w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none':
              variant === 'grid',
            'rounded-md transition duration-150 ease-linear transform group-hover:scale-105':
              variant === 'gridSlim',
            'rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105':
              variant === 'list',
          })}
          onClick={() => dispatch(openProductModal(slug))}
        />
        <FavoriteButton
          productId={product.id}
          in_wishlist={in_wishlist}
          className="absolute top-1 right-1 z-20"
        />
        {sale_price && (
          // <span className="absolute top-2.5 left-2.5 text-white text-xs px-1.5 py-0.5 rounded-md bg-red-700 ">
          //   {getPercentage(sale_price, price)}% OFF
          // </span>
          <div
            className="absolute top-2.5 left-0"
            style={{
              backgroundImage: `url("/assets/images/discount.svg")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            {/* 10px 12px 10px 5px */}
            <p className="text-white text-xs font-bold pt-[10px] pr-[12px] pb-[10px] pl-[5px]">
              {getPercentage(sale_price, price)}% OFF
            </p>
          </div>
        )}

        <Button
          className={cn(
            'opacity-0 absolute bottom-[62px] md:bottom-[72px] lg:bottom-[80px] w-full rounded-none group-hover:opacity-100 py-3 bg-transparent border-black border-t-2 border-opacity-10 text-sm font-semibold text-center text-black transition duration-200 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-product group-hover:bg-black group-hover:text-white'
          )}
          onClick={() => dispatch(openProductModal(slug))}
        >
          Add to Cart
        </Button>
      </div>
      <div
        className={cn(
          'w-full overflow-hidden',
          {
            'ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4': variant === 'grid',
            'ps-0': variant === 'gridSlim',
            'px-4 lg:px-5 2xl:px-4': variant === 'listSmall',
          },
          contactClassName
        )}
        onClick={() => dispatch(openProductModal(slug))}
      >
        <h2
          className={cn('!text-[#7a7a7a] font-semibold truncate mb-1 text-sm', {
            'text-sm md:text-base': variant === 'grid',
            'md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg':
              variant === 'gridSlim',
            'text-sm sm:text-base md:mb-1.5 pb-0': variant === 'listSmall',
            'text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5':
              variant === 'list',
          })}
        >
          {name}
        </h2>
        {/* {description && (
          <p className="text-body text-xs md:text-[13px] lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            {description}
          </p>
        )} */}
        <div
          className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-1 ${
            variant === 'grid'
              ? '3xl:text-lg lg:mt-2.5'
              : 'sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3'
          }`}
        >
          {product_type?.toLocaleLowerCase() === 'variable' ? (
            <>
              {/* <span className="inline-block">{Number(min_price)}</span>
              <span> - </span>
              <span className="inline-block">{Number(max_price)}</span> */}
              <span className="inline-block">
                {formatPrice({ amount: Number(min_price) })}
              </span>

              <del className="sm:text-base font-normal text-gray-800 pl-1">
                {formatPrice({ amount: Number(max_price) })}
              </del>
            </>
          ) : (
            <>
              {sale_price ? (
                <>
                  <span className="inline-block">
                    {formatPrice({ amount: Number(sale_price) })}
                  </span>

                  <del className="sm:text-base font-normal text-gray-800 pl-1">
                    {formatPrice({ amount: Number(price) })}
                  </del>
                </>
              ) : (
                <span className="inline-block">
                  {formatPrice({ amount: Number(price) })}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
