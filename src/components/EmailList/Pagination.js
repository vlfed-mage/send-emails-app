import useEmails from '../hooks/useEmails';

const Pagination = () => {
    const { nextPage, prevPage, fetchEmails } = useEmails();

    return (
        <div className='pagination'>
            <button onClick={() => fetchEmails(prevPage)} disabled={!prevPage}>
                Previous Page
            </button>
            <button onClick={() => fetchEmails(nextPage)} disabled={!nextPage}>
                Next Page
            </button>
        </div>
    );
};

export default Pagination;
