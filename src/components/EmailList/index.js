import EmailListItem from './EmailListItem';
import Pagination from './Pagination';
import useEmails from '../hooks/useEmails';

const EmailList = () => {
    const { emails } = useEmails();

    return (
        <>
            <h2>Sent Emails</h2>
            {emails.length > 0 ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Recipient</th>
                                <th>Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emails?.map(email => (
                                <EmailListItem key={email.id} email={email} />
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </>
            ) : (
                <p>You don't have any sent emails yet.</p>
            )}
        </>
    );
};

export default EmailList;
