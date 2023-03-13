import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreching, selectUser } from "redux/auth/auth-selectors";

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreching),
        user: useSelector(selectUser),
    }
}