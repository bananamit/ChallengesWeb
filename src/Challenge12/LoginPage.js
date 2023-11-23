import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { name: 'John Doe' };
    dispatch({ type: 'LOGIN', payload: fakeUser });

    const lastVisited = localStorage.getItem('lastVisited') || '/';
    navigate(lastVisited, { replace: true });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
