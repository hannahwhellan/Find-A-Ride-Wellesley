import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    //function for the style of the todos, this changes when an item is completed
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: this.props.todo.completed ?
            '#f4f4f4' : '#8bdd61'
            
            /* (this is from the tutorial and puts a line through the todo) textDecoration: this.props.todo.completed ?
            'line-through' : 'none'*/
        }
    }

    /*
    markComplete = (e) => {
        console.log(this.props)
    }
    */
    

    render() {
        const { id, destination, departureTime, availableSeats, name, picture } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> 
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> 
                {' '} {name} {' '} {picture} {' '} { destination } {' '} { departureTime } {' '} { availableSeats } 
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
//taking in an object here instead of an array like in Todos.js
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

/*
this is how to set the style using a variable. You would then put 
the name 'itemStyle' in single brackets in the <div style={}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}
*/

export default TodoItem;
