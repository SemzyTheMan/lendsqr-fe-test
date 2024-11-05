"use client";
import { useCallback, useEffect } from "react";

import { usePagination, DOTS } from "./hook/usePaginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Paginate.module.scss";

interface Props {
  onPageChange: (_: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const PaginateComponent = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];

  // scroll to the top of on pages change
  useEffect(() => {
    if (typeof window !== "undefined" && currentPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // next and prev btn functions
  const onNext = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange]);

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const lastPage = paginationRange[paginationRange?.length - 1];

  // if it is only one page, dont show the pagination
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  // else show the pagination
  return (
    <div className=" w-full flex font-sans justify-center my-2  ">
      <div className="flex items-center gap-[7px]">
        <button
          disabled={currentPage === 1}
          type="button"
          className={`${styles.chevron_container}`}
          onClick={onPrevious}
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-[7px] ">
          <div className={`flex items-center gap-[7px] `}>
            {paginationRange.map((pageNumber, ind) => {
              if (pageNumber === DOTS) {
                return (
                  <span
                    key={`i-${ind + 1}`}
                    className="text-myGrey cursor-pointer"
                  >
                    &#8230;
                  </span>
                );
              }
              return (
                <button
                  key={`i-${ind + 1}`}
                  className={`${styles.pagination_item} ${
                    pageNumber === currentPage && styles.pagination_item_active
                  } `}
                  onClick={() => onPageChange(Number(pageNumber))}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
        <button
          disabled={currentPage === lastPage}
          type="button"
          onClick={onNext}
          className={`${styles.chevron_container}`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default PaginateComponent;
