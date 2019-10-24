import React from 'react'
import {  useDispatch } from "react-redux";
import {Button,  Card } from 'react-bootstrap'
import * as service from './../Services/TaskService';

export default  (props) => {
    
    const dispatch = useDispatch();
    
    const setStatus = () => {
        alert(props.taskItem.id);
        dispatch(service.StartTask(props.taskItem.id));
    }
    return (
        <Card>
            <Card.Header>{props.taskItem.topic}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" onClick = {()=> setStatus() }>{props.taskItem.status}</Button>
            </Card.Body>
        </Card>
    )
}