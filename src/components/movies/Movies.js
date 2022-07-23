import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'


function Movies() {
    return (
        <div>
            <Container fluid style={{ padding: "5%", background: "pink" }}>
                <Row>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="./card1.webp" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src="./card2.webp" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="./card3.webp" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="./card4.webp" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            
                                
                        </Card>
                    </Col>

                    
                    

                </Row>
            </Container>
        </div>
    );
}

export default Movies;