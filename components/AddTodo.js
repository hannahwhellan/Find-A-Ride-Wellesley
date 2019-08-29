import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



export class AddTodo extends Component {
    /*
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
        }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}
*/

state = {
    destination: '',
    departureTime: '',
    availableSeats: '',
    name: this.props.name,
    picture: this.props.picture
}



//entering in the forms
//the rackets allow you to use this method for all the feilds if name =field
change = (e) => {
    this.setState({
        [e.target.name]: e.target.value });
    //console.log(this.state.destination);
};

//for available seats drop down only
changeDropdown = (e) => {
    this.setState({availableSeats: e.label});
   //console.log(this.state.availableSeats);
};

onSubmit = (e) => {
    e.preventDefault(); //stops from submitting to actual file
    //passing up the parameters to app.js for addTodo
    this.props.addTodo(this.state.destination, this.state.departureTime, this.state.availableSeats, this.state.name, this.state.picture);
    this.setState({
        destination: '',
        departureTime: '',
        availableSeats: '',
        name: this.props.name,
        picture: this.props.picture
    });
};

//drop down options for available seats
//is there a way to not have to hardcode this?
getNumbers = () => {
    const options = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: '10', value: 10},
      ];
      return options;
}

render() {
   
    return (
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        
        <form>
            <input 
            name="destination"
            placeholder='Destination' 
            value={this.state.destination} 
            onChange={e => this.change(e)}
            />
            <br />
            <input 
            name="departureTime"
            placeholder='Departure Time' 
            value={this.state.departureTime} 
            onChange={e => this.change(e)}
            />
            <br />
            <Select options = { this.getNumbers() }
             name="availableSeats"
             placeholder='Available Seats'
             value={this.state.availableSeats}
             onChange={this.changeDropdown}
             
             />
            
            <br />
            <button style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
             onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
        </div>
    );
}
}



//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
