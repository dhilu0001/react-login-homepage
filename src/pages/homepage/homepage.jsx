import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/list-user-actions'

class HomePage extends Component {

    state = {
        searchField: ''
      };

    componentDidMount() {
        const { fetchUsersList } = this.props;
        fetchUsersList();
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
      };

    render() {
        const { user } = this.props;
        const { userList } = user;
        const {searchField} =this.state;
        const localUsers = localStorage.getItem('registeredUser');
        console.log("test:",localUsers);
        let derivedUserList;
        if(!searchField) {
            derivedUserList = userList.map(data => data.user).map(data => data.name) 
        } else {
            derivedUserList = userList.map(data => data.user).map(data => data.name).filter(user =>
                (user.first+user.last).toLowerCase().includes(searchField.toLowerCase())
              );
        }
        return (
            <div className='home-page'>
                <label>Search</label>
                <input type="search" onChange={this.onSearchChange} />
                <h2> User List</h2>
                {
                    derivedUserList.map(({ title, first, last }) => (
                        <table>
                            <tbody>
                                <tr>{`${title}.${first} ${last}`}</tr>
                            </tbody>
                        </table>
                    ))
                }

            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

export default connect(mapStateToProps, UserActions)(HomePage);
