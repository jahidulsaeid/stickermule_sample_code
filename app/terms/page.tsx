import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto p-20">
      <h4 className="text-2xl 2xl:text-3xl font-bold text-heading mb-10 text-center">
        Terms & Conditions
      </h4>

      <ul className="flex gap-10 flex-col list-disc">
        <li>
          Giordano Bangladesh may cancel orders for any reason. Common reasons
          may include damaged items, pricing errors, or out-of-stock.
        </li>
        <li>No Cash refund</li>
        <li>
          For any Exchange of your purchased item, please inbox
          www.facebook.com/giordanoOnlinebd During Office hours (Saturday to
          Thursday between 10:00 AM to 6:00 PM - except Public holidays).
        </li>
        <li>
          Due to Different fabric properties, Washing, Finishing, or other
          factors, the actual measurement of the item may vary from size chart
          up to 1 inch.
        </li>
        <li>
          Contact our customer service by emailing us at info@giordanobd.com or
          +8801313772477.
        </li>
        <li>
          As the display capabilities and graphic properties of computer
          monitors, tablets, and mobile devices may vary, we cannot guarantee
          that the color displayed on your monitor will be completely accurate.
        </li>
        <li>No Exchange on products sold on any Promotions/Discounts.</li>
        <li>No Exchange/Return on Factory Outlet products.</li>
      </ul>
    </div>
  );
}
