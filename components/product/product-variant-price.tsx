// import usePrice from "@lib/use-price";
import usePrice, { formatPrice } from "@/utils/use-price";
import isEmpty from "lodash/isEmpty";
import React from "react";

type Props = {
  minPrice: number;
  maxPrice: number;
  selectedVariation?: any;
  basePriceClassName?: string;
  discountPriceClassName?: string;
};

const VariationPrice: React.FC<Props> = ({
  selectedVariation,
  minPrice,
  maxPrice,
  basePriceClassName = "text-heading font-semibold text-base md:text-xl lg:text-2xl",
  discountPriceClassName = "font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0",
}: any) => {
  // const { price, basePrice } = usePrice(
  //   selectedVariation && {
  //     amount: selectedVariation.sale_price
  //       ? Number(selectedVariation.sale_price)
  //       : Number(selectedVariation.price),
  //     baseAmount: Number(selectedVariation.price),
  //   }
  // );

  // const { price: min_price } = usePrice({
  //   amount: minPrice,
  // });

  // const { price: max_price } = usePrice({
  //   amount: maxPrice,
  // });
  const min_price = formatPrice({amount: minPrice});
  const max_price = formatPrice({amount: maxPrice});
  return (
    <>
      {/* <div className={basePriceClassName}>
        {!isEmpty(selectedVariation)
          ? `${price}`
          : `${min_price} - ${max_price}`}
      </div>

      {basePrice && <del className={discountPriceClassName}>{basePrice}</del>} */}

{isEmpty(selectedVariation) ? 
      min_price === max_price ? 
        <div className={basePriceClassName}>
          {min_price}
        </div>
        :
        <div className={basePriceClassName}>
          {min_price} - {max_price}
        </div>
      :
      selectedVariation.sale_price ? 
        <div className={basePriceClassName}>
          {formatPrice({amount: selectedVariation.sale_price})}
        </div>
        :
        <div className={basePriceClassName}>
          {formatPrice({amount: selectedVariation.price})}
        </div>
      }

    </>
  );
};

export default VariationPrice;
