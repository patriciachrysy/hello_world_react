import http from '../http-common';

const login = (data) => http.post('/login', data);
const register = (data) => http.post('/register', data);

const AuthService = {
    login,
    register
};

export default AuthService;
