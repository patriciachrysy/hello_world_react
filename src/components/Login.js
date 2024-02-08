import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logUser, startLoader } from '../redux/auth/auth';
import '../styles/Login.css';

const Login = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    if(!username) {
      setError("Please provide a username");
      return;
    }
    dispatch(startLoader());
    dispatch(logUser({username}));
  }

  return (
    <div className="welcome-screen">
        <div className="login">
            <form onSubmit={e => login(e)}>
                <div className='form-field'>
                    <label>Enter your username to login</label>
                    <input type="text" required disabled={authState.loader} value={username} onChange={e => setUsername(e.target.value)} />
                    {error && <span>*** {error}</span>}
                    {authState.error && <span>*** {authState.error}</span>}
                </div>
                <div className='form-field'>
                    <input type="submit" disabled={authState.loader} value={authState.loader ? "Wait..." : "log in"} />
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;
