import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const PrivateRoute = ({ allowedRoles }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState('');

  if (!userInfo) {
    return <Navigate to='/login' replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
    setErrorMessage('You do not have access to this page.');
    return <ErrorPage message={errorMessage} />;
  }

  return <Outlet />;
};

const ErrorPage = ({ message }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default PrivateRoute;
