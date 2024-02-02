import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPostTea {
  weight: number;
  id: number;
}

export const shopCartAPI = createApi({
  reducerPath: "shopCart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://25.15.198.17:5555/cart/" }),
  endpoints: (build) => ({
    postTea: build.mutation<IPostTea, IPostTea>({
      query: (tea) => ({
        url: `v1/api/cart/add/${tea.id}/?weight=${tea.weight}`,
        method: "POST",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
    }),
  }),
});
