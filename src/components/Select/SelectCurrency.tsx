import React from "react";
import styles from "./SelectCurrency.module.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getCurrentCurrency,
  getСurrencies,
} from "../../redux/Currency/currency-selectors";
import { currentCurrency } from "../../redux/Currency/currency-actions";
import { ICurrency } from "../../redux/Currency/interfaces/ICurrency";

interface IProps {}

const SelectCurrency: React.FC<IProps> = () => {
  const currencies = useAppSelector(getСurrencies);
  const index = useAppSelector(getCurrentCurrency);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(currentCurrency(event.target.value as string));
  };

  return (
    <Box className={styles.container}>
      <FormControl size="small">
        <InputLabel sx={{ color: "lightblue" }} id="select-label">
          Currency
        </InputLabel>
        <Select
          className={styles.select}
          labelId="select-label"
          id="currency-select"
          value={index}
          label="Currency"
          defaultValue=" "
          onChange={handleChange}
          sx={{ color: "white", bgcolor: "indigo" }}
        >
          <MenuItem key="UAH" value="UAH">
            UAH
          </MenuItem>
          {currencies?.map((currency: ICurrency, index: number) => (
            <MenuItem key={currency.ccy} value={currency.ccy}>
              {currency.ccy}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCurrency;
