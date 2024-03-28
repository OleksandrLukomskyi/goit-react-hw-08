import { useAuth } from "../hooks"
import { Navigate, useLocation } from "react-router"



const PrivateRoute = ({children, redirectTo= '/'}) => {
  const {isLoggedIn, isRefreshing} = useAuth();
  const shouldRedirect = isLoggedIn && isRefreshing;
  const location = useLocation()
  return shouldRedirect ?  children : <Navigate to={redirectTo} state={location}/>
}


export default PrivateRoute