import React from 'react';
import { Navbar } from 'react-bootstrap'

export const Navigationbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/Tasks/All">Task list</Navbar.Brand>    
            <Navbar.Brand href="/Tasks/NewTask">New Task</Navbar.Brand>  
        </Navbar>
    );
}