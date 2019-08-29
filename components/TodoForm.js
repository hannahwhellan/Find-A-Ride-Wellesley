import React, { Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Todos from './Todos';
import AddTodo from './AddTodo';
import uuid from 'uuid';
//import Facebook from './Facebook';



export class TodoForm extends Component {
  
  state = {
    todos: []
  }

  


  //toggle complete
  markComplete = (id) => {
    //console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
    !== id)] });
  }

  //Add Todo
  addTodo = (destination, departureTime, availableSeats, name, picture) => {
    //console.log("destination: " + destination);

    const newTodo = {
      id: uuid.v4(),
      destination,
      departureTime,
      availableSeats,
      completed: false,
      name,
      picture
      }
      //console.log("seats: " + newTodo.availableSeats);
      
        //this was when we had hard coded the todos
        this.setState({ todos: [...this.state.todos, newTodo] });
  }
  
  render() {
   
    console.log("from TodoForm state: ", this.state.todos)
    return (
      <Router>
        <div className="TodoForm">
          <div className="container">
                
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
                
              
              
          </div>
        </div>
      </Router>
    );
  }
}

export default TodoForm;

