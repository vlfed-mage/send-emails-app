import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/utils/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </StrictMode>
);
