import { connect } from 'react-redux';
import { NewTodoForm } from '../ui'
import { createTodo } from '../../../common/actions'

const mapStateToProps = state => ({
    todos: state.todo
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

const NewTodoFormontainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewTodoForm);

export { NewTodoFormontainer }