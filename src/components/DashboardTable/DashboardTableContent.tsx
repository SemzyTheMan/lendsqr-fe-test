"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginateComponent from "../Pagination/PaginateComponent";
import { columns, Dashboard } from "./columns";
import { DataTable } from "./data-table";
import styles from "./Table.module.scss";

function getData(): Dashboard[] {
  // Fetch data from your API here.
  const data = Array.from({ length: 500 }, (_, i) => ({
    id: i.toString(),
    organization: "Lendsqr",
    userName: "johndoe",
    email: "adedeji@lendsqr.com",
    phone: "09078456478",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  }));
  return data;
}

export default function DashboardTableContent() {
  const data = getData();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams.toString());
  const pathName = usePathname();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    params.set("page", page.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  const first = (page - 1) * 100;
  const last = page * 100;

  return (
    <>
      <DataTable columns={columns} data={data.slice(first, last)} />
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
