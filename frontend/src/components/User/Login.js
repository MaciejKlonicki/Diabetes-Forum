import React, { Component } from 'react'
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt, faEnvelope, faLock, faUndo} from '@fortawesome/free-solid-svg-icons';
import './Login.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email:'', password:''
    };

    credentialChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

  render() {

    const {email, password} = this.state;

    return (
      <Row className='css-position'>
        <Col xs={5}>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Card.Header>
                <Card.Body>
                    <Form as={Col}>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                        </InputGroup>
                        <FormControl required autoComplete='off' type='text' name='email' value={email} onChange={this.credentialChange}
                            className={"bg-dark text-white"} placeholder="Enter Email Address"/>
                    </Form>
                    <br></br>
                    <Form as={Col}>
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                        </InputGroup>
                        <FormControl required autoComplete='off' type='password' name='password' value={password} onChange={this.credentialChange}
                            className={"bg-dark text-white"} placeholder="Enter Password"/>
                    </Form>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" type="button" variant="success" disabled={this.state.length===0 || this.state.password.length===0}>
                        <FontAwesomeIcon icon={faSignInAlt}/> Login
                    </Button>{' '}
                    <Button size="sm" type="button" variant="info" onClick={this.resetLoginForm} disabled={this.state.length===0 && this.state.password.length===0}>
                        <FontAwesomeIcon icon={faUndo}/> Reset
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
      </Row>
    )
  }
}

export default Login;
