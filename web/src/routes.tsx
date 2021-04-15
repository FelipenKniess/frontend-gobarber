import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={SignIn} path="/" exact />
            <Route component={SignUp} path="/cadastro" />
        </BrowserRouter>
    )
}

export default Routes;