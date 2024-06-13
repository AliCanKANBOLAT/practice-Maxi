import React, { Component } from 'react'; // react objesinden Component import edilmeli

import classes from './Users.module.css';
import User from './User';

class Users extends Component {
  constructor(props) {
    super(props); // super(props) çağrısı unutulmamalı
    this.state = {
      showUsers: true,
      more: "Test"
    };
  }

  toggleUsersHandler = () => {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
