import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";
import { authReducer } from "./auth/authSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root/rootSlice";
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER },
      },
    }),
});

export const persistor = persistStore(store);