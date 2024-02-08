import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logoutUser } from '../redux/auth/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Menu.css';
import Logo from '../images/logo.png';

const Menu = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loggedUser = localStorage.getItem('username');

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch(logoutUser());
    navigate('/login');
    toast("You are logged out");
  }

  return (
    <div className="menu">
        <div className='logo'>
            <img src={Logo} alt="web developer logo" />
        </div>
        <div className='links'>
            {(authState.username || loggedUser) && <h3>Logged in as {authState.username || loggedUser}</h3>}
            <Link to="/" >Home</Link>
            {!(authState.username || loggedUser) && <>
                <Link to="/login" >Login</Link>
                <Link to="/register" >Register</Link>
            </>}
            {(authState.username || loggedUser) && <>
                <Link to="/developers" >Developers</Link>
                <Link to="/developer/new" >New Developer</Link>
            </>}
            {(authState.username || loggedUser) && <a href="" onClick={e => logout(e)} >Logout</a>}
        </div>
    </div>
  );
};

export default Menu;
