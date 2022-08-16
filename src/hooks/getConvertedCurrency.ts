import { ICurrency } from "../redux/Currency/interfaces/ICurrency";

const getConvertedCurrency = (currencies: ICurrency[]) => {
  const tmpCurrencies = [...currencies];
  tmpCurrencies.push({
    ccy: "UAH",
    base_ccy: "",
    buy: "1",
    sale: "1",
  });
  const convert = (count: number, fromCurrency: string, toCurrency: string) => {
    if (fromCurrency && toCurrency) {
      const [from] = tmpCurrencies.filter(
        (currency: ICurrency) => currency.ccy === fromCurrency.toUpperCase()
      );
      const [to] = tmpCurrencies.filter(
        (currency: ICurrency) => currency.ccy === toCurrency.toUpperCase()
      );

      let result = "";

      if (from?.ccy === to?.ccy) {
        result = `${count.toFixed(8)} ${to?.ccy}`;
        return result;
      }

      result =
        from.ccy === "UAH"
          ? (count / Number(to?.buy)).toFixed(8).toString()
          : ((Number(from?.buy) / Number(to.buy)) * count)
              .toFixed(8)
              .toString();
      return `${result} ${to?.ccy}`;
    }
  };

  return { convert };
};

export default getConvertedCurrency;
