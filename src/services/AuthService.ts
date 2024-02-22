import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IUser } from "../models/IUser";

export const authAPI = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "auth/v1/api/",
  }),
  endpoints: (build) => ({
    fetchShopCart: build.mutation<IUser, IUser>({
      query: (registerBody) => ({
        url: "sign-up",
        method: "POST",
        body: {
          email: registerBody.email,
          name: registerBody.name,
          address: registerBody.address,
          password: registerBody.password,
        },
      }),
    }),
  }),
});
