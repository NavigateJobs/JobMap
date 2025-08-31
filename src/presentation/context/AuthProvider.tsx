// presentation/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { JobLocator } from '../../data/store/user.mmkv';
import apiClient from '../../data/API/axios-instance';
import { registrationAuth } from '../../data/API/service/auth/registrationAuth';

type AuthContextType = {
    token: string | null;
    handleSetToken: (token: string) => void;
    handleLogout: () => void;
    authLoading: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [authLoading, setAuthLoading] = useState(true);

    const handleSetToken = (tokenPayload: string) => {
        setToken(tokenPayload);
        JobLocator.set('token', tokenPayload);
    };

    const handleLogout = () => {
        setToken(null);               // remove token from state
        JobLocator.delete('token'); // remove token from MMKV storage
    };

    useEffect(() => {
        const tokenFromStorage = JobLocator.getString('token');
        if(tokenFromStorage) {
            setToken(tokenFromStorage);
        }
        setAuthLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ token, handleSetToken, handleLogout, authLoading}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider

export const useProviderAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context;
}