import { SendIcon } from '@/assets/icons/send-icon';
import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const defaultValues = {
  email: '',
};

interface InputType {
  email: '';
}
const subscribeFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
});
export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(subscribeFormSchema),
    // defaultValues,
  });

  const loading = false;
  return (
    <div className="container flex flex-col">
      <h3 className="mt-3 mb-7 text-xl font-semibold text-heading">
        Get Expert Tips In Your Inbox
      </h3>
      <p className="mb-7 text-sm text-heading">
        Subscribe to our newsletter and stay updated.
      </p>
      <div className="flex flex-col">
        <form
        // onSubmit={onSubmit}
        // validationSchema={subscribeFormSchema}
        >
          <>
            <div className="relative w-full rounded border border-gray-200 bg-gray-50 ltr:pr-11 rtl:pl-11">
              <input
                type="email"
                id="email_subscribe"
                // {...register('email')}
                placeholder="Enter your email address"
                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs md:text-[13px] lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white"
              />
              <button className="absolute top-1/2 -mt-2 ltr:right-3 rtl:left-3">
                {loading ? (
                  <span
                    className="flex h-5 w-5 shrink-0 animate-spin rounded-full border-[3px] border-t-[3px] border-gray-300 text-accent ltr:ml-2 rtl:mr-2"
                    style={{
                      borderTopColor: 'currentcolor',
                    }}
                  />
                ) : (
                //   <SendIcon className="text-gray-500 transition-colors hover:text-accent" />
                <button  className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none focus:bg-opacity-80 bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0"><span className="lg:py-0.5">Subscribe</span></button>
                )}
              </button>
            </div>
            {errors.email?.message && (
              <div className="mt-1 text-[13px]">
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </>
        </form>
      </div>
    </div>
  );
}
