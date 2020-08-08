import React from 'react';
import { userData } from '../../constants/userDetails';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { username, password } = this.state;
    console.log("username",username,password,this.state);

    try {
      const test = userData.includes(this.state);
      console.log("test",test)
      this.setState({ username: '', password: '' });
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
        <span>Sign in with your user Name and Password</span>

        <form onSubmit={this.handleSubmit}>
        <label>User Name</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button type='submit'> Sign in </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
