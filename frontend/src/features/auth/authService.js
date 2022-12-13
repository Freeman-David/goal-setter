import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

// Register user
const register = async (userData) => {
    const res = await axios.post(API_URL, userData);

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }

    return res.data;
}

const logout = () => {
    localStorage.removeItem('user');
}

// Login
const login = async (userData) => {
    const res = await axios.post(API_URL + 'login', userData);

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }

    return res.data;
}

const authService = {
    register,
    logout,
    login,
}

export default authService;