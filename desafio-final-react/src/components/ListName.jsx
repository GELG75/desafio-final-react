import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
 import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Buscador from "../components/Buscador";


const ListName = ({ users, onChange, search }) => {
    const [sortData, setSortData] = useState([]);
 
    function sortUsers() {
        users.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0

        })
     
        setSortData([...users, sortData]);
    }
  
    return (
        <div className="App">
            <Buscador   onChange={onChange} search={search} />
            <Button variant="outline-success" onClick={sortUsers}  >Ordenar A-Z </Button>
            <Container>
                <Row>
                    <ListGroup className="mt-5"  numbered variant="flush">
                        {users.map(user => (
                            <ListGroup.Item
                                key={user.id}>
                                {user.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Row>
            </Container>
        </div>
    )
}

export default ListName
