import { useState } from 'react';
import { register } from '../../services';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleRegister = async e => {
        e.preventDefault();

        register(username, email, password)
            .then(response => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });
    };

    return (
        <div className='container'>
            <h1>Register</h1>
            {error?.response.data.username && (
                <p className='error-message'>
                    A user with that username already exists.
                </p>
            )}
            <form onSubmit={handleRegister}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Register</button>
            </form>
            <p>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

export default Register;
