import * as ACTIONTYPES from '../Actions/ActionTypes'
import update from 'react-addons-update';

const initialState = {
    tasks : []
}

export const tasksReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ACTIONTYPES.TASKS_FETCHED:
            const tasks = action.payload;

            return {...state, tasks};
        
        case ACTIONTYPES.TASK_STARTED:
            var taskIndex = state.tasks.findIndex((t) => 
                t.id === action.payload
            )
            alert (taskIndex);
            return update(state, {
                tasks: {
                    [taskIndex] : {
                            status : {$set: 1}
                    }
                }
            })

        default:
            return state;
    }
}

export default tasksReducer;