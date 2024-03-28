import { useAuth } from "../hooks"
import { Navigate, useLocation } from "react-router"



// const PrivateRoute = ({children, redirectTo= '/'}) => {
//   const {isLoggedIn, isRefreshing} = useAuth();
//   const shouldRedirect = isLoggedIn && isRefreshing;
//   const location = useLocation()
//   return shouldRedirect ?  children : <Navigate to={redirectTo} state={location}/>
// }

const PrivateRoute = ({component: Component, redirectTo= '/'}) => {
  const {isLoggedIn, isRefreshing} = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const location = useLocation()
  return shouldRedirect ?  <Navigate to={redirectTo} state={location}/> : Component
}

export default PrivateRoute