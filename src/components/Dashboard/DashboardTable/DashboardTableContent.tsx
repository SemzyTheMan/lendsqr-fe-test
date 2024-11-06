"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginateComponent from "../../Pagination/PaginateComponent";

import { DataTable } from "./data-table";
import styles from "./Table.module.scss";
import { useGetUserListsQuery } from "@/services/dashboard";
import { User } from "@/types";
import { formatISODate } from "@/lib/utils";
import { Columns } from "./columns";

export default function DashboardTableContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams.toString());
  const pathName = usePathname();
  const router = useRouter();
  const { data: dashboardData, isLoading } = useGetUserListsQuery();
  const handlePageChange = (page: number) => {
    params.set("page", page.toString());
    router.push(`${pathName}?${params.toString()}`);
  };
  const first = (page - 1) * 100;
  const last = page * 100;
  const columns = Columns();
  const renderedData = dashboardData?.map((data: User) => {
    return {
      ...data,
      phone: data?.personalInformation?.phone,
      email: data?.personalInformation?.email,
      dateJoined: formatISODate(new Date(data?.createdAt)),
      userName: data?.personalInformation?.fullName?.split(" ")[0],
    };
  });

  return (
    <>
      <DataTable
        isLoading={isLoading}
        columns={columns}
        data={renderedData?.slice(first, last) || []}
      />
      <div className={`${styles.pagination_container}`}>
        <p className={`${styles.pagination_first}`}>
          Showing{" "}
          <span>
            <select defaultValue={page * 100} name="" id="">
              {[100, 200, 300, 400, 500].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </span>{" "}
          of 500
        </p>
        <PaginateComponent
          pageSize={100}
          currentPage={page}
          totalCount={500}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
