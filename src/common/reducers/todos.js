import { CREATE_TDOD, REMOVE_TODO } from '../actions'

const todos = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CREATE_TDOD: {
            const { text } = payload
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const { text } = payload
            return state.filter(todo => todo.text !== text)
        }
        default:
            return state
    }
}

export default todos