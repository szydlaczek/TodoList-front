import React from 'react';
import NewTaskForm from './NewTaskForm'
import {  useDispatch } from "react-redux";
import {CreateTask} from './../Services/TaskService';

export default () => {

    const dispatch = useDispatch();
    
    const createTask =  (data) => {
        
          dispatch(CreateTask(data));  
    }
    return (
        <React.Fragment>
            <NewTaskForm submitForm={createTask}/>
        </React.Fragment>
    )
}