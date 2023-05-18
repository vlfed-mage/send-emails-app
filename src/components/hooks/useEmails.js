import { useContext } from 'react';
import { EmailContext } from '../utils/EmailContext';

const useEmails = () => {
    const context = useContext(EmailContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export default useEmails;
