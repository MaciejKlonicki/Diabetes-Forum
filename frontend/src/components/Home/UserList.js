import React, {Component} from 'react'
import axios from 'axios';
import { Button, Card, FormControl, InputGroup, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import './UserList.css';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage : 1,
            usersPerPage: 10
        };
    }

    componentDidMount() {
        this.findAllRandomUsers();
    }

    findAllRandomUsers() {
        axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
        .then(response => response.data)
        .then((data) => {
            this.setState({users: data});
        });
    } ;

    render() {

        const {users, currentPage, usersPerPage} = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firstIndex = lastIndex - usersPerPage;
        const currentUsers = users.slice(firstIndex, lastIndex);
        const totalPages = (users.length / usersPerPage);

        return (
            <div className='card-position'>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUser}/>{' '}Lista użytkowników</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Address</td>
                                    <td>Created</td>
                                    <td>Balance</td>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">Brak użytkowników!</td>
                                </tr> : 
                                currentUsers.map((user, index) =>(
                                    <tr key={index}>
                                        <td>{user.first}{' '}{user.last}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.created}</td>
                                        <td>{user.balance}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                        <div style={{"float":"left"}}>
                            Strona {currentPage} z {totalPages}
                        </div>
                        <div style={{"float":"right"}}>
                            <InputGroup size='sm'>
                                    <Button type='button' variant='outline-info' disabled={currentPage === 1 ? true : false}>
                                    <FontAwesomeIcon icon={faFastBackward}/>{' '}Pierwsza
                                    </Button>
                                    <Button type='button' variant='outline-info' disabled={currentPage === 1 ? true : false}>
                                    <FontAwesomeIcon icon={faStepBackward}/>{' '}Poprzednia
                                    </Button>
                                <FormControl />
                                    <Button type='button' variant='outline-info' disabled={currentPage === totalPages ? true : false}>
                                    <FontAwesomeIcon icon={faStepForward}/>{' '}Następna
                                    </Button>
                                    <Button type='button' variant='outline-info' disabled={currentPage === totalPages ? true : false}>
                                    <FontAwesomeIcon icon={faFastForward}/>{' '}Ostatnia
                                    </Button>
                            </InputGroup>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}