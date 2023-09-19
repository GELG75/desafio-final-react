import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const Buscador = ({ onChange, search  }) => { 
     

 
 
    
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="bg-body-tertiary" href="#">Usuario</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={onChange}
                        />
                        <Button variant="outline-success">Buscar </Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Buscador