'use client';
import { Address } from '@/types';
import { RadioGroup } from '@headlessui/react';
import { AddressHeader } from './address-header';
import AddressCard from './address-card';
import { openAddressModal } from '@/redux/features/account/accountSlice';
import { useAppDispatch } from '@/redux/hook';

interface AddressesProps {
  addresses: Address[] | undefined;
  label: string;
  className?: string;
  count: number;
  userId: string;
}

const AddressGrid: React.FC<AddressesProps> = ({
  label,
  addresses,
  // atom,
  className,
  userId,
  count,
}) => {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (addresses?.length) {
  //     if (selectedAddress?.id) {
  //       const index = addresses.findIndex((a) => a.id === selectedAddress.id);
  //       setAddress(addresses[index]);
  //     } else {
  //       setAddress(addresses?.[0]);
  //     }
  //   }else {
  //     // @ts-ignore
  //     setAddress(null);
  //   }
  // }, [addresses, addresses?.length, selectedAddress?.id, setAddress]);

  //TODO: no address found
  function onAdd() {
    dispatch(openAddressModal());
  }

  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={count} label={label} />

      {addresses && addresses?.length ? (
        <RadioGroup value={'selectedAddress'} onChange={() => {}}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {addresses?.map((address: any) => (
              <RadioGroup.Option
                value={address}
                key={address.id}
                className="focus-visible:outline-none"
              >
                {({ checked }) => (
                  <AddressCard
                    checked={checked}
                    address={address}
                    userId={userId}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <span className="text-sm relative p-4 lg:p-5 xl:p-6 text-heading font-semibold text-center bg-gray-200 border-gray-100 rounded border border-border-200">
            No address found
          </span>
        </div>
      )}
    </div>
  );
};
export default AddressGrid;
