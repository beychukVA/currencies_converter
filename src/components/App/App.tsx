import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import styles from "./App.module.scss";

interface IProps {}

const CurrencysPage = lazy(
  () =>
    import(
      "../../pages/CurrenciesPage/CurrenciesPage" /* webpackChunkName: "currencys-page" */
    )
);

const ConverterPage = lazy(
  () =>
    import(
      "../../pages/ConverterPage/ConverterPage" /* webpackChunkName: "converter-page" */
    )
);

const App: React.FC<IProps> = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<CurrencysPage />} />
            <Route path="/converter" element={<ConverterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
