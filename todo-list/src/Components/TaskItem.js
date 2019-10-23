import React from 'react'
import {Button, Form, FormControl, Row, Container, Card } from 'react-bootstrap'

export default  (props) => {
    console.log(props.taskItem)
    return (
        <Card>
            <Card.Header>{props.taskItem.topic}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}