import React, { Component } from 'react';
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faLock, faSignInAlt, faUndo} from "@fortawesome/free-solid-svg-icons";
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    email:'', password:''
  }

  credentialChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  resetLoginForm = () => {
    this.setState(() => this.initialState);
  }

  render () {

    const {email, password} = this.state;
    
    return (
      <div className='background'>
      <Row className='justify-content-md-center'>
        <Col xs={4}>
          <Card className='border border-dark bg-dark text-white'>
            <Card.Header>
              <FontAwesomeIcon icon={faSignInAlt}/>{' '}Login
            </Card.Header>
            <Card.Body>
              <Form as={Col} className='email-form'>
                <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                    <FormControl 
                    required
                    autoComplete='off'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.credentialChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Email Address"/>
                </InputGroup>
              </Form>
              <Form as={Col}>
                <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                    <FormControl 
                    required
                    autoComplete='off'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.credentialChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Password"/>
                </InputGroup>
              </Form>
            </Card.Body>
            <Card.Footer style={{"text-align":"right"}}>
              <Button size="sm" type='button' variant='success'
              disabled={this.state.email.length === 0 || this.state.password.length === 0}>
                <FontAwesomeIcon icon={faSignInAlt}/> Login
              </Button>{' '}
              <Button size="sm" type='button' variant='info' onClick={this.resetLoginForm}
              disabled={this.state.email.length === 0 && this.state.password.length === 0}>
                <FontAwesomeIcon icon={faUndo}/> Reset
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      </div>
    )
  }
  };

  export default Login;