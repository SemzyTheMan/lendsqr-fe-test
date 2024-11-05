import React from "react";
import PaginateComponent from "./PaginateComponent";
import {cn} from "@/lib/utils";

interface Props {
  isLoading: boolean;
  data: unknown[];
  currentPage: number ;
  totalCount: number;
  pageSize: number;
  onPageChange: (_: number) => void;
  className?: string;
}
const PaginationSection = ({
  isLoading,
  currentPage,
  onPageChange,
  pageSize,
  data,
  totalCount,
  className,
}: Props) => {
  return (
    <section className={cn(" w-full flex justify-center ", className)}>
      {/* pagination  */}
      {!isLoading && data && (
        <PaginateComponent
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      )}
    </section>
  );
};

export default PaginationSection;
