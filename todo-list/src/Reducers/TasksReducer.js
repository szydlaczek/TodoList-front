import * as ACTION_TYPES from './../Actions/Action_types'
import update from 'react-addons-update';

const initialState = {
    tasks : []
}

export const tasksReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ACTION_TYPES.TASKS_FETCHED:
            const tasks = action.payload;

            return {...state, tasks};
        
        case ACTION_TYPES.TASK_STARTED:
            return update(state, {
                tasks: {
                    [action.payload] : {
                        
                    }
                }
            })

        default:
            return state;
    }
}

export default tasksReducer;