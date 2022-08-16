import React from "react";
import Currencies from "../../components/Currencies/Currencies";
import styles from "./CurrencysPage.module.scss";

interface IProps {}

const CurrencysPage: React.FC<IProps> = () => {
  return <Currencies />;
};

export default CurrencysPage;
