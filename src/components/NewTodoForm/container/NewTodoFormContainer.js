import { connect } from 'react-redux';
import { NewTodoForm } from '../ui'
import { createTodo } from '../../../common/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

const NewTodoFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodoForm);

export { NewTodoFormContainer }