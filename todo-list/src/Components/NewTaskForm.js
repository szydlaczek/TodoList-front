
import React, {useState} from 'react';
import {Form, Col, InputGroup, Button } from 'react-bootstrap';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export default () => {
    const [validated, setValidated] = useState(false);
    const [date, setDate]=useState(null);
    const handleSubmit = event => {
        const form = event.target;
        
        if (form.checkValidity() === false) {          
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
          return;
        }
        const data = {
          name: form.elements.name.value,
          priority: form.elements.priority.value,
          lastName: form.elements.lastName.value,
          email: form.elements.email.value,
          title: form.elements.title.value,
          description: form.elements.description.value,
          category: form.elements.category.value,
        }
        console.log(data);
        event.preventDefault();
        
      };

      const handleDayClick = (day, { selected }) => {
        setDate(day);
        console.log(day.toLocaleDateString());
      }

    return ( 
    <Form noValidate validated={validated} onSubmit={handleSubmit} method="POST">
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Imię</Form.Label>
            <Form.Control
              name = "name"
              required
              type="text"
              placeholder="Imię"              
            />
            <Form.Control.Feedback type="invalid">Podaj imie</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control
              name = "lastName"
              required
              type="text"
              placeholder="Nazwisko"              
            />
            <Form.Control.Feedback type="invalid">Podaj nazwisko</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name = "email"
              required
              type="email"
              placeholder="Email"              
            />
            <Form.Control.Feedback type="invalid">Podaj email</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Kategoria</Form.Label>
            <Form.Control
              name = "category"
              required
              type="text"
              placeholder="Kategoria"              
            />
            <Form.Control.Feedback type="invalid">Uwagi</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Temat</Form.Label>
            <Form.Control
              name = "title"
              required
              type="text"
              placeholder="Temat"              
            />
            <Form.Control.Feedback type="invalid">Uwagi</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Uwagi</Form.Label>
            <Form.Control              
              name = "comments"
              type="text"
              placeholder="Uwagi"
            />            
          </Form.Group>           
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Opis</Form.Label>
              <Form.Control as="textarea" rows="3" name ="description" required />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect1">
            <Form.Label>Wybierz priorytet</Form.Label>
            <Form.Control as="select" name = "priority">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group >          
            <Form.Label>Data</Form.Label>
            <DayPicker onDayClick={(day, { selected }) => handleDayClick(day, { selected }) } selectedDays={date} />      
          </Form.Group>
        </Form.Row>
                       
        <Button type="submit">Zapisz</Button>
    </Form>)
}