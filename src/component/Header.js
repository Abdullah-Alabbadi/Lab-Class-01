import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends React.Component {

    render() {
        return (
            <>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">HornedBeast</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">yla</Nav.Link>
                            <Nav.Link href="#pricing">btata</Nav.Link>
                            <Nav.Link href="#pricing">yla</Nav.Link>
                            <Nav.Link href="#pricing">bndora</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        );
    }
}
export default Header;