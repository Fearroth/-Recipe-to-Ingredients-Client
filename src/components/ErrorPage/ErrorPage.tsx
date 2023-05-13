import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    return (
        <div>
            <h1>Access Denied</h1>
            <p>You do not have permission to access this page.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
