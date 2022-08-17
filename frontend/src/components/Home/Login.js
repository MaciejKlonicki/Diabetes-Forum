import React, {} from 'react';
import {Row, Col, Card, Form, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faLock, faSignInAlt} from "@fortawesome/free-solid-svg-icons"

function Login() {

  // constructor(props) {
  //   super(props);
  // }

  let email;
  let password;


    return (

      <Row className='justify-content-md-center'>
        <Col xs={5}>
          <Card>
            <Card.Header>
              <FontAwesomeIcon icon={faSignInAlt}/>Login
            </Card.Header>
            <Card.Body>
              <Form>
                <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                    <FormControl 
                    required
                    autoComplete='off'
                    type='text'
                    name='email'
                    value={email}
                    className={"bg-dark text-white"}
                    placeholder="Enter Email Address"/>
                </InputGroup>
              </Form>
              <Form>
                <InputGroup>
                    <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                    <FormControl 
                    required
                    autoComplete='off'
                    type='password'
                    name='password'
                    value={password}
                    className={"bg-dark text-white"}
                    placeholder="Enter Password"/>
                </InputGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  };

  export default Login;