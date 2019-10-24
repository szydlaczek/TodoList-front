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
            const taskIndex = state.tasks.findIndex((t) => 
                t.id === action.payload
            )
            
            return update(state, {
                tasks: {
                    [taskIndex] : {
                            status : {$set: action.status}
                    }
                }
            })
        case ACTIONTYPES.TASK_ENDED:
                const taskToRemoveIndex = state.tasks.findIndex((t) => 
                t.id === action.payload
            )

            return update(state, {
                tasks: { $splice: [[taskToRemoveIndex,1]] }
            })

        default:
            return state;
    }
}

export default tasksReducer;