import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={SignIn} path="/" exact />
                <Route component={SignUp} path="/signup" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;