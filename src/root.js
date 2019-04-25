import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import LoginPage from './LoginPage';

const store = configure();

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;