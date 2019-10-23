import React from 'react';
import { Navbar } from 'react-bootstrap'

export const Navigationbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>    
        </Navbar>
    );
}