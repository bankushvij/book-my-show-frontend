import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import React from "react";
import './premiere.css';
function Premiere() {
    return (
        <div className="premiere-bg">
            <div className="premiere">
                <img src="./premiere.webp" style={{ width: "100%" }} />
                <h3>Premiere</h3>
                <h4>Brand new release every Friday</h4>
                <Carousel className="premiere-bg">

    
                    <Carousel.Item  style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",
                            
                        }}>
                            <Card.Img variant="top" src="./card1.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card5.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card2.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card3.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>


                    </Carousel.Item>


                    <Carousel.Item  style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card3.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card2.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card4.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>
                        <Card  className="card" style={{
                            width: '300px',
                            height: "500px",

                        }}>
                            <Card.Img variant="top" src="./card5.webp" style={{
                                width: '300px',
                                height: "420px",

                            }} />
                            <Card.Body className="premiere-bg">


                                <h4>kgf chapter 2</h4>
                                <h6>Action/Drama/Thriller</h6>


                            </Card.Body>
                        </Card>


                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
}

export default Premiere;