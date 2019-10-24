import { Container } from 'react-bootstrap'
import {Navigationbar} from './Navigationbar';
import { Route, Switch } from "react-router-dom";
import React from 'react';
import { TaskListContainer } from '../Containers/TaskListContainer';
import NewTask from './../NewTask';

export const Layout = () => {
    return (
        <React.Fragment>
            <Navigationbar/>
            <Container>
                <Switch>
                    <Route exact path="/Tasks/NewTask" component = {NewTask} />
                    <Route exact path="/Tasks/All" component = {TaskListContainer}/>
                    
                </Switch>                
            </Container>
        </React.Fragment>        
    );
}