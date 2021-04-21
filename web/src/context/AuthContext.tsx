import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
    email: String;
    password: String;
}

interface AuthContextData {
    name: string;
    signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider:React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password}) => {
        const response = await api.post('sessions', {
            email, password
        })

        console.log(response.data);
    }, [])

    return(
        <AuthContext.Provider value={{name: 'Felipe', signIn }}>
            { children }
        </AuthContext.Provider>
    )
}