import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import "./card-carousel.css";
import { CardGroup } from 'react-bootstrap';
import React from "react";
function Cards() {
    return (
        <div className="cardcollection">
            <h3>Recommended Movies</h3>
            <Carousel >

                <Carousel.Item interval={1000}style={{ display: "flex", justifyContent: "space-between" }}>
                
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card1.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card3.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>Secrets of dumbledore</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card4.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>Doctor strange</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card2.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>RRR</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    
                </Carousel.Item>
                <Carousel.Item interval={2000} style={{ display: "flex", justifyContent: "space-between" }}>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card5.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card3.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>Secrets of dumbledore</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card4.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>Doctor strange</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card border="light" className="card" style={{
                        width: '300px',
                        height: "500px",
                        borderRadius: "10px"
                    }}>
                        <Card.Img variant="top" src="./card5.webp" style={{
                            width: '300px',
                            height: "420px",
                            borderRadius: "10px"
                        }} />
                        <Card.Body>

                            <Card.Text className="cardText">
                                <h4>RRR</h4>
                                <h6>Action/Drama/Thriller</h6>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Cards;