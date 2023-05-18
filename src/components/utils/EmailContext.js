import React, { useState, useEffect, createContext, useCallback } from 'react';
import { getSentEmails } from '../../services';

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
    const [emails, setEmails] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [initialized, setInitialized] = useState(false);

    const fetchEmails = useCallback(async url => {
        try {
            const data = await getSentEmails(url);
            setEmails(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
        } catch (error) {
            console.error('Failed to fetch emails', error);
        }
    }, []);

    useEffect(() => {
        if (!initialized) {
            fetchEmails('emails/');
            setInitialized(true);
        }
    }, [fetchEmails, initialized]);

    return (
        <EmailContext.Provider
            value={{ emails, fetchEmails, nextPage, prevPage }}>
            {children}
        </EmailContext.Provider>
    );
};
