import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../services/useRefreshTokenService";
import { setAccessToken } from "../redux/authSlice";  // ✅ FIX
import api from "../services/api"; // ✅ FIX

const PersistLogin = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!accessToken) {
          const newAccessToken = await refreshToken();
          if (newAccessToken) {
            dispatch(setAccessToken({ accessToken: newAccessToken }));
            api.defaults.headers.Authorization = `Bearer ${newAccessToken}`; // ✅ FIX
          }
        }
      } catch (err) {
        console.error("Failed to refresh token:", err);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [accessToken, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return <Outlet />;
};

export default PersistLogin;
