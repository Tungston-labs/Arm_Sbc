import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  const checkToken = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("accessToken");
        dispatch(logout());
        return false;
      }
      return true;
    } catch (e) {
      localStorage.removeItem("accessToken");
      dispatch(logout());
      return false;
    }
  };

  return checkToken;
};

export default useAuthCheck;
