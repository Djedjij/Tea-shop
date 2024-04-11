import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { parseJSON } from "../utils/functions";
import { IOrder } from "../models/IOrder";

export const orderAPI = createApi({
  reducerPath: "order",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "order",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Order"],
  endpoints: (build) => ({
    postOrder: build.mutation<IOrder, void>({
      query: () => ({
        url: "",
        method: "POST",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
          email: parseJSON("userEmail").email,
        },
      }),
    }),
  }),
});
