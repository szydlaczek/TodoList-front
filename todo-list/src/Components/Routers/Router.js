import React from 'react'
import { Router as CustomRouter, Route, Switch } from 'react-router-dom'
import { history } from '../../Helpers/history';
import App from './../App';

const Router = () => {
    return (
        <CustomRouter history = {history}>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </CustomRouter>
    )
}

export default Router;
