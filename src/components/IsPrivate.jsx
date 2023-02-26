import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function IsPrivate(props) {
  const { isLoggedIn, isAdmin, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!isLoggedIn) return <Navigate to="/login" />;

  if (!isAdmin) return <Navigate to="/" />;

  return props.children;
};

export default IsPrivate;