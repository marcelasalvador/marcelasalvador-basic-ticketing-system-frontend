import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function IsAdmin(props){
  const { isAdmin, isLoading } = useContext(AuthContext);

  if(isLoading) return <p>Loading...</p>;

  if(isAdmin) return <Navigate to="/" />
 

  return props.children;
};

export default IsAdmin;