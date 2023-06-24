import { CloseIcon } from "@/assets/icons/close-icon";
import { PencilIcon } from "@/assets/icons/pencil-icon";
import { formatAddress } from "@/utils/format-address";
import classNames from "classnames";


interface AddressProps {
  address: any;
  checked: boolean;
  userId: string;
}

const AddressCard: React.FC<AddressProps> = ({ checked, address, userId }) => {
  function onEdit() {
    // setModalData({
    //   customerId: userId,
    //   type: AddressType.Billing,
    //   address: address,
    // });
    // setModalView("ADDRESS_FORM_VIEW");
    // return openModal();
  }

  function onDelete() {
    // setModalData({
    //   customerId: userId,
    //   type: AddressType.Billing,
    //   address: address,
    // });
    // setModalView("ADDRESS_DELETE_VIEW");
    // return openModal();
  }

  return (
    <div
      className={classNames(
        "relative p-4 lg:p-5 xl:p-6 h-full rounded border cursor-pointer group hover:border-accent",
        {
          "border-2 border-heading": checked,
          "bg-gray-200 border-gray-100": !checked,
        }
      )}
    >
      <p className="text-base text-heading font-semibold mb-2 md:mb-3 capitalize">
        {address.title}
      </p>
      <p className="text-sm text-body leading-6">
        {formatAddress(address.address)}
      </p>
      <div className="absolute top-4 end-4 flex space-s-2 opacity-0 group-hover:opacity-100 gap-2">
        {onEdit && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-heading hover:bg-gray-600 text-white"
            onClick={onEdit}
          >
            <span className="sr-only">Edit</span>
            <PencilIcon className="w-3 h-3" />
          </button>
        )}
        {onDelete && (
          <button
            className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F34459] text-white"
            onClick={onDelete}
          >
            <span className="sr-only">Delete</span>
            <CloseIcon className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
