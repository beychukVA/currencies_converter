import { createReducer } from "@reduxjs/toolkit";
import { сurrencies, currentCurrency } from "./currency-actions";

export const currencyReducer = createReducer([], {
  [сurrencies.type]: (_, { payload }) => payload.сurrencies,
});

export const currentCyrrencyReducer = createReducer("UAH", {
  [currentCurrency.type]: (_, { payload }) => payload.currentCurrency,
});
