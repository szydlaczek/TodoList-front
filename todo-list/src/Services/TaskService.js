import * as actions from '../Actions/ActionTypes';
const api = "http://localhost:51484/"

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

    
        dispatch(actions.taskEnded(taskId, 1));
}