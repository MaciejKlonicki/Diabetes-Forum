import React, { Component } from 'react'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email:'', password:'', error:''
    };

  render() {
    return (
        <div>
            Register
        </div>
    )
  }
}

export default Register;