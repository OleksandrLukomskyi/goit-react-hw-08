import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
// import toast from "react-hot-toast";

import Layout from "../Layout/Layout";

import { useDispatch } from "react-redux";

import PrivateRoute from "../../guards/PrivateRoute";
import PublicRoute from "../../guards/PublicRoute";

// import Loader from "../../components/Loader/Loader";

import { useAuth } from "../../hooks";
import { refreshUser } from "../../store/auth/operations";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  useEffect(() => {
    // dispatch(refreshUser()).unwrap().then(() => toast.success('Logged in successfully')).catch();
    dispatch(refreshUser())
  }, [dispatch]);

  //  isRefreshing ? (<Loader />) :
  // isRefreshing ? (<b> Refreshing user...</b>) :
  return   isRefreshing ? (<b> Refreshing user...</b>) : (
  <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
