import { logout } from '../../services';
import useAuth from '../hooks/useAuth';

const Logout = () => {
    const { logoutUser } = useAuth();

    const handleLogout = () => {
        logout();
        logoutUser();
    };

    return (
        <button className='logout' onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
