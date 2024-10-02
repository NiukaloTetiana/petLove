import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer, AuthState } from "./auth/authSlice";
import { userReducer } from "./user/userSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer<AuthState>(
  authPersistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
