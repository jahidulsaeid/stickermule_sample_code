// import Cart from "@components/cart/cart";
// import { useUI } from "@contexts/ui.context";
// import { Drawer } from "@components/common/drawer/drawer";
// import { useRouter } from "next/router";
// import { getDirection } from "@utils/get-direction";

import Cart from '@/components/cart/cart';
import { closeCartDrawer } from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
// import { Drawer } from "./drawer";
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import React from 'react';

const ManagedDrawer = () => {
  const dispatch = useAppDispatch();
  const { cartDrawer } = useAppSelector((state) => state.product);

  return (
    <Drawer
      open={cartDrawer}
      placement="right"
      // onClose={() => console.log("close")}
      onClose={() => dispatch(closeCartDrawer())}
      // handler={false}
      // showMask={true}
      // level={null}
      // contentWrapperStyle={{ right: 0 }}
      width={450}
    >
      <Cart />
    </Drawer>
  );
};

export default ManagedDrawer;
