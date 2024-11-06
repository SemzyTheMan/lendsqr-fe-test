import { User } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.json-generator.com/templates/KCGxKWJB0Dj9",
    prepareHeaders: (headers) => {
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      console.log(token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserLists: builder.query<Array<User>, void>({
      query: () => `/data`,
    }),
  }),
});

export const { useGetUserListsQuery } = dashboardApi;
