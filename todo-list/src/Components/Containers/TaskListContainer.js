import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from 'react-bootstrap'
import * as service from './../../Services/TaskService';
import SearchForm from '../SearchForm';
import TaskList from './../TaskList';
import WithLoading from './../Hoc/WithLoading'

const ListWithLoading = WithLoading(TaskList);

export const TaskListContainer = () => {
    
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    
    
    
    useEffect( () => {
        async function loadData() {
            await dispatch(service.GetTasks())
            setLoading(false);
        }               
        
        loadData();
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
                        <ListWithLoading taskList={tasks} isLoading={isLoading}/>                        
                    </Col> 
                </Row>
        </React.Fragment>);
  }