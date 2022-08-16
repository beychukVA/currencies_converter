import { currentCurrency } from "../redux/Currency/currency-actions";
import { ICurrency } from "../redux/Currency/interfaces/ICurrency";

const getExchangeRates = (currencies: ICurrency[]) => {
  const calculateRates = (currentCurrency: string) => {
    if (currentCurrency === "UAH") {
      return currencies;
    }
    const currency = currencies.find(
      (currency) => currency.ccy === currentCurrency
    );
    const withoutCurrentCurrency = currencies.filter(
      (currency) => currency.ccy !== currentCurrency
    );
    withoutCurrentCurrency.push({
      ccy: "UAH",
      base_ccy: "",
      buy: "1",
      sale: "1",
    });
    return withoutCurrentCurrency.map((item) => ({
      ...item,
      buy:
        item.ccy === "UAH"
          ? (1 / Number(currency?.buy)).toFixed(8).toString()
          : (Number(item.buy) / Number(currency?.buy)).toFixed(8).toString(),
      sale:
        item.ccy === "UAH"
          ? (1 / Number(currency?.sale)).toFixed(8).toString()
          : (Number(item.sale) / Number(currency?.sale)).toFixed(8).toString(),
    }));
  };

  return [calculateRates];
};

export default getExchangeRates;
