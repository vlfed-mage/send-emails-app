import { useRoutes, Navigate } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import useAuth from './components/hooks/useAuth';

const App = () => {
    const { currentUser } = useAuth();

    return useRoutes([
        {
            path: '/',
            element: !currentUser ? <Login /> : <Navigate to='/dashboard' />,
        },
        {
            path: '/register',
            element: !currentUser ? <Register /> : <Navigate to='/dashboard' />,
        },
        {
            path: '/dashboard',
            element: currentUser ? <Dashboard /> : <Navigate to='/' />,
        },
        {
            path: '*',
            element: <Navigate to={!currentUser ? '/' : '/dashboard'} />,
        },
    ]);
};

export default App;
