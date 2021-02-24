import React from 'react';
import AuthProvider from './authprovider';
import Routes from './routes';

const MyProvider = () => {
    return (
        <AuthProvider>
            <Routes></Routes>
        </AuthProvider>
    );
};

export default MyProvider;