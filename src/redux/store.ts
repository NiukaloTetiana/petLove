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
import { userReducer, UserState } from "./user/userSlice";
import { noticesReducer } from "./notices/noticesSlice";
import { friendsReducer } from "./friends/friendsSlice";
import { citiesReducer } from "./cities/citiesSlice";
import { newsReducer } from "./news/newsSlice";

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

const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
  whitelist: ["user"],
};

const persistedUserReducer = persistReducer<UserState>(
  userPersistConfig,
  userReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: persistedUserReducer,
    notices: noticesReducer,
    friends: friendsReducer,
    news: newsReducer,
    cities: citiesReducer,
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
