import React from 'react';
import {Button, Form, FormControl, Row, Container, Col } from 'react-bootstrap'
import TaskItem from './TaskItem';
export default  (props) => {
    
    return (
        <React.Fragment>
            <Container>                
                {props.taskList.map((task) => 
                    <Row>
                        <Col><TaskItem taskItem={task}/></Col>
                    </Row>
                )}
            </Container>
        </React.Fragment>);
  }