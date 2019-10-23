import { Container } from 'react-bootstrap'
import {Navigationbar} from './Navigationbar';
import React from 'react';

export const Layout = () => {
    return (
        <React.Fragment>
            <Navigationbar/>
            <Container>
                <div>TTTT</div>
            </Container>
        </React.Fragment>        
    );
}