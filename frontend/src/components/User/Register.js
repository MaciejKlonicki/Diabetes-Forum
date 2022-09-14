import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock, faUndo,faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import {registerUser} from '../services/index'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        name:'', email:'', password:'', contact:''
    };

    userChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    registerUser = () => {
        let userObject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.contact
        };
        this.props.registerUser(userObject);
        this.resetRegisterForm();
        setTimeout(() => {
            if(this.props.user.message != null) {
                
            } else {

            }
        }, 2000);
    };

    resetRegisterForm = () => {
        this.setState(() => this.initialState);
    };
    

  render() {
    const {name, email, password, contact} = this.state;

    return (
        <Row className='css-position-register'>
            <Col xs={5}>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={faUserPlus} /> Rejestracja
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                <FormControl autoComplete='off' type='text' name='name' value={name} onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Enter name" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                <FormControl required autoComplete='off' type='text' name='email' value={email} onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Enter email address" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                <FormControl required autoComplete='off' type='password' name='password' value={password} onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Enter password" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faPhone}/></InputGroup.Text>
                                <FormControl autoComplete='off' type='text' name='contact' value={contact} onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Enter phone number" />
                            </InputGroup>
                        </Form><br></br>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" type="button" variant="success" onClick={this.registerUser}
                        disabled={this.state.email.length === 0 || this.state.password.length === 0}>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                        </Button>{' '}
                        <Button size="sm" type="button" variant="info" onClick={this.resetRegisterForm}>
                        <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (userObject) => dispatch(registerUser(userObject))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
