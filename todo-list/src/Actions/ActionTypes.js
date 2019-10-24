export const TASKS_FETCHED = "TASKS_FETCHED";
export const TASK_STARTED = "TASK_STARTED";
export const TASK_ENDED = "TASK_ENDED";

export const tasksFetched = (data) => {
    return {
        type: TASKS_FETCHED,
        payload: data,
    }
}

export const taskStarted = (taskId) => {
    return {
        type: TASK_STARTED,
        payload: taskId,
        
    }
}

export const taskEnded = (taskId) => {
    return {
        type: TASK_ENDED,
        payload: taskId,        
    }
}