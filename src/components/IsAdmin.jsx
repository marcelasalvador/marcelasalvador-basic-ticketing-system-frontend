import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function IsAdmin(props) {
  const { isLoggedIn, isNotAdmin, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!isLoggedIn) return <Navigate to="/login" />;

  if (isNotAdmin) return <Navigate to="/" />;

  return props.children;
};

export default IsAdmin;