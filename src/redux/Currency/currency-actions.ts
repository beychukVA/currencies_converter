import { createAction } from "@reduxjs/toolkit";
import { ICurrency } from "./interfaces/ICurrency";

const сurrencies = createAction(
  "сurrencies/fetchСurrencies",
  (сurrencies: ICurrency[]) => {
    return {
      payload: {
        сurrencies,
      },
    };
  }
);

const currentCurrency = createAction(
  "сurrencies/ChangeCurrentCurrency",
  (currentCurrency: string) => {
    return {
      payload: {
        currentCurrency,
      },
    };
  }
);

export { сurrencies, currentCurrency };
