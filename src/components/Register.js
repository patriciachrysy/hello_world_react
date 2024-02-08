import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { registerUser, startLoader } from '../redux/auth/auth';
import { toast } from 'react-toastify';
import '../styles/Register.css';

const Register = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
  
    const register = (e) => {
      e.preventDefault();
      if(!username) {
        setError("Please provide a username");
        return;
      }
      dispatch(startLoader());
      dispatch(registerUser({username}))
      .then(() => {
        navigate('/login');
        toast("You successfully registered, now login please");
      });
    }
  
    return (
      <div className="welcome-screen">
        <div className="register">
            <form onSubmit={e => register(e)}>
                <div className='form-field'>
                    <label>Please provide a username to register</label>
                    <input type="text" disabled={authState.loader} required value={username} onChange={e => setUsername(e.target.value)} />
                    {error && <span>{error}</span>}
                </div>
                <div className='form-field'>
                    <input type="submit" disabled={authState.loader} value={authState.loader ? "Wait..." : "register"} />
                </div>
            </form>
        </div>
      </div>
    );
};

export default Register;
