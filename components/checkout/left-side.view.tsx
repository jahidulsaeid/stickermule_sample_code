import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '../ui/input';
import TextArea from '../ui/text-area';
import { useGetCustomerQuery } from '@/redux/features/auth/authApi';
import Spinner from '../ui/loaders/spinner/spinner';
import { use, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { formatPrice } from '@/utils/use-price';
import { useNewOrderMutation } from '@/redux/features/orders/orderApi';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils/routes';
import { isEmpty } from 'lodash';
import { setCartItem } from '@/redux/features/products/productSlice';

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  district: string;
  alternative_phone: string;
  note: string;
};

const addressSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.string().required('Address is required'),
  district: yup.string().required('District is required'),
});

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftSideView: React.FC<Props> = ({ setIsLoading }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { cartItems } = useAppSelector((state) => state.product);
  // const sub_total = cartItems?.reduce(
  //   (acc, item) => acc + item.sale_price || item.price  * item.cartQuantity,
  //   0
  // );
  const sub_total = cartItems.reduce((acc, item) => {
    const isVariable = !isEmpty(item.variations);
    if (isVariable) {
      return (
        acc +
        Number(item.max_price || item.min_price) * Number(item.cartQuantity)
      );
    } else {
      return (
        acc + Number(item.sale_price || item.price) * Number(item.cartQuantity)
      );
    }
  }, 0);
  // const subTotal = formatPrice({ amount: sub_total });
  const shipping_charge = 60;
  // const shipping = formatPrice({ amount: shipping_charge });

  // const total = formatPrice({ amount: sub_total + shipping_charge });

  const { data, isLoading } = useGetCustomerQuery();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addressSchema),
    shouldUnregister: true,
    defaultValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
    },
  });

  useEffect(() => {
    if (data) {
      setValue('name', data?.name);
      setValue('email', data?.email);
      setValue('phone', data?.phone);
      setValue('address', data?.address[0]?.address?.street_address);
      setValue('district', data?.address[0]?.address?.city);
    }
  }, [data, setValue]);
  const [mutate, { isLoading: isChekoutLoading, isError }] = useNewOrderMutation();

  useEffect(() => {
    if (isChekoutLoading) {
      setIsLoading(isChekoutLoading);
    }
    if (isError) {
      setIsLoading(false);
    }

  }, [isChekoutLoading, isError, setIsLoading]);

  function onSubmit(values: FormValues) {
    const data = {
      customer_name: values.name,
      customer_note: values.note,
      customer_email: values.email,
      customer_contact: values.phone,
      delivery_fee: shipping_charge,
      products: cartItems.map((item) => ({
        order_quantity: item.cartQuantity,
        product_id: item.id,
        // unit_price: Number(item.sale_price || item.price),
        unit_price: item.product_type === 'variable' ? Number(item.min_price || item.max_price) : Number(item.sale_price || item.price),
        // subtotal: item.sale_price || item.price  * item.cartQuantity,
        subtotal: item.product_type === 'variable' ? Number(item.min_price || item.max_price) * Number(item.cartQuantity) : Number(item.sale_price || item.price) * Number(item.cartQuantity),
        variation_option_id : item.product_type === 'variable' ? item.selectedVariation?.id : undefined,
      })),
      status: 1,
      amount: sub_total,
      sales_tax: 0,
      // coupon_id: 0,
      shop_id: 1,
      paid_total: sub_total + shipping_charge,
      total: sub_total + shipping_charge,
      payment_gateway: 'CASH_ON_DELIVERY',
      billing_address: {
        country: 'Bangladesh',
        state: values.district,
        zip: 0,
        city: values.district,
        street_address: values.address,
      },
      shipping_address: {
        country: 'Bangladesh',
        state: '',
        zip: '',
        city: values.district,
        street_address: values.address,
      },
    };

    mutate(data)
      .unwrap()
      .then((res) => {
        localStorage.removeItem('cartItems');
        dispatch(setCartItem([]));
        router.push(`${ROUTES.ORDER}?id=${res.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (isLoading) return <Spinner />;

  return (
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-5">
        <h1 className="text-heading font-semibold text-lg text-left col-span-2">
          Contact Information
        </h1>
        <Input
          label="Name (নাম)"
          {...register('name')}
          error={errors.name?.message!}
          variant="outline"
          className="col-span-2"
        />

        <Input
          label="Phone (ফোন নম্বর)"
          {...register('phone')}
          error={errors.phone?.message!}
          variant="outline"
          // disabled
        />

        <Input
          label="Email (ই-মেইল)(optional)"
          {...register('email')}
          error={errors.email?.message!}
          variant="outline"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 pt-10">
        <h1 className="text-heading font-semibold text-lg text-left col-span-2">
          Shopping Address
        </h1>
        <TextArea
          label="Address (ঠিকানা)"
          {...register('address')}
          error={errors.address?.message!}
          variant="outline"
          className="col-span-2"
        />
        <Input
          label="Alternate Phone (বিকল্প ফোন নম্বর)"
          {...register('alternative_phone')}
          error={errors?.alternative_phone?.message!}
          variant="outline"
        />

        <Input
          label="District (জেলা)"
          value="Dhaka"
          {...register('district')}
          error={errors?.district?.message!}
          variant="outline"
        />
        <TextArea
          label="Note "
          {...register('note')}
          error={errors.note?.message!}
          variant="outline"
          className="col-span-2"
        />
      </div>
    </form>
  );
};

export default LeftSideView;
