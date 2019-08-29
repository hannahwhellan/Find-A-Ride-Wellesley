import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Facebook from './components/Facebook';
import TodoForm from './components/TodoForm';
import Header from './components/layout/Header';


class App extends Component {

  

    render() {
      return (
        <div className="App">
        <Header/>
          <Router>
            <Route exact path='/' render={props => (
              <Facebook myCallbackName={this.myCallbackName}/>
            )}/>
            <Route path='/todoForm' component={TodoForm}/>
          </Router>
        </div>
        );
      }
    }


export default App;
