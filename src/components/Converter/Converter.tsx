import { TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Converter.module.scss";
import { getСurrencies } from "../../redux/Currency/currency-selectors";
import getConvertedCurrency from "../../hooks/getConvertedCurrency";

interface IProps {}

const Converter: React.FC<IProps> = () => {
  const currencies = useAppSelector(getСurrencies);
  const [text, setText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isError, setIsError] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [count, setCount] = useState(0);

  const { convert } = getConvertedCurrency(currencies);

  const queryRegex = useMemo(
    () => /^$|("|”|“)\d+\s\S\S\S("|”|“)\sin\s("|”|“)\S\S\S("|”|“)$/,
    []
  );

  const convertedCurrancy = useMemo(
    () => convert(count, from, to),
    [convert, count, from, to]
  );

  useEffect(() => {
    if (!text.match(queryRegex)) {
      setErrorMessage("Invalid query");
      setIsError(true);
    }
  }, [queryRegex, text]);

  useEffect(() => {
    if (text.match(queryRegex)) {
      setErrorMessage("example: “15 usd” in “uah”");
      setIsError(false);
      const [count, fromCurrency, _, toCurrency] = text
        .replace(/[^\s\w\d]/g, "")
        .split(" ");

      if (fromCurrency && toCurrency) {
        setCount(Number(count));
        setFrom(fromCurrency);
        setTo(toCurrency);
      }
    }
  }, [text, errorMessage, queryRegex, convert]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Currency Converter</h1>
      <TextField
        className={styles.input}
        id="outlined-basic"
        label="Enter currency"
        variant="outlined"
        helperText={errorMessage}
        error={!text.match(queryRegex)}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      {convertedCurrancy && (
        <span className={styles.result}>{convertedCurrancy}</span>
      )}
    </div>
  );
};

export default Converter;
