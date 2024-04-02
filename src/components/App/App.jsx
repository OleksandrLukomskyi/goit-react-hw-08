// import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy, useEffect } from "react";
// // import toast from "react-hot-toast";

// import Layout from "../Layout/Layout";

// import { useDispatch } from "react-redux";

// import PrivateRoute from "../PrivateRoute";
// import RestrictedRoute from "../RestrictedRoute";

// import { useAuth } from "../../hooks";
// import { refreshUser } from "../../redux/auth/operations";

// const Home = lazy(() => import("../../pages/Home"));
// const Login = lazy(() => import("../../pages/Login"));
// const Contacts = lazy(() => import("../../pages/Contacts"));
// const Registration = lazy(() => import("../../pages/Registration"));

// const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b> Refreshing user...</b>
//   ) : (
//     <Suspense fallback={null}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />

//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute redirectTo="/login" component={<Contacts />} />
//             }
//           />
//         </Route>
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<Login />} />
//           }
//         />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<Registration />}
//             />
//           }
//         />
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;
// -------------------------------
import  { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { refreshUser } from "../../redux/auth/operations";

const Home = lazy(() => import("../../pages/Home"));
const Login = lazy(() => import("../../pages/Login"));
const Contacts = lazy(() => import("../../pages/Contacts"));
const Registration = lazy(() => import("../../pages/Registration"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<Registration />} />}
          />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
