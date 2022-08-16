import { RootState } from "../store";
import { ICurrency } from "./interfaces/ICurrency";

const getСurrencies = (state: RootState) => state?.store?.сurrencies || [];

const getCurrentCurrency = (state: RootState) =>
  state?.store.currentCurrency || "UAH";

export { getСurrencies, getCurrentCurrency };
