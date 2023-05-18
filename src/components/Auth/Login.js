import { useState } from 'react';
import { login } from '../../services';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { loginUser } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const user = await login(username, password);
            loginUser(user);
            setError(null);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            {error?.response.data.detail && (
                <p className='error-message'>{error.response.data.detail}</p>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
            <p>
                Don't have an account? <Link to='/register'>Register</Link>
            </p>
        </div>
    );
};

export default Login;
