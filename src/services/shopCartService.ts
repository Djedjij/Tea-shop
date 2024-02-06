import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IShopCart } from "../models/IshopCard";
interface IPostTea {
  weight: number;
  id: number;
}

export const shopCartAPI = createApi({
  reducerPath: "shopCart",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "cart-service/cart",
  }),
  tagTypes: ["ShopCart"],
  endpoints: (build) => ({
    fetchShopCart: build.query<IShopCart, void>({
      query: () => ({
        url: "",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      providesTags: (result) => ["ShopCart"],
    }),

    postTea: build.mutation<IPostTea, IPostTea>({
      query: (tea) => ({
        url: "/items",
        method: "POST",
        body: {
          id: tea.id,
          weight: tea.weight,
        },
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),

    deleteTea: build.mutation<IPostTea, number>({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),
    changeWeightTea: build.mutation<IPostTea, IPostTea>({
      query: (tea) => ({
        url: `/items/${tea.id}`,
        method: "PUT",
        body: {
          id: tea.id,
          weight: tea.weight,
        },
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),
    clearShopCart: build.mutation<IShopCart, void>({
      query: () => ({
        url: "/items",
        method: "DELETE",
        headers: {
          cart_id: localStorage.getItem("uuid") || "",
        },
      }),
      invalidatesTags: ["ShopCart"],
    }),
  }),
});
