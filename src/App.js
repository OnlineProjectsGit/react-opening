import React from 'react';

import './App.css';
import SayHi from './components/HiComponent';
import NavBar from './components/NavBar';
import Users from './components/Users';

export default class App extends React.Component {
  constructor() {
    super()
    this.users = [
      { name: "Michael", age: 24, email: "Michael@email.com" },
      { name: "Michaela", age: 35, email: "Michaela@email.com" },
      { name: "Michaelason", age: 46, email: "Michaelason@email.com" }
    ]
    this.state = {
      user: this.users[1].name
    }

    this.updateUser = this.updateUser.bind(this)
  }

  updateUser() {
    let newNum = Math.floor(Math.random() * 3)
    let newName = this.users[newNum].name
    this.setState({ user: newName })
  }

  render() {
    return (
      <div className='App'>
        <NavBar />

        <SayHi
          name={"The Team"}
        />

        <div>
          <p>{this.state.user}</p>
          <button onClick={this.updateUser}>Click Me!</button>
        </div>

        <br />

        <Users />

      </div>
    )
  }
}


