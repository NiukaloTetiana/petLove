import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { useAppDispatch } from "../hooks";
import {
  getNoticesCategories,
  getNoticesSex,
  getNoticesSpecies,
  refreshUser,
} from "../redux";
import { PrivateRoute, PublicRoute } from "../routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage"));
const FriendsPage = lazy(() => import("../pages/FriendsPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const AddPetPage = lazy(() => import("../pages/AddPetPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNoticesCategories());
    dispatch(getNoticesSex());
    dispatch(getNoticesSpecies());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-pet"
          element={
            <PrivateRoute>
              <AddPetPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
