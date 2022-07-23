import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./header.css";
import React from "react";


function Header() {
    return (
        <div className="wrap">
            <Navbar variant="dark" expand="lg" className="wrap" >
                <Container fluid style={{ marginLeft: "4%", marginRight: "3%", padding: "4px" }}>
                    <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Cities" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar  variant="dark" className="wrap2" style={{padding:"0px"}}>
                <Container fluid  style={{ marginLeft: "4%", marginRight: "3%" ,padding:"0px" }}>
                    
                    
                        <Nav >
                            <Nav.Link href="/movies">Movies</Nav.Link>
                            <Nav.Link href="/register">Registration</Nav.Link>
                            <Nav.Link href="/events">Events </Nav.Link>
                            <Nav.Link href="#link">Plays</Nav.Link>
                            <Nav.Link href="#home">Sports</Nav.Link>
                            <Nav.Link href="#link">Activites</Nav.Link>
                            <Nav.Link href="#home">Buzz</Nav.Link>
                            
                            
                        </Nav>
                        <Nav >
                            <Nav.Link href="#home">ListYourShow</Nav.Link>
                            <Nav.Link href="#link">Corporates</Nav.Link>
                            <Nav.Link href="#home">Offers </Nav.Link>
                            <Nav.Link href="#home">GiftCard </Nav.Link>
                            
                            
                            
                        </Nav>
                    
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
