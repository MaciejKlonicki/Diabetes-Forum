import React, {Component} from 'react'
import axios from 'axios';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import './UserList.css';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
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
        return (
            <div className='card-position'>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList}/>{' '}Lista użytkowników</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>

                                </tr>
                            </thead>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}