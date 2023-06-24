import { formatPrice } from '@/utils/use-price';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ProductAttributes } from './product-attributes';
import Counter from '../common/counter';
import Button from '../ui/button';
// import { generateCartItem } from '@/utils/generate-cart-item';
import { isEmpty, isEqual, isMatch } from 'lodash';
import { getVariations } from '@/utils/get-variations';
import Spinner from '../ui/loaders/spinner/spinner';
import { useGetProductQuery } from '@/redux/features/products/productApi';
import {
  addItemToCart,
  closeProductModal,
} from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
// import VariationPrice from './product-variant-price';
import FavoriteButton from './favorite-button';
import { ROUTES } from '@/utils/routes';

export default function ProductPopup({ productSlug }: { productSlug: string }) {
  const { cartItems } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { data: product, isLoading } = useGetProductQuery(productSlug);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});

  const sale_price = formatPrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
  });

  const price = formatPrice({
    amount: product?.price!,
  });

  const variations = getVariations(product?.variations!);
  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;

  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o?.options?.map((v: any) => v?.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }

  console.log("🚀 ~ file: product-popup.tsx:48 ~ ProductPopup ~ selectedVariation:", selectedVariation)


  function addToCart() {
    if (!isSelected) return;

    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (itemIndex >= 0) {
      toast.warn('Item already in cart');
    } else {
      dispatch(
        addItemToCart({ product, quantity, attributes, selectedVariation })
      );
      toast('Add to cart');
    }
  }

  function navigateToProductPage() {
    dispatch(closeProductModal());
    router.push(`${ROUTES.PRODUCT}?slug=${productSlug}`);
  }

  function handleAttribute(attribute: any) {
    // Reset Quantity
    if (!isMatch(attributes, attribute)) {
      setQuantity(1);
    }

    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  function navigateToCartPage() {
    // closeModal();
    setTimeout(() => {
      //   openCart();
    }, 300);
  }

  if (isLoading) {
    return (
      <div className="w-96 flex justify-center items-center h-96 bg-white relative overflow-hidden">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-[#D4D4D4]">
          <Image
            width={430}
            height={430}
            src={
              product?.image?.original ??
              '/assets/placeholder/products/product-thumbnail.svg'
            }
            alt={product?.name}
            // className="lg:w-full lg:h-full"
          />
        </div>

        <div className="flex flex-col p-5 md:p-8 w-full">
          <div className="pb-5">
            <div className="mb-2 md:mb-2.5 -mt-1.5 flex justify-between">
              <h2
                className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black"
                onClick={navigateToProductPage}
                role="button"
              >
                {product?.name}
              </h2>
              <FavoriteButton
                productId={product?.id}
                in_wishlist={product?.in_wishlist}
              />
            </div>

            {product?.unit && isEmpty(variations) && (
              <span className="text-sm font-normal text-body mt-2 md:mt-3 block">
                {product?.unit}
              </span>
            )}

            <p className="text-sm leading-6 md:text-body md:leading-7">
              {product?.description}
            </p>

            <div className="flex items-center mt-3">
              {!isEmpty(variations) ? (
                // <VariationPrice
                //   selectedVariation={selectedVariation}
                //   minPrice={product.min_price}
                //   maxPrice={product.max_price}
                // />
                <>
                  <span className="inline-block text-heading font-semibold text-base md:text-xl lg:text-2xl">
                    {formatPrice({ amount: Number(product.min_price) })}
                  </span>

                  <del className="sm:text-base font-normal pl-1 font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                    {formatPrice({ amount: Number(product.max_price) })}
                  </del>
                </>
              ) : (
                <>
                  {product.sale_price ? (
                    <>
                      <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                        {sale_price}
                      </div>
                      <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                        {price}
                      </del>
                    </>
                  ) : (
                    <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                      {price}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })}

          <div className="pt-2 md:pt-4">
            <div className="flex items-center justify-between mb-4 space-s-3 sm:space-s-4 gap-8">
              {isEmpty(variations) && (
                <>
                  {Number(product?.quantity) > 0 ? (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={Number(product?.quantity) === quantity}
                    />
                  ) : (
                    <div className="text-base text-red-500 whitespace-nowrap lg:ms-7">
                      Out of Stock
                    </div>
                  )}
                </>
              )}

              {!isEmpty(selectedVariation) && (
                <>
                  {Number(selectedVariation?.is_disable) ||
                  selectedVariation.quantity === 0 ? (
                    <div className="text-base text-red-500 whitespace-nowrap lg:ms-7">
                      Out of Stock
                    </div>
                  ) : (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={
                        Number(selectedVariation.quantity) === quantity
                      }
                    />
                  )}
                </>
              )}

              <Button
                onClick={addToCart}
                variant="slim"
                className={`w-full lg:w-6/12 xl:w-full ${
                  !isSelected && 'bg-gray-400 hover:bg-gray-400'
                }`}
                disabled={
                  !isSelected ||
                  !product?.quantity ||
                  (!isEmpty(selectedVariation) && !selectedVariation?.quantity)
                }
                // loading={addToCartLoader}
              >
                <span className="py-2 3xl:px-8">
                  {product?.quantity ||
                  (!isEmpty(selectedVariation) && selectedVariation?.quantity)
                    ? 'Add to Cart'
                    : 'Out of Stock'}
                </span>
              </Button>
            </div>

            {/* {viewCartBtn && (
              <button
                onClick={navigateToCartPage}
                className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50 text-sm xl:text-base"
              >
                View Cart
              </button>
            )} */}

            <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
