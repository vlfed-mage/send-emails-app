import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const loginUser = user => {
        setCurrentUser(user);
    };

    const logoutUser = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
