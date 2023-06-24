import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import ListMenu from '../ui/list-menu';
import MegaMenu from '../ui/mega-menu';

interface MenuProps {
  data: any;
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
  return (
    <nav className={classNames(`headerMenu flex w-full relative justify-center`, className)}>
      {data?.map((item: any) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${
            item.subMenu ? 'relative' : ''
          }`}
          key={item.id}
        >
          <Link
            href={item.path}
            className="inline-flex items-center text-heading px-3 xl:px-4 py-2 relative group-hover:text-black uppercase font-medium text-xs xl:text-sm"
          >
            {item.name}
            {(item?.columns || item.subMenu) && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>

          {item?.columns?.data && Array.isArray(item.columns?.data) && (
            <MegaMenu columns={item.columns.data} cover={item.columns.cover} />
          )}

          {item?.subMenu && Array.isArray(item.subMenu) && (
            <div className="subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 group-hover:opacity-100 z-[999]">
              <ul className="text-body text-sm py-5">
                {item.subMenu.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
      
    </nav>
  );
};

export default HeaderMenu;
