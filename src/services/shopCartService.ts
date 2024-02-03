import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IShopCart } from "../models/IshopCard";

interface IPostTea {
  weight: number;
  id: number;
}

export const shopCartAPI = createApi({
  reducerPath: "shopCart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://25.15.198.17:5555/cart/" }),
  tagTypes: ["ShopCart"],
  endpoints: (build) => ({
    fetchShopCart: build.query<IShopCart, void>({
      query: () => ({
        url: "v1/api/cart",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      providesTags: (result) => ["ShopCart"],
    }),

    postTea: build.mutation<IPostTea, IPostTea>({
      query: (tea) => ({
        url: `v1/api/cart/add/${tea.id}?weight=${tea.weight}`,
        method: "POST",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),

    deleteTea: build.mutation<IPostTea, number>({
      query: (id) => ({
        url: `v1/api/cart/remove/${id}`,
        method: "DELETE",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),

    changeWeightTea: build.query<IPostTea, IPostTea>({
      query: (tea) => ({
        url: `v1/api/cart/increment/${tea.id}?weight=${tea.weight}`,
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
        invalidatesTags: ["ShopCart"],
      }),
    }),
  }),
});
