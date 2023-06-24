import { ROUTES } from "@/utils/routes";

export const footer = {
  widgets: [
    {
      id: 3,
      widgetTitle: "Company",
      lists: [
        {
          id: 1,
          title: "About Us",
          path: ROUTES.ABOUT,
        },
        {
          id: 2,
          title: "Contact Us",
          path: ROUTES.CONTACT,
        },
        {
          id: 2,
          title: "FAQs",
          path: ROUTES.FAQ,
        },
      ],
    },
    {
      id: 3,
      widgetTitle: "Legal",
      lists: [
        {
          id: 1,
          title: "Terms & Conditions",
          path: ROUTES.TERMS,
        },
        {
          id: 2,
          title: "Privacy Policy",
          path: ROUTES.PRIVACY,
        },
        {
          id: 3,
          title: "Delivery Policy",
          path: ROUTES.DELIVERY,
        },
        {
          id: 4,
          title: "Exchange Policy",
          path: ROUTES.EXCHANGE,
        },
      ],
    },
  ],
  payment: [
    {
      id: 1,
      path: "/",
      image: "/assets/images/payment/mastercard.svg",
      name: "payment-master-card",
      width: 70,
      height: 36,
    },
    {
      id: 2,
      path: "/",
      image: "/assets/images/payment/visa.svg",
      name: "payment-visa",
      width: 70,
      height: 36,
    },
    {
      id: 3,
      path: "/",
      image: "/assets/images/payment/ae.svg",
      name: "payment-ae",
      width: 70,
      height: 36,
    },
    {
      id: 4,
      path: "/",
      image: "/assets/images/payment/bkash.svg",
      name: "payment-bkash",
      width: 70,
      height: 36,
    },
    {
      id: 5,
      path: "/",
      image: "/assets/images/payment/rocket.svg",
      name: "payment-rocket",
      width: 70,
      height: 36,

    },
    {
      id: 6,
      path: "/",
      image: "/assets/images/payment/nagad.svg",
      name: "payment-nagad",
      width: 70,
      height: 36,
    }
  ],
};