"use client";
import ContactForm from "@/components/contactus/form";
import ContactInfo from "@/components/contactus/info";

const ContactUsPage = () => {
  return (
    <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
      <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
        <ContactInfo />
      </div>
      <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7">
        <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
          <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
          Get in touch
          </h4>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
