import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


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
                            <Nav.Link href="#features">somthing1</Nav.Link>
                            <Nav.Link href="#pricing">somthing2</Nav.Link>
                            <Nav.Link href="#pricing">somthing3</Nav.Link>
                            <Nav.Link href="#pricing">somthing4</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        );
    }
}
export default Header;