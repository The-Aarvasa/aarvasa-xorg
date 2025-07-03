// utils/PrivateRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setAuthenticated(!!accessToken);
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) return null; // or <div>Loading...</div>

  return authenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
