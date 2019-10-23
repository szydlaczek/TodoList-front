import React from 'react'
import {Button, Form, FormControl } from 'react-bootstrap'

export default (props) => {

    const submit = (e) => {
        const form = e.target;
        if (props.onSearch != undefined) {
            props.onSearch(form.elements.search.value);
        }
        e.preventDefault();
    }

    return (
        <Form inline onSubmit = {(e) => submit(e)}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" />
            <Button variant="outline-success" type="submit" >Search</Button>
        </Form>
    )
}