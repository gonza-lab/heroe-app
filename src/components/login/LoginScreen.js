import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './LoginScreen.css';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: types.login,
      payload: {
        name: 'Gonzalo',
      },
    });
    history.replace(localStorage.getItem('lastPath') ||'/');
  };

  return (
    <div className="login-screen">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
};
