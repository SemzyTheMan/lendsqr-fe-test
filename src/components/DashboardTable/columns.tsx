"use client";

import { ColumnDef } from "@tanstack/react-table";

import styles from "./Table.module.scss";
import { FilterIcon } from "../icons/DashboardIcons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Eye, MoreVertical, UserRoundCheck, UserX } from "lucide-react";
import { DateInput, Input, SelectInput } from "../Forms/Forms";

export interface Dashboard {
  id: string;
  organization: string;
  userName: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

export const columns: ColumnDef<Dashboard>[] = [
  {
    accessorKey: "organization",
    header: () => {
      return <TextHelper text="ORGANIZATION" />;
    },
  },
  {
    accessorKey: "userName",
    header: () => {
      return <TextHelper text="USERNAME" />;
    },
  },
  {
    accessorKey: "email",
    header: () => {
      return <TextHelper text="EMAIL" />;
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return <TextHelper text="PHONE NUMBER" />;
    },
  },
  {
    accessorKey: "dateJoined",
    header: () => {
      return <TextHelper text="DATE JOINED" />;
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return <TextHelper text="STATUS" />;
    },
    cell: ({ row }) => {
      const status = row.original?.status;
      return (
        <div
          className={` ${
            status.toLowerCase() == "active"
              ? styles.active_button
              : status.toLowerCase() == "blacklisted"
              ? styles.blacklisted_button
              : styles.inactive_button
          }`}
        >
          <p>{status}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-8 w-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`${styles.dropdown_container}`}
            align="end"
          >
            <DropdownMenuItem className={`${styles.dropdown_item}`}>
              <Eye />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem className={`${styles.dropdown_item}`}>
              <UserX />
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem className={`${styles.dropdown_item}`}>
              <UserRoundCheck />
              <p>Activate User</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const TextHelper = ({ text }: { text: string }) => {
  return (
    <div className={`${styles.header_text}`}>
      <p> {text}</p>
      <Popover >
        <PopoverTrigger>
          <FilterIcon />
        </PopoverTrigger>
        <PopoverContent align="center" side="left" className={`${styles.popover_container} hide_scroll`}>
          <SelectInput label="Organization" />
          <Input label="Username" placeholder="User" />
          <Input label="Email" placeholder="Email" />
          <DateInput label="Date" />
          <Input label="Phone Number" placeholder="Phone Number" />
          <SelectInput label="Status" />
          <div className={`${styles.btn_container}`}>
            <Button className={`${styles.btn_first}`}>Reset</Button>
            <Button className={`${styles.btn_second}`}>Filter</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
