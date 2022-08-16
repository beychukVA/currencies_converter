import React, { useMemo } from "react";
import getExchangeRates from "../../hooks/getExchangeRates";
import { useAppSelector } from "../../hooks/redux";
import {
  getCurrentCurrency,
  getСurrencies,
} from "../../redux/Currency/currency-selectors";
import { ICurrency } from "../../redux/Currency/interfaces/ICurrency";
import styles from "./Currencies.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface IProps {}

const Currencys: React.FC<IProps> = () => {
  const currencies: ICurrency[] = useAppSelector(getСurrencies);
  const currentCurrency = useAppSelector(getCurrentCurrency);
  const [calculateRates] = getExchangeRates(currencies);

  const currentCurrencies: ICurrency[] = useMemo(() => {
    return calculateRates(currentCurrency) || [];
  }, [calculateRates, currentCurrency]);

  return (
    <>
      <TableContainer className={styles.container} component={Paper}>
        <Table aria-label="Exchange Rates">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgb(0, 30, 60)" }}>
              <TableCell className={styles.table_cell} sx={{ color: "white" }}>
                Exchanges
              </TableCell>
              <TableCell
                className={styles.table_cell}
                sx={{ color: "white" }}
                align="right"
              >
                Buy
              </TableCell>
              <TableCell
                className={styles.table_cell}
                sx={{ color: "white" }}
                align="right"
              >
                Sale
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCurrencies?.map(
              ({ ccy, base_ccy, buy, sale }: ICurrency) => (
                <TableRow
                  key={ccy}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    bgcolor: "rgb(19, 47, 76)",
                  }}
                >
                  <TableCell
                    className={styles.table_cell}
                    sx={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {`1 ${ccy}`}
                  </TableCell>
                  <TableCell
                    className={styles.table_cell}
                    sx={{ color: "white" }}
                    align="right"
                  >
                    {buy}
                  </TableCell>
                  <TableCell
                    className={styles.table_cell}
                    sx={{ color: "white" }}
                    align="right"
                  >
                    {sale}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Currencys;
