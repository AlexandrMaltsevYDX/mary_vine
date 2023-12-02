// Need to use the React-specific entry point to allow generating React hooks
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface ResponceUsers {
  response: User[];
  count: number;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: headers => {
      const token = window.localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllUsers: builder.query<User[], {column_name: string; order: string}>({
      query: ({column_name, order}) =>
        `users/?_sort=${column_name}&_order=${order}`,
    }),
    getPaginateUsers: builder.query<
      ResponceUsers,
      {page: number; limit: number}
    >({
      query: ({page, limit}) => `users/?_page=${page}&_limit=${limit}`,
      transformResponse: (response: User[], meta, arg): ResponceUsers => {
        const count = Number(meta?.response?.headers.get("X-Total-Count")) || 0;
        return {response, count};
        // return response;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// назвать вручную  use....автогенерате не пугаться
export const {useGetAllUsersQuery, useGetPaginateUsersQuery} = usersApi;
