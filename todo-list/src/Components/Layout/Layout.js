import { Container } from 'react-bootstrap'
import {Navigationbar} from './Navigationbar';
import React from 'react';
import { TaskListContainer } from '../Containers/TaskListContainer';

export const Layout = () => {
    return (
        <React.Fragment>
            <Navigationbar/>
            <Container>
                <TaskListContainer/>
            </Container>
        </React.Fragment>        
    );
}