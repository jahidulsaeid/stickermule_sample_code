import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { Label } from "@headlessui/react/dist/components/label/label";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import Button from "../ui/button";
import { AddressType } from "@/utils/constants";

type FormValues = {
  __typename?: string;
  title: string;
  // type: AddressType;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

const addressSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf([AddressType.Billing, AddressType.Shipping])
    .required("Type is required"),
  title: yup.string().required("Title is required"),
  address: yup.object().shape({
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup.string().required("Zip is required"),
    street_address: yup.string().required("Street address is required"),
  }),
});

const AddressForm: React.FC<any> = ({ data }) => {
  // const { t } = useTranslation("common");
  // const { address, type, customerId } = data;
  // const { mutate: updateProfile } = useUpdateCustomerMutation();
  // const { closeModal } = useUI();

  function onSubmit(values: FormValues) {
    // const formattedInput = {
    //   id: address?.id,
    //   customer_id: customerId,
    //   title: values.title,
    //   type: values.type,
    //   address: {
    //     ...(address?.id && { id: address.id }),
    //     ...values.address,
    //   },
    // };

    // updateProfile({
    //   id: customerId,
    //   address: [formattedInput],
    // });

    // closeModal();
  }

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addressSchema),
    shouldUnregister: true,
    // defaultValues: {
    //   title: address?.title ?? "",
    //   type: address?.type ?? type,
    //   ...(address?.address && address),
    // },
  });

  return (
    <div className="p-5 sm:p-8 md:rounded-xl min-h-screen md:min-h-0 bg-white">
      <h1 className="text-heading font-semibold text-lg text-center mb-4 sm:mb-6">
        {/* {address ? t("text-update-address") : t("text-add-new-address")} */}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-5 h-full"
      >
        {/* <div>
          <Label>{t("text-type")}</Label>
          <div className="space-s-4 flex items-center">
            <Radio
              id="billing"
              {...register("type")}
              type="radio"
              value={AddressType.Billing}
              label={t("text-billing")}
            />
            <Radio
              id="shipping"
              {...register("type")}
              type="radio"
              value={AddressType.Shipping}
              label={t("text-shipping")}
            />
          </div>
        </div> */}

        {/* <Input
          label={t("text-title")}
          {...register("title")}
          error={t(errors.title?.message!)}
          variant="outline"
          className="col-span-2"
        /> */}

        <Input
          label="Country"
          value="Bangladesh"
          {...register("address.country")}
          error={errors.address?.country?.message!}
          variant="outline"
          disabled
        />

        <Input
          label="City"
          {...register("address.city")}
          error={errors.address?.city?.message!}
          variant="outline"
        />

        <Input
          label="State"
          {...register("address.state")}
          error={errors.address?.state?.message!}
          variant="outline"
        />

        <Input
          label="Zip Code"
          {...register("address.zip")}
          error={errors.address?.zip?.message!}
          variant="outline"
        />

        <TextArea
          label="Address"
          {...register("address.street_address")}
          error={errors.address?.street_address?.message!}
          variant="outline"
          className="col-span-2"
        />

        <Button className="w-full col-span-2">
          {data ? "Update" : "Save"} Address
        </Button>
      </form>
    </div>
  );
};

export default AddressForm;
