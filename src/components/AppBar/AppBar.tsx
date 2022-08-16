import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppBar.module.scss";
import Navigation from "./Navigation/Navigation";
import { ReactComponent as Logo } from "../../images/logo.svg";
import useFetchCurrencies from "../../hooks/useFetchCurrencies";

interface IProps {}

const AppBar: React.FC<IProps> = () => {
  const { data, error, isFetching } = useFetchCurrencies();

  return (
    <>
      <header className={styles.header}>
        <Logo width="48" height="48" />
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
