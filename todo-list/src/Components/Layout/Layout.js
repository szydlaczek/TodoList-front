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
                    <Route exact path={["/", "/Tasks" ,"/Tasks/All"]} component = {TaskListContainer}/>
                    <Route exact path="/Tasks/NewTask" component = {NewTask} />                    
                </Switch>                
            </Container>
        </React.Fragment>        
    );
}