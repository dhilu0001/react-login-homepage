import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as RegisterAction from '../../redux/actions/register-action'

import './register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: '',
            title: '',
            last: '',
            first: '',
            email: '',
            username: '',
            passoword: '',
            dob: '',
            phone: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { Register } = this.props;
        console.log(this.state);
        try {
            Register(this.state);
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <span>Sign Up</span>

                <form onSubmit={this.handleSubmit} className="register">
                    <label>Gender</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />

                    <label>Title (Mr/Mrs/Ms)</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

                    <label> First Name</label>
                    <input type="text" name="first" value={this.state.first} onChange={this.handleChange} />

                    <label>Last Name</label>
                    <input type="text" name="last" value={this.state.last} onChange={this.handleChange} />

                    <label>E-Mail</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />

                    <label>User Name</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    <label>DOB</label>
                    <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />

                    <label>Phone</label>
                    <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange} />

                    <button type='submit'> Sign in </button>
                </form>
            </div>
        );
    }
}

export default withRouter(connect(null, RegisterAction)(Register));
