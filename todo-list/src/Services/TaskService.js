import * as actions from '../Actions/ActionTypes';
import { api } from './../Config'

export const GetTasks = (title) => async dispatch => {
    
    try {
        const url = title ? `${api}tasks?temat=${title}` : `${api}tasks`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if (response.status >= 200 &&  response.status <= 300) {
            const tasks = await response.json();
            dispatch(actions.tasksFetched(tasks.data))
        }        
    }
    catch {

    }
}

export const StartTask = (taskId) => async dispatch => {

    const url = `${api}tasks/${taskId}/start`;
    const response = await fetch(url, {
        method: 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        }
    })

     if (response.status >= 200 &&  response.status <= 300)
        dispatch(actions.taskStarted(taskId, 1));
}

export const EndTask = (taskId) => async dispatch => {
    const url = `${api}tasks/${taskId}/stop`;
    
    const response = await fetch(url, {
        method: 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        }
    })

     if (response.status >= 200 &&  response.status <= 300)
        dispatch(actions.taskEnded(taskId, 1));
}

export const CreateTask = (data) =>  async dispatch => {

    const url = `${api}Tasks`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status === 201) {
        alert("utworzono");
    }
}