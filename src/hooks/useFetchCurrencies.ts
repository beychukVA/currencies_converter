import { useEffect } from "react";
import { useFetchСurrenciesQuery } from "../redux/Currency/currency-slice";
import { сurrencies } from "../redux/Currency/currency-actions";
import { useAppDispatch } from "./redux";

interface IProps {}

const useFetchCurrencies = () => {
  const dispatch = useAppDispatch();
  const { data = [], error, isFetching } = useFetchСurrenciesQuery();

  useEffect(() => {
    dispatch(сurrencies(data || []));
  }, [data, dispatch]);

  return { data, error, isFetching };
};

export default useFetchCurrencies;
