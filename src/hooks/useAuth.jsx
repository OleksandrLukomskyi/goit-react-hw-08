import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectProfile,
} from "../redux/auth/selectorsAuth";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const profile = useSelector(selectProfile);
  return {
    isLoggedIn,
    isRefreshing,
    profile,
  };
};
