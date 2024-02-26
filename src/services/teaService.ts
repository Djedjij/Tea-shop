import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITea } from "../models/ITea";

export const teaAPI = createApi({
  reducerPath: "tea",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "core-service/products",
  }),
  endpoints: (build) => ({
    fetchTea: build.query<ITea, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
