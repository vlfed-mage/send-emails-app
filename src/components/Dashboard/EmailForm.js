import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { sendEmail } from '../../services';
import useAuth from '../hooks/useAuth';
import useEmails from '../hooks/useEmails';

const EmailForm = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const { currentUser } = useAuth();
    const { fetchEmails } = useEmails();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const newEmail = {
                recipient,
                subject,
                sender: currentUser.id,
                message: editorState.getCurrentContent().getPlainText(),
            };
            await sendEmail(newEmail);
            setRecipient('');
            setSubject('');
            setEditorState(EditorState.createEmpty());
            fetchEmails('emails/');
        } catch (error) {
            console.error('Failed to send email', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                placeholder='Recipient'
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                required
            />
            <input
                type='text'
                placeholder='Subject'
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
            />
            <Editor editorState={editorState} onChange={setEditorState} />
            <button type='submit'>Send Email</button>
        </form>
    );
};

export default EmailForm;
