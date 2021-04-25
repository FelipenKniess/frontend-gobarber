import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import {AuthProvider} from './hooks/auth';
//import {ToastProvider} from './hooks/toast';


import ToastContainer from '../src/Components/ToastContainer';

const App:React.FC = () => (
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>

        <ToastContainer />
        <GlobalStyle />
      </BrowserRouter>
)

export default App;
