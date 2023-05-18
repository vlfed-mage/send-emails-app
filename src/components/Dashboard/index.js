import CurrentUser from './CurrentUser';
import EmailForm from './EmailForm';
import EmailList from '../EmailList';
import Logout from './Logout';
import { EmailProvider } from '../utils/EmailContext';

const Dashboard = () => {
    return (
        <div className='container'>
            <h1>Dashboard</h1>
            <CurrentUser />
            <EmailProvider>
                <EmailForm />
                <EmailList />
            </EmailProvider>
            <Logout />
        </div>
    );
};

export default Dashboard;
