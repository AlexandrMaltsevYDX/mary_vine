import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface calculatorInterface {
  id: string;
  filename: string;
}

export const calculatorApi = createApi({
  reducerPath: "calculatorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/", // <---- docker base
  }),
  endpoints: builder => ({
    getTestData: builder.query<calculatorInterface[], {}>({
      // < ------ useGetTokenMutation
      query: () => ({
        url: `calculator/`,
      }),
    }),
    uploadeFiles: builder.mutation({
      query(body) {
        return {
          url: `tools/files/upload/?organization_id=1`,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          body,
          formData: true,
        };
      },
    }),
    //
    //
    //
    //
  }),
});

export const {useGetTestDataQuery, useUploadeFilesMutation} = calculatorApi;
