import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import Link from "@components/ui/link";
// import { useTranslation } from "next-i18next";

interface MenuItem {
  id: number | string;
  path: string;
  label: string;
  columnItemItems?: MenuItem[];
}
type MegaMenuProps = {
  columns: {
    id: number | string;
    columnItems: MenuItem[];
  }[];
  cover?: string;
};

const MegaMenu: React.FC<MegaMenuProps> = ({ columns, cover }) => {
  return (
    <div className="megaMenu shadow-header bg-gray-200 absolute -start-20 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
      <div className="flex justify-evenly">
        {columns?.map((column) => (
          <ul
            className="even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
            key={column.id}
          >
            {column?.columnItems?.map((columnItem) => (
              <React.Fragment key={columnItem.id}>
                <li className="mb-1.5">
                  <Link
                    href={columnItem.path}
                    className="block py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300 text-[12px]"
                  >
                    {columnItem.label}
                  </Link>
                </li>
                {columnItem?.columnItemItems?.map((item: any) => (
                  <li
                    key={item.id}
                    className={
                      columnItem?.columnItemItems?.length === item.id
                        ? 'border-b border-gray-300 pb-3.5 mb-3'
                        : ''
                    }
                  >
                    <Link
                      href={item.path}
                      className="text-body text-[12px] py-2 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300 flex gap-3 items-center"
                    >
                     <Image src={item.icon} alt={item.label} width={30} height={30}  className='w-6 h-6'/> {item.label}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        ))}
        <div className='flex items-center'>
          <Image
            src={cover || '/assets/images/mega-menu.png'}
            alt="Mega Menu"
            width={380}
            height={380}
            className="float-right -top-20 -end-20 xl:-end-0 xl:-top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
