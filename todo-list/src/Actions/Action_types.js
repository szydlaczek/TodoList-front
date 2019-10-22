export const TASK_FETCHED = "REWARDS_FETCHED";

export const tasksFetched = (data) => {
    return {
        type: TASK_FETCHED,
        payload: data,
    }
}