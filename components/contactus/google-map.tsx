import Image from 'next/image';

const GoogleMap: React.FC = () => {
  //   const lat = 23.709921;
  //   const lng = 90.407143;

  //   const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY!;

  //   const mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&markers=color:red|${lat},${lng}&zoom=12&size=400x200&key=${GOOGLE_MAP_API_KEY}`;

  //   return GOOGLE_MAP_API_KEY ? (
  //     <Image width={360} height={185} src={mapSrc} alt="Location" blurDataURL={mapSrc} />
  //   ) : (
  //     <p className="text-red-500">
  //         Please add google map api key in .env.local file
  //     </p>
  //   );

  //Demo
  return (
    <Image
      width={360}
      height={185}
      src="https://chawkbazar.vercel.app/assets/images/map-image.jpg"
      alt="location"
    />
  );
};

export default GoogleMap;
