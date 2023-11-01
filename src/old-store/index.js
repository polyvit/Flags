import { legacy_createStore, compose, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import * as api from "../config";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "countries"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
export const persistor = persistStore(store);
