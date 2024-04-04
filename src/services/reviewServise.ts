import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReview } from "../models/ITea";

export const reviewAPI = createApi({
  reducerPath: "review",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + "review-service/reviews",
  }),
  tagTypes: ["Reviews"],
  endpoints: (build) => ({
    fetchReviews: build.query<IReview[], number>({
      query: (id: number) => ({
        url: `${id}`,
      }),
      providesTags: (result) => ["Reviews"],
    }),

    postReview: build.mutation<IReview, IReview>({
      query: (review: IReview) => ({
        url: "",
        method: "POST",
        body: {
          productId: review.id,
          userEmail: review.userEmail,
          rating: review.rating,
          comment: review.comment,
          timestamp: review.timestamp,
        },
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});
