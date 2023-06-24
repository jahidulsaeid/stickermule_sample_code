// import { CheckBox } from "@components/ui/checkbox";
import { Category } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../ui/button";
import { useGetCategoriesQuery } from "@/redux/features/categories/categoryApi";
import { CheckBox } from "../ui/checkbox";

export const CategoryFilter = () => {
  const router = useRouter();
  // const { query } = router;
  const query = useSearchParams();
  const pathname = usePathname();
  const {data, isLoading} = useGetCategoriesQuery(5)

  // const selectedCategories = query?.category
  //   ? (query.category as string).split(",")
  //   : [];
  // const [formState, setFormState] = React.useState<string[]>(
  //   selectedCategories
  // );

  // React.useEffect(() => {
  //   setFormState(selectedCategories);
  // }, [query?.category]);

  // function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
  //   const { value } = e.currentTarget;
  //   let currentFormState = formState.includes(value)
  //     ? formState.filter((i) => i !== value)
  //     : [...formState, value];
  //   const { category, ...restQuery } = query;
  //   router.push(
  //     {
  //       pathname,
  //       query: {
  //         ...restQuery,
  //         ...(!!currentFormState.length
  //           ? { category: currentFormState.join(",") }
  //           : {}),
  //       },
  //     },
  //     undefined,
  //     { scroll: false }
  //   );
  // }

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        Categories
      </h3>
      <div className="mt-2 flex flex-col space-y-4">
        {!isLoading &&
          // data?.pages?.map((page: any) => {
          data.map((category: Category) => (
              <CheckBox
                key={category.id}
                label={category.name}
                name={category.name.toLowerCase()}
                // checked={formState.includes(category.slug)}
                value={category.slug}
                // onChange={handleItemClick}
              />
            ))
          }

        <div className="w-full">
          {/* {hasNextPage && (
            <Button
              variant="custom"
              disabled={loadingMore}
              onClick={() => fetchNextPage()}
              className="text-sm text-heading ps-9 pt-1"
            >
              Load More
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
};
