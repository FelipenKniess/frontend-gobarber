import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

interface ToastContextData {
    addToast(): void;
    removeToast(): void;
}

const ToastProvider:React.FC<ToastContextData> =  ({ children }) => {

    const addToast = useCallback(() => {
        console.log('addToast')
    }, []);

    const removeToast = useCallback(() => {
        console.log('removeToast')
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {{children}}
        </ToastContext.Provider>
    )

}


function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if(!context){
        throw new Error('UseToast must be used within a ToastProvider');
    }

    return context;
}


export {ToastProvider, useToast}