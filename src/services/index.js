import axios from 'axios';

const setAuthHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = window.btoa(`${user.username}:${user.password}`);
    axios.defaults.headers.common['Authorization'] = `Basic ${token}`;
};

const API_URL = 'http://68.183.74.14:4005/api/';

const httpRequest = async (method, url, data = null, requiresAuth = true) => {
    if (requiresAuth) {
        setAuthHeader();
    }

    const fullUrl = url.startsWith('http') ? url : API_URL + url;

    try {
        const response = await axios({
            method,
            url: fullUrl,
            data,
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(
                `Request failed with status code ${response.status}`
            );
        }
    } catch (error) {
        console.error(`Failed to perform ${method} request`, error);
        throw error;
    }
};

export const register = (username, email, password) =>
    httpRequest('post', 'users/', { username, email, password }, false);

export const login = async (username, password) => {
    const token = window.btoa(`${username}:${password}`);
    axios.defaults.headers.common['Authorization'] = `Basic ${token}`;

    const response = await axios.get(API_URL + 'users/current/');

    if (response.status === 200 && response.data && response.data.username) {
        localStorage.setItem(
            'user',
            JSON.stringify({ ...response.data, password })
        );
        return response.data;
    } else {
        throw new Error('Failed to log in');
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const sendEmail = emailData => httpRequest('post', 'emails/', emailData);

export const getSentEmails = url => httpRequest('get', url);
