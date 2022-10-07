import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock, faUndo,faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {registerUser} from '../services/index'
import { Link } from 'react-router-dom';
import RegisterAlert from './RegisterAlert';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.state.message = '';
        this.registrationAlert = React.createRef();
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
            mobile: this.state.contact,
            password: this.state.password
        };
        this.props.registerUser(userObject);
        this.resetRegisterForm();
        setTimeout(() => {
            if(this.props.user.message != null) {
                this.setState({ show: true, message: this.props.user.message});
                this.showRegistrationAlert("success", "Zarejestrowano!", "Zostaniesz przeniesiony do strony logowania.");
                setTimeout(() => {
                    this.setState({show: false});
                    this.props.history.push("/logowanie");
                }, 2000);
            } else {
                this.setState({show: false});
                this.showRegistrationAlert("danger","Użytkownik istnieje!", "Zmień adres e-mail")
            }
        }, 400);
    };

    resetRegisterForm = () => {
        this.setState(() => this.initialState);
    };

    showRegistrationAlert(variant, heading, message) {
        this.registrationAlert.current.setVariant(variant);
        this.registrationAlert.current.setHeading(heading);
        this.registrationAlert.current.setMessage(message);
        this.registrationAlert.current.setVisible(true);
    }

  render() {
    const {name, email, password, contact} = this.state;

    return (
        <>
        <Row style={{position: "relative", top: "200px", left: "525px"}}>
            <Col xs={5}>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={faUserPlus} /> Rejestracja
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                <FormControl 
                                autoComplete='off' 
                                type='text' 
                                name='name' 
                                value={name} 
                                onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Nazwa użytkownika" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                <FormControl 
                                required 
                                autoComplete='off' 
                                type='email' 
                                name='email' 
                                value={email} 
                                onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Adres mailowy" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                <FormControl 
                                required 
                                autoComplete='off' 
                                type='password' 
                                name='password' 
                                value={password} 
                                onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Hasło" />
                            </InputGroup>
                        </Form><br></br>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text><FontAwesomeIcon icon={faPhone}/></InputGroup.Text>
                                <FormControl 
                                autoComplete='off' 
                                type='text' 
                                name='contact' 
                                value={contact} 
                                onChange={this.userChange}
                                className={"bg-dark text-white"} placeholder="Numer telefonu" />
                            </InputGroup>
                        </Form><br></br>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button 
                        size="sm" 
                        type="button" 
                        variant="success" 
                        onClick={this.registerUser}
                        disabled={this.state.email.length === 0 || this.state.password.length === 0}>
                            <FontAwesomeIcon icon={faUserPlus}/> Rejestracja
                        </Button>{' '}
                        <Button 
                        size="sm" 
                        type="button" 
                        variant="info" 
                        onClick={this.resetRegisterForm}>
                        <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                    </Card.Footer>
                    <p style={{"paddingLeft": "2%"}}>Masz już konto? <Link to="/logowanie">Zaloguj się</Link></p>
                </Card>
            </Col>
        </Row>
        <RegisterAlert ref={this.registrationAlert} />
        </>
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
