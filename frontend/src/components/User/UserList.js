import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../services/index';
import { Button, Card, FormControl, InputGroup, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStepBackward, faFastBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import './UserList.css';
import { Alert } from 'bootstrap';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage : 1,
            usersPerPage: 10
        };
    }

    componentDidMount() {
        //this.findAllRandomUsers();
        this.props.fetchUsers();
    }

    // findAllRandomUsers() {
    //     axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
    //     .then(response => response.data)
    //     .then((data) => {
    //         this.setState({users: data});
    //     });
    // };

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage : 1
            });
        }
    };

    prevPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage : this.state.currentPage - 1
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.props.userData.users.length / this.state.usersPerPage)) {
            this.setState({
                currentPage : this.state.currentPage + 1
            });
        }
    };

    lastPage = () => {
        let usersLength = this.props.userData.users.length;
        if(this.state.currentPage < Math.ceil(usersLength / this.state.usersPerPage)) {
            this.setState({
                currentPage : Math.ceil(usersLength / this.state.usersPerPage)
            });
        }
    };

    render() {

        const {currentPage, usersPerPage} = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firstIndex = lastIndex - usersPerPage;

        const userData = this.props.userData;
        const users = userData.users;
        const currentUsers = users.slice(firstIndex, lastIndex);
        const totalPages = parseInt((users.length / usersPerPage));

        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };

        return (
            <div className='card-position'>
                {userData.error ? 
                    <Alert variant="danger">
                        {userData.error}
                    </Alert> :
                    <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUser}/>{' '}Lista użytkowników</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                    <td>Dane</td>
                                    <td>Email</td>
                                    <td>Adres</td>
                                    <td>Data stworzenia</td>
                                    <td>Saldo</td>
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
                                    <Button type='button' variant='outline-info' disabled={currentPage === 1 ? true : false}
                                    onClick={this.firstPage}>
                                    <FontAwesomeIcon icon={faFastBackward}/>{' '}Pierwsza
                                    </Button>
                                    <Button type='button' variant='outline-info' disabled={currentPage === 1 ? true : false}
                                    onClick={this.prevPage}>
                                    <FontAwesomeIcon icon={faStepBackward}/>{' '}Poprzednia
                                    </Button>
                                <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage} 
                                    onChange={this.changePage}/>
                                    <Button type='button' variant='outline-info' disabled={currentPage === totalPages ? true : false}
                                    onClick={this.nextPage}>
                                    <FontAwesomeIcon icon={faStepForward}/>{' '}Następna
                                    </Button>
                                    <Button type='button' variant='outline-info' disabled={currentPage === totalPages ? true : false}
                                    onClick={this.lastPage}>
                                    <FontAwesomeIcon icon={faFastForward}/>{' '}Ostatnia
                                    </Button>
                            </InputGroup>
                        </div>
                    </Card.Footer>
                </Card>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);