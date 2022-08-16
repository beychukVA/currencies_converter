import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Button from "@mui/material/Button";
import SelectCurrency from "../../Select/SelectCurrency";

interface IProps {}

const Navigation: React.FC<IProps> = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            margin: "5px",
          };
        }}
        to="/"
      >
        <Button
          className={styles.button}
          color="success"
          variant="contained"
          startIcon={<CurrencyBitcoinIcon />}
        >
          Сurrencies
        </Button>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            margin: "5px",
          };
        }}
        to="/converter"
      >
        <Button
          className={styles.button}
          color="secondary"
          variant="contained"
          startIcon={<CurrencyExchangeIcon />}
        >
          Converter
        </Button>
      </NavLink>
      <SelectCurrency />
    </nav>
  );
};

export default Navigation;
