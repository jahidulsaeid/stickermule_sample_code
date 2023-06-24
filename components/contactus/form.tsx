
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ContactFormValues } from '@/types/contact';
import Input from '../ui/input';
import TextArea from '../ui/text-area';
import Button from '../ui/button';

const contactFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  description: yup.string().required('Description is required'),
});

const defaultValues = {
  name: '',
  email: '',
  subject: '',
  description: '',
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues,
  });


  async function onSubmit(values: ContactFormValues) {
	toast.error('Message sent successfully');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto flex flex-col justify-center "
      noValidate
    >
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register('name')}
            className="w-full md:w-1/2 "
            error={errors.name?.message}
            variant="solid"
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
            error={errors.email?.message}
            variant="solid"
          />
        </div>
        <Input
          label="Subject"
          {...register('subject')}
          className="relative"
          placeholder="Enter your subject"
          error={errors.subject?.message}
          variant="solid"
        />
        <TextArea
          label="Description"
          {...register('description')}
          className="relative mb-4"
          placeholder="Enter your message"
          error={errors.description?.message}
        />
        <div className="relative">
          <Button
            // loading={isLoading} // TODO: Add loading state
            type="submit"
            className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
