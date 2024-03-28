import { useAuth } from "../hooks"
import { Navigate} from "react-router"



const PublicRoute = ({children, redirectTo = '/'}) => {
  const {isLoggedIn} = useAuth();
  return ! isLoggedIn ? children : <Navigate to={redirectTo} />
}

export default PublicRoute