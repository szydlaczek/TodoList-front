import * as actions from './../Actions/Action_types';

export const GetTasks = (title) => async dispatch => {
    
    try {
        const url = title ? `tasks?temat=${title}` : "tasks";
        
        const response = await fetch(`http://localhost:50734/${url}`, {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const tasks = await response.json(); 

        dispatch(actions.tasksFetched(tasks.data))
        
    }
    catch {

    }
}

export const StartTask = (taskId) => async dispatch => {
    
}