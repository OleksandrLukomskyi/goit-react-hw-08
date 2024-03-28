import { useAuth } from "../hooks"
import { Navigate} from "react-router"



// const PublicRoute = ({children, redirectTo = '/'}) => {
//   const {isLoggedIn} = useAuth();
//   return ! isLoggedIn ? children : <Navigate to={redirectTo} />
// }
const PublicRoute = ({component: Component, redirectTo = '/'}) => {
  const {isLoggedIn} = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component
}

export default PublicRoute