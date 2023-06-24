import React from "react";
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | any;
}
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, ...rest }, ref) => {
    // const { t } = useTranslation();
    return (
      <label className="group flex items-center text-heading text-sm cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-black"
          ref={ref}
          {...rest}
        />
        <span className="ms-4 -mt-0.5">{label}</span>
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";
