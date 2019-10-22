import * as ACTION_TYPES from './../Actions/Action_types'

const initialState = {
    tasks : []
}

export const tasksReducer = (state = initialState, action) => {
    alert("Tak")
    switch(action.type) {
        case ACTION_TYPES.TASK_FETCHED:
            const tasks = action.payload;

            return {...state, tasks};
        default:
            return state;
    }
}

export default tasksReducer;