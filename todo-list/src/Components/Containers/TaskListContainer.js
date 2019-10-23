import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Button, Form, FormControl, Row, Container, Col } from 'react-bootstrap'
import * as service from './../../Services/TaskService';
import SearchForm from '../SearchForm';
import TaskList from './../TaskList';

export const TaskListContainer = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {               
        dispatch(service.GetTasks())
    }, [dispatch])

    const search =  (value) => {
        dispatch(service.GetTasks(value));
    }

    const tasks = useSelector(state => state.tasksReducer.tasks)
    
    return (
        <React.Fragment>                          
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SearchForm  onSearch={search} />
                    </Col> 
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <TaskList taskList={tasks}/>
                    </Col> 
                </Row>
        </React.Fragment>);
  }