import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovieFetch() {
    const { movid } = useParams();
    console.log(movid);
    const [data, setdata] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/movies/${movid}`);
            console.log(response);

            setdata([response.data]);
            console.log([response.data]);
        } catch (error) {
            console.error(error);
        }


    }, [])
    return (

        <div>
            <Container fluid style={{ padding: "5%", background: "pink" }}>
                <Row>
                    {data.map((mov) => {

                        return (
                            <Col key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                <Card>
                                    <Card.Img variant="top" src={mov.imageurl} />
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>{mov.actor}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })
                    }
                </Row>

            </Container>

        </div >

    );
}

export default SingleMovieFetch;
