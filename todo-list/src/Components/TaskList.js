import React from 'react';
import {Row, Container, Col, Spinner } from 'react-bootstrap'
import TaskItem from './TaskItem';

export default  (props) => {

    return (
        <React.Fragment>
            <Container>
                
                           
                {props.taskList.map((task) => 
                    <Row key={task.id}>
                        <Col><TaskItem taskItem={task} /></Col>
                    </Row>
                )}
            </Container>
        </React.Fragment>);
  }