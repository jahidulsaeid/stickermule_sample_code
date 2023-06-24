import RCPagination, { PaginationProps } from "rc-pagination";
import React from "react";

import "rc-pagination/assets/index.css";
import { ArrowNext } from "@/assets/icons/arrow-next";
import { ArrowPrev } from "@/assets/icons/arrow-prev";

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <RCPagination
      nextIcon={<ArrowNext />}
      prevIcon={<ArrowPrev />}
      {...props}
    />
  );
};

export default Pagination;
