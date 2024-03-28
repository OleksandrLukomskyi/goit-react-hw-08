import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Layout from '../Layout/Layout';

import { useDispatch} from 'react-redux';


import PrivateRoute from '../../guards/PrivateRoute';
import PublicRoute from '../../guards/PublicRoute';
// import { refreshProfileThunk } from '../../store/auth/authThunk';
import Loader from '../../components/Loader/Loader';

// import { selectProfile } from 'store/auth/selectorsAuth';
import { useAuth } from '../../hooks';
import { refreshUser } from '../../store/auth/operations';
const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));

const App = () => {

  // const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()
  
  // useEffect(() => {
  //   !profile && dispatch(refreshProfileThunk());
  // }, [profile, dispatch]);

  useEffect(() => {

   dispatch(refreshUser());
   
  }, [isRefreshing, dispatch]);


 
  //  isRefreshing ? (<Loader />) :
  // isRefreshing ? (<b> Refreshing user...</b>) :
    return ( 
    <Suspense fallback={null}>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo='/login'>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo='/contacts'>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo='/contacts'>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          
          
        </Routes>
      </Suspense> 
      );

  

};

export default App;
