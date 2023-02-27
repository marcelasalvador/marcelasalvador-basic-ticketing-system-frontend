import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function LoginPage() {
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const updateState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, state)
      .then((axiosResponse) => {
        const { role, authToken } = axiosResponse.data;
        storeToken(authToken);
        authenticateUser();
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={onFormSubmit}>
        <label>Email</label>
        <input value={state.email} name="email" onChange={updateState} />
        <label>Password</label>
        <input value={state.password} name="password" type="password" onChange={updateState} />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
