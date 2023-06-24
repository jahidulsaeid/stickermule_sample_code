import { IoClose } from '@react-icons/all-files/io5/IoClose';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Scrollbar from '../common/scrollbar';
import logo from '@/assets/images/logo.png';

import { menu } from './mobilemenu';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { closeMobileMenu } from '@/redux/features/ui/uiSlice';
import Drawer from 'rc-drawer';

export default function MobileMenu() {
  const dispatch = useAppDispatch();
  const { isMobile } = useAppSelector((state) => state.ui);

  const closeSidebar = () => {
    dispatch(closeMobileMenu());
  };
  return (
    <Drawer open={isMobile} placement="left">
      <div className="flex flex-col w-full h-full">
        <div className="w-full border-b border-gray-100 flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
          <Link href="/" className="logo mr-5">
            <Image src={logo} width={320} height={120} alt="logo" />
          </Link>

          <button
            className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            onClick={closeSidebar}
            aria-label="close"
          >
            <IoClose className="text-black mt-1 md:mt-0.5" />
          </button>
        </div>

        <Scrollbar className="menu-scrollbar flex-grow mb-auto">
          <Sidebar width="100%">
            {menu.map((item: any, index: number) => {
              return (
                <Menu key={index}>
                  {item.submenu && (
                    <SubMenu label={item.name}>
                      {item.submenu.map((subitem: any, subindex: number) => {
                        return (
                          <MenuItem
                            key={subindex}
                            component={<Link href={subitem.path} />}
                          >
                            {subitem.label}
                          </MenuItem>
                        );
                      })}
                    </SubMenu>
                  )}

                  {!item.submenu && (
                    <MenuItem component={<Link href={item.path} />}>
                      {item.name}
                    </MenuItem>
                  )}
                </Menu>
              );
            })}
          </Sidebar>
        </Scrollbar>
      </div>
    </Drawer>
  );
}
