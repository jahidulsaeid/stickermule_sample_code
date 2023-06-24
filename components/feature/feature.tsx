import TextInformation from "../common/text-information";

interface Props {
  className?: string;
}

export const featureData = [
    {
      id: 1,
      icon: "/assets/images/feature/delivery.svg",
      title: "Fast Delivery",
      description: "We deliver your products at your doorstep as fast as possible.",
      link: "/",
    },
    {
      id: 2,
      icon: "/assets/images/feature/location.svg",
      title: "Store Locator",
      description: "Find a store near you easily with our store locator.",
      link: "/store-location",
    },
    {
      id: 3,
      icon: "/assets/images/feature/exchange.svg",
      title: "Exchange within 14 days of arrival",
      description: "We offer free exchange within 14 days of arrival.",
      link: "/",
    },
  ];
  
const FeatureSection: React.FC<Props> = ({
  className = "py-10",
}) => {
  return (
    <div
      className={`bg-gray-200 feature-block-wrapper border border-gray-300 rounded-md  grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-12 xl:gap-0 overflow-hidden sm:px-4 xl:px-0 mx-auto container ${className}`}
    >
      {featureData?.map((item) => (
        <TextInformation item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeatureSection;
