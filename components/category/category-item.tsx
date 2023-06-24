import Image from 'next/image';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import Text from '../ui/text';

interface Props {
  item: any;
  variant?: 'rounded' | 'circle';
  size?: 'small' | 'medium';
  effectActive?: boolean;
  href: LinkProps['href'];
}

const CategoryItem: React.FC<Props> = ({
  item,
  variant = 'circle',
  size = 'small',
  effectActive = false,
  href,
}) => {
  const { name } = item ?? {};
  const imageSize: any =
    (size === 'small' && 180) || (size === 'medium' && 370);

  const placeholderImage = `/assets/images/placeholder/card-${size}.svg`;

  return (
    <Link
      href={href}
      className="group flex justify-center text-center flex-col"
    >
      <div
        className={`relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto ${
          variant === 'rounded' ? 'rounded-md' : 'rounded-full'
        }`}
      >
        <div className="flex">
          <Image
            src={item.image ? item.image : placeholderImage}
            alt={name || 'demo'}
            width={imageSize}
            height={imageSize}
            quality={100}
            className={`object-cover ${
              variant === 'rounded' ? 'rounded-md' : 'rounded-full'
            }`}
          />

          <div className="overlay"/>

          <style jsx>{`
            .image-container {
              position: relative;
              display: inline-block;
            }

            /* .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            } */
          `}</style>
        </div>
        {effectActive === true && (
          <>
            <div
              className={`absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50 ${
                variant === 'rounded' ? 'rounded-md' : 'rounded-full'
              }`}
            />
            <div className="absolute top left h-full w-full flex items-center justify-center flex-col">
              <p className="category-name text-white">{name}</p>
              <p className="shop-now text-white">Show Now</p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default CategoryItem;
