import { useMemo } from "react";
// import { useRouter } from "next/navigation";

export function formatPrice({
  amount,
  currencyCode="BDT",
  locale="en"
}: {
  amount: number;
  currencyCode?: string;
  locale?: string;
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  });

  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale="BDT",
}: {
  baseAmount: number;
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, { style: "percent" });
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}

export default function usePrice(
  data?: {
    amount: number;
    baseAmount?: number;
    currencyCode?: string;
  } | null
) {

  const { amount, baseAmount, currencyCode = "BDT" } = data ?? {};
  const value = useMemo(() => {
    if (typeof amount !== "number" || !currencyCode) return "";
    const currentLocale = "bn-BD";
    return baseAmount
      ? formatVariantPrice({
          amount,
          baseAmount,
          currencyCode,
          locale: currentLocale,
        })
      : formatPrice({ amount, currencyCode, locale: currentLocale });
  }, [amount, baseAmount, currencyCode]);
  return typeof value === "string"
    ? { price: value, basePrice: null, discount: null }
    : value;
}

export const getPercentage = (amount: number, baseAmount: number) => {
  const discount = (baseAmount - amount) / baseAmount;
  return Math.round(discount * 100);
}