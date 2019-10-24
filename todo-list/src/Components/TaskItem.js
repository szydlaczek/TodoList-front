import React from 'react'
import {  useDispatch } from "react-redux";
import {Button,  Card, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import * as service from './../Services/TaskService';

export default  (props) => {
    
    const dispatch = useDispatch();
    
    const startTask = () => {
        
        dispatch(service.StartTask(props.taskItem.id));
    }

    const endTask = () => {
        
        dispatch(service.EndTask(props.taskItem.id));
    }

    return (
        <Card>
            <Card.Header>{props.taskItem.topic}</Card.Header>
            <Card.Body>
                <Card.Title>{props.taskItem.category}</Card.Title>
                <Card.Text>
                    {props.taskItem.description}
                </Card.Text>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="primary" disabled={props.taskItem.status !== 0} onClick = {()=> startTask() }>Start</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button variant="primary" disabled={props.taskItem.status === 0} onClick = {()=> endTask() }>End</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                
            </Card.Body>
        </Card>
    )
}