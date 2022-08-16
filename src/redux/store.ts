import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { сurrenciesApi } from "./Currency/currency-slice";
import {
  currencyReducer,
  currentCyrrencyReducer,
} from "./Currency/currency-reducers";

const config = {
  key: "store",
  storage,
};

const rootReducer = persistCombineReducers(config, {
  сurrencies: currencyReducer,
  currentCurrency: currentCyrrencyReducer,
});

const store = configureStore({
  reducer: {
    [сurrenciesApi.reducerPath]: сurrenciesApi.reducer,
    store: rootReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    сurrenciesApi.middleware,
  ],
  // devTools: process.env.NODE_ENV === "development", //Чтобы тулзы работали на GhPages
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };
