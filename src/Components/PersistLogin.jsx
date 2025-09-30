import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../services/useRefreshTokenService";
import { setAccessToken, logout } from "../redux/authSlice";  
import api from "../services/api"; 
import useAuthCheck from "../Hooks/useAuthCheck"

const PersistLogin = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const checkToken = useAuthCheck();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const isValid = checkToken(); 
        if (!isValid) {
          dispatch(logout());
          return;
        }

        if (!accessToken) {
          const newAccessToken = await refreshToken();
          if (newAccessToken) {
            dispatch(setAccessToken({ accessToken: newAccessToken }));
            api.defaults.headers.Authorization = `Bearer ${newAccessToken}`; 
          } else {
            dispatch(logout());
          }
        }
      } catch (err) {
        console.error("Failed to refresh token:", err);
        dispatch(logout());
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [accessToken, dispatch, checkToken]);

  if (isLoading) return <p>Loading...</p>;

  return <Outlet />;
};

export default PersistLogin;
