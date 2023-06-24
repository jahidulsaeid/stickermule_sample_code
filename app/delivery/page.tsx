import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto p-20">
      <h4 className="text-2xl 2xl:text-3xl font-bold text-heading mb-10 text-center">
        Delivery Policy
      </h4>
      <ul className="flex gap-10 flex-col list-disc">
        <li>All shipments will be delivered through our Shipping Partner.</li>
        <li>
          Customers will receive an email confirmation and invoice on their
          given email once their order is processed.
        </li>
        <li>
          We take up to 2 working days to process your order and 8-10 working
          days for delivery, depending on the accuracy of the information
          provided & location.
        </li>
        <li>
          During sale periods or promotions, order processing may take longer.
        </li>
        <li>Delivery time may exceed depending on weather conditions.</li>
        <li>
          If an order is placed on the weekend or a holiday, the order will be
          processed on the following working day.
        </li>
        <li>
          In case of an exchange, the customer will bear the re-shipping cost.
        </li>
      </ul>
    </div>
  );
}
