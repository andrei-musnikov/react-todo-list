export const CREATE_TDOD= 'CREATE_TODO'
export const createTodo = text => ({
    type: CREATE_TDOD,
    payload: {text}
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
})