// import { Drawer } from "@components/common/drawer/drawer";
// import FilterIcon from "@components/icons/filter-icon";
// import Text from "@components/ui/text";
// import { useUI } from "@contexts/ui.context";
// import FilterSidebar from "@components/shop/filter-sidebar";
// import ListBox from "@components/ui/list-box";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";
// import { getDirection } from "@utils/get-direction";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import React from "react";
import Text from "../ui/text";
import FilterIcon from "@/assets/icons/filter-icon";
import Drawer from "rc-drawer";
import FilterSidebar from "./filter-sidebar";
import ListBox from "../ui/list-box";

type Props = {
  searchResultCount: number;
};

const SearchTopBar: React.FC<Props> = ({ searchResultCount }) => {
  const { query } = useRouter();
  // const { openFilter, displayFilter, closeFilter } = useUI();
  // const { t } = useTranslation("common");
  const { locale } = useRouter();
  // const dir = getDirection(locale);
  const contentWrapperCSS = { left: 0 };

  return (
    <div className="flex justify-between items-center mb-7">
      <Text variant="pageHeading" className="hidden lg:inline-flex pb-1">
        {isEmpty(query) ? "Shop" : "Search"}
      </Text>
      <button
        className="lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200"
        // onClick={openFilter}
      >
        <FilterIcon />
        <span className="ps-2.5">Filters</span>
      </button>
      <div className="flex items-center justify-end">
        <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4 pe-4 md:me-6 ps-2 hidden lg:block">
          {searchResultCount ?? 0} Items
        </div>
        <ListBox
          options={[
            { name: "text-sorting-options", value: "options" },
            { name: "text-oldest", value: "created_at|ASC" },
            { name: "text-popularity", value: "orders_count|DESC" },
            { name: "text-price-low-high", value: "min_price|ASC" },
            { name: "text-price-high-low", value: "max_price|DESC" },
          ]}
        />
      </div>
      <Drawer
        placement="left"
        open={true}
        // onClose={closeFilter}
        // handler={false}
        // showMask={true}
        // level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <FilterSidebar searchResultCount={searchResultCount ?? 0} />
      </Drawer>
    </div>
  );
};

export default SearchTopBar;
