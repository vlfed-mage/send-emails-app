import useAuth from '../hooks/useAuth';

const CurrentUser = () => {
    const { currentUser } = useAuth();

    return (
        <div className='current-user-container'>
            {currentUser ? (
                <div>
                    <h2>Current User:</h2>
                    <p>Username: {currentUser.username}</p>
                    <p>Email: {currentUser.email}</p>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}
        </div>
    );
};

export default CurrentUser;
