import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICurrency } from "./interfaces/ICurrency";

export const сurrenciesApi = createApi({
  reducerPath: "сurrencies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.privatbank.ua/p24api",
  }),
  tagTypes: ["Currency"],
  endpoints: (builder) => ({
    fetchСurrencies: builder.query<ICurrency[], void>({
      query: () => ({
        url: "/pubinfo?json&exchange&coursid=5",
      }),
      keepUnusedDataFor: 60,
      providesTags: ["Currency"],
    }),
  }),
});

export const { useFetchСurrenciesQuery } = сurrenciesApi;
