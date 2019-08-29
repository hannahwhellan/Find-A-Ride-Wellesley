import React, { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
//import Facebook from './Facebook';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete=
        {this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
//defining all the prop-types for this class
//array of objects of props
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default Todos;
