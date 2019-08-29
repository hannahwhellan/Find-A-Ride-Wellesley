import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { BrowserRouter as Router} from 'react-router-dom';
import LinkToRides from './layout/LinkToRides';


export class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
        }

    responseFacebook = response => {
        //console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    
    

    

   // componentClicked = () => console.log("clicked");

    render() {
        let fbContent;
        
        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                    <br/>
                    <br/>
                    <Router>
                        <LinkToRides/>
                    </Router>
                    
                </div>
                
            );
        } else {
            fbContent = (<FacebookLogin
                appId="379388926113303"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook;

//<Route path='/todoForm' component={TodoForm}/>