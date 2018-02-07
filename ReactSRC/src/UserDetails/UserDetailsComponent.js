import React from 'react';
import axios from 'axios';
import {injector} from 'react-services-injector';

const errorStyle = {
    color: 'red'
}

class UserDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 0, errorMessage: ''}
    }

    addCartUser = (event) => {
        const {User, Cart} = injector.get();
        if (User.currentUser !== null) {
            axios.post('http://localhost:8081/api/doctors/' + User.currentUser + '/cart-users', this.props.details)
            .then((response) => {
                if (response.status === 204) {
                    this.setState({errorMessage: <p style={errorStyle}>Item is already in cart</p>});
                } else {
                    Cart.addUser(User.currentUser);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>{this.props.details.name}</h4>
                <p>{this.props.details.surname}</p>
                <p>{this.props.details.username}</p>
                <p>{this.props.details.specialisation}</p>
                <button className="btn btn-success" onClick={this.addCartUser}>To cart</button>
                <button className="btn btn-default" onClick={this.props.history.goBack}>Back</button>
                {this.state.errorMessage}
            </div>
        );
    }

};

export default injector.connect(UserDetailsComponent);
