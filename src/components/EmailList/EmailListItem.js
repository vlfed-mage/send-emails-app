const EmailListItem = ({ email }) => {
    return (
        <tr>
            <td>{email.id}</td>
            <td>{email.recipient}</td>
            <td>{email.subject}</td>
        </tr>
    );
};

export default EmailListItem;
